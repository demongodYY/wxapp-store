import React, { Component } from 'react';
import WxAppClassTab from './Components/WxAppClassTab';
import WxAppList from './Components/WxAppList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery';
import './App.css';

let testJson = [
    {
        "id": "5874800942857b72b1589bc5",
        "name": "王者荣耀赛事",
        "comp": "深圳市腾讯计算机系统有限公司",
        "type": "游戏",
        "logo": "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/f16a926276714663b43deb772e87ef6f.jpg",
        "pic":[
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/ca7eb72a7e104fceba560a4bcc16e7f8.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/352516af211143808422aa4acf208cc6.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/d5240cbd61f74a64a9e264691c3e9fff.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/906fa3e7191e415f99898c9d1202ef9a.jpg"
        ],
        "desc":"王者荣耀赛事，是服务赛事用户的优质内容平台，提供赛事直播、点播、官方资讯和战队信息等内容，是玩家观赛和获取资讯的首选。",
        "star": 4.2,
        "p-day": 2203,
        "p-week": 36985,
        "p-month": 45994
    },
    {
        "id": "5874800942857b72b1589bca",
        "name": "王者荣耀赛事１",
        "comp": "深圳市腾讯计算机系统有限公司",
        "type": "体育",
        "logo": "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/f16a926276714663b43deb772e87ef6f.jpg",
        "pic":[
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/ca7eb72a7e104fceba560a4bcc16e7f8.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/352516af211143808422aa4acf208cc6.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/d5240cbd61f74a64a9e264691c3e9fff.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/906fa3e7191e415f99898c9d1202ef9a.jpg"
        ],
        "desc":"王者荣耀赛事，是服务赛事用户的优质内容平台，提供赛事直播、点播、官方资讯和战队信息等内容，是玩家观赛和获取资讯的首选。",
        "star": 4.2,
        "p-day": 2203,
        "p-week": 36985,
        "p-month": 45994
    },
    {
        "id": "5874800942857b72b1589bce",
        "name": "王者荣耀赛事２",
        "comp": "深圳市腾讯计算机系统有限公司",
        "type": "娱乐",
        "logo": "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/f16a926276714663b43deb772e87ef6f.jpg",
        "pic":[
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/ca7eb72a7e104fceba560a4bcc16e7f8.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/352516af211143808422aa4acf208cc6.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/d5240cbd61f74a64a9e264691c3e9fff.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/906fa3e7191e415f99898c9d1202ef9a.jpg"
        ],
        "desc":"王者荣耀赛事，是服务赛事用户的优质内容平台，提供赛事直播、点播、官方资讯和战队信息等内容，是玩家观赛和获取资讯的首选。",
        "star": 4.2,
        "p-day": 2203,
        "p-week": 36985,
        "p-month": 45994
    },
    {
        "id": "5874800942857b72b1589bcd",
        "name": "王者荣耀赛事3",
        "comp": "深圳市腾讯计算机系统有限公司",
        "type": "游戏",
        "logo": "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/f16a926276714663b43deb772e87ef6f.jpg",
        "pic":[
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/ca7eb72a7e104fceba560a4bcc16e7f8.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/352516af211143808422aa4acf208cc6.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/d5240cbd61f74a64a9e264691c3e9fff.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/906fa3e7191e415f99898c9d1202ef9a.jpg"
        ],
        "desc":"王者荣耀赛事，是服务赛事用户的优质内容平台，提供赛事直播、点播、官方资讯和战队信息等内容，是玩家观赛和获取资讯的首选。",
        "star": 4.2,
        "p-day": 2203,
        "p-week": 36985,
        "p-month": 45994
    },
    {
        "id": "5874800942857b72b1589bcb",
        "name": "王者荣耀赛事4",
        "comp": "深圳市腾讯计算机系统有限公司",
        "type": "生活",
        "logo": "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/f16a926276714663b43deb772e87ef6f.jpg",
        "pic":[
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/ca7eb72a7e104fceba560a4bcc16e7f8.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/352516af211143808422aa4acf208cc6.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/d5240cbd61f74a64a9e264691c3e9fff.jpg",
            "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/906fa3e7191e415f99898c9d1202ef9a.jpg"
        ],
        "desc":"王者荣耀赛事，是服务赛事用户的优质内容平台，提供赛事直播、点播、官方资讯和战队信息等内容，是玩家观赛和获取资讯的首选。",
        "star": 4.2,
        "p-day": 2203,
        "p-week": 36985,
        "p-month": 45994
    }
];

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : testJson,
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
          <MuiThemeProvider>
              <div className="App">
                <h1>小程序列表</h1>
                <WxAppClassTab wxAppItems={this.state.data}/>
              </div>
          </MuiThemeProvider>

        );
    }
}

export default App;
