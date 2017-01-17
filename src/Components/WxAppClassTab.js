import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

class WxAppClassTabs extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value : 'all',
        };
    }
    handleChange  = (value) => {
        this.setState({
            value : value,
        })
    };

    render() {
      return (
          <Tabs value={this.state.value} onChange={this.handleChange}>
              <Tab label="全部"　value="all">
              </Tab>
              <Tab label="体育"　value="sport">
              </Tab>
              <Tab label="社交"　value="comm">
              </Tab>
              <Tab label="阅读"　value="reading">
              </Tab>
              <Tab label="生活"　value="living">
              </Tab>
          </Tabs>
      );
    }
}

export default  WxAppClassTabs