import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import WxAppList from './WxAppList';

class WxAppClassTabs extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value : '全部',
        };
    }
    handleChange  = (value) => {
        this.setState({
            value : value,
        })
    };
    render() {
        const that =this;
        return (

          <Tabs value={that.state.value} onChange={that.handleChange} tabItemContainerStyle={{display:"inline-block",overflowX :'auto',overflowY:'auto'}}>
              {
                  this.props.wxAppTypes.map(function (type,index) {
                      return(
                          <Tab label={type} value={type} key={index} style={{width:"auto",fontSize:18,padding:"0 0.5em"}}>
                            <WxAppList wxAppType={type} wxAppItems={that.props.wxAppItems}/>
                        　</Tab>
                      )
                 })
              }
          </Tabs>
        );
    }
}

export default  WxAppClassTabs