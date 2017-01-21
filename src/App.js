import React, { Component } from 'react';
import {Spin} from 'antd';
import $ from 'jquery';
import './App.css';
import WxAppClassTab from './Components/WxAppClassTab';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            typesArray:[],
            statu:false,
        };
    }

    componentDidMount() {
        let that = this;
        $.post("http://www.bokajun.com/management/bokajun/bokaList/ALL/dayHits",function (result,status) {
            let typesArray = that.getTypesArray(result);
            that.setState({
                data : result,
                typesArray: typesArray,
                statu:true,
            });
        })
    }

    componentWillUnmount() {
        this.setState({
            statu:false,
        })
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
        if(this.state.statu===true){
            return (
                <div className="App">
                    <WxAppClassTab wxAppItems={this.state.data} wxAppTypes={this.state.typesArray}/>
                </div>
            );
        }
        else{
            return (
                <div className="App" style={{textAlign:"center",margin:"50px 0"}}>
                    <Spin size="large" tip="Loading..."/>
                </div>
            )
        }
    }
}

export default App;
