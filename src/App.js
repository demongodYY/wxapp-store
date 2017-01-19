import React, { Component } from 'react';
import WxAppClassTab from './Components/WxAppClassTab';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery';
import './App.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            typesArray:[],
        };
    }

    componentDidMount() {
        let that = this;
        $.post("http://www.bokajun.com/management/bokajun/bokaList/ALL/dayHits",function (result,status) {
            let typesArray = that.getTypesArray(result);
            that.setState({
                data : result,
                typesArray: typesArray
            });
        })
    }

    componentWillUnmount() {

    }

    getTypesArray = (wxAppItems) => {
        let TypesArray = ["全部"];
        for(let i = 0;i<wxAppItems.length;i++){
            if(TypesArray.indexOf(wxAppItems[i].desc)===-1){
                TypesArray.push(wxAppItems[i].desc)
            }
        }
        return(TypesArray);
    };

    render() {
        return (
          <MuiThemeProvider>
              <div className="App">
                <h1>小程序列表</h1>
                <WxAppClassTab wxAppItems={this.state.data} wxAppTypes={this.state.typesArray}/>
              </div>
          </MuiThemeProvider>

        );
    }
}

export default App;
