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

    getTypesArray = (wxAppItems) => {
        let TypesArray = ["全部"];
        for(let i = 0;i<wxAppItems.length;i++){
            if(TypesArray.indexOf(wxAppItems[i].type)===-1){
                TypesArray.push(wxAppItems[i].type)
            }
        }
        return(TypesArray)
    };

    render() {
        const that =this;
        const TypesArray=that.getTypesArray(that.props.wxAppItems);
        return (
          <Tabs value={that.state.value} onChange={that.handleChange}>
              {
                  TypesArray.map(function (type) {
                      return(<Tab label={type} value={type} key={type}>
                            <WxAppList wxAppType={type} wxAppItems={that.props.wxAppItems}/>
                      </Tab>)
                 })
              }
          </Tabs>
        );
    }
}

export default  WxAppClassTabs