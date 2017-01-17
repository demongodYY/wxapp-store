import React, { Component } from 'react';
import './App.css';
import WxAppClassTab from './Components/WxAppClassTab';
import WxAppList from './Components/WxAppList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <div className="App">
            <h1>小程序列表</h1>
            <WxAppClassTab/>
            <WxAppList/>
          </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
