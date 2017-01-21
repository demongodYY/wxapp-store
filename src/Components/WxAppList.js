/**
 * Created by loketa on 1/16/17.
 */
import React,{ Component }from 'react';
import {Collapse} from 'antd';
import {BackTop} from 'antd';
import $ from 'jquery';
import WxAppDetail from './WxAppDetail';
import WxAppItem from './WxAppItem';

const Panel = Collapse.Panel;
const $doc = $(document);
const $win = $(window);

class WxAppList extends Component{
    constructor(props){
        super(props);
        this.state = {
            index:1
        };
    }
    componentDidMount() {
        let that =this;
        $(window).scroll(function(){
            // test if at the bottom
            if ($doc.height()-$win.height()-$(this).scrollTop() === 0) {
                if(that.state.index*20<that.props.wxAppItems.length){
                    let pageIndex=that.state.index+1;
                    that.setState({
                        index:pageIndex
                    })
                }
            }
        });
    }

    componentWillUnmount() {

    }

    wxFilterAppItmes(wxAppType,wxAppItmes){
        if(wxAppType==="全部"){
            return wxAppItmes;
        }
        else{
            return (wxAppItmes.filter(function (item) {
                return item.desc===wxAppType;
            }));
        }
    }
    render() {
        return (
            <appListsheet>
                <Collapse accordion>
                    {
                        this.wxFilterAppItmes(this.props.wxAppType,this.props.wxAppItems).slice(0,this.state.index*20).map(function(item,index){
                            return (
                                    <Panel header={<WxAppItem wxAppItem={item}/>} key={index}>
                                        <WxAppDetail
                                            wxAppItem={item}
                                        />
                                    </Panel>
                            )
                        })
                    }
                </Collapse>
                <BackTop style={{right:"5%",bottom:"5%"}}/>
            </appListsheet>
        );
    }
}

export default  WxAppList;