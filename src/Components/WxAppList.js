/**
 * Created by loketa on 1/16/17.
 */
import React,{ Component }from 'react';
import List from 'material-ui/List/List';

import WxAppItem from './WxAppItem';

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
                <List>
                    {
                        this.wxFilterAppItmes(this.props.wxAppType,this.props.wxAppItems).map(function(item){
                            return (
                                    <WxAppItem
                                        key={item.id}
                                        wxAppItem={item}
                                    />
                            )
                        })
                    }
                </List>
            </appListsheet>
        );
    }
}

export default  WxAppList;