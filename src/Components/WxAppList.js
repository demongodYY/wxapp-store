/**
 * Created by loketa on 1/16/17.
 */
import React,{ Component }from 'react';
import {Collapse} from 'antd';
import {BackTop} from 'antd';
import WxAppDetail from './WxAppDetail';
import WxAppItem from './WxAppItem';

const Panel = Collapse.Panel;

class WxAppList extends Component{
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
                        this.wxFilterAppItmes(this.props.wxAppType,this.props.wxAppItems).map(function(item,index){
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