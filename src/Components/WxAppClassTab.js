import React from 'react';
import { Tabs } from 'antd';
import WxAppList from './WxAppList';
const TabPane = Tabs.TabPane;

class WxAppClassTabs extends React.Component {
    render() {
        const that =this;
        return (
        <section>
            <Tabs defaultActiveKey="0" >
                {
                    this.props.wxAppTypes.map(function (type,index) {
                        return(
                            <TabPane tab={type} key={index}>
                                <WxAppList wxAppType={type} wxAppItems={that.props.wxAppItems}/>
                            </TabPane>
                        )
                    })
                }
            </Tabs>
        </section>

        );
    }
}

export default  WxAppClassTabs