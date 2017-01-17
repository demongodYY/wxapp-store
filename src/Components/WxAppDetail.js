/**
 * Created by loketa on 1/17/17.
 */
import React,{ Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List';
import {GridList, GridTile} from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    img: {
        padding:'0 5px',
        width: '100px',
        height: '100px',
    },
    qrImg :{
        width: '150px',
        height: '150px',
        clear: 'both',
        display: 'block',
        margin: 'auto',
    }
};

const tilesData = [
    {
        img: "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/ca7eb72a7e104fceba560a4bcc16e7f8.jpg",
    },
    {
        img: "http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/352516af211143808422aa4acf208cc6.jpg",

    },
    {
        img: 'http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/d5240cbd61f74a64a9e264691c3e9fff.jpg',

    },
    {
        img: 'http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/906fa3e7191e415f99898c9d1202ef9a.jpg',

    },
];

class WxAppDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            open : false,
        };
    }
    handleOpen = () => {
        this.setState({open: true});
    };
    handleClose = () => {
        this.setState({open: false});
    };
    render(){
        const actions=[
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];
        return(
            <Card>
                <CardHeader
                    title="王者荣耀"
                    subtitle="深圳市腾讯计算机系统有限公司"
                    avatar="http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/f16a926276714663b43deb772e87ef6f.jpg"
                />
                <CardTitle
                    subtitle="应用介绍(点击查看详情)"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    王者荣耀赛事，是服务赛事用户的优质内容平台，提供赛事直播、点播、官方资讯和战队信息等内容，是玩家观赛和获取资讯的首选。
                </CardText>
                <CardTitle subtitle="应用截图"/>
                <div style={styles.root}>
                    <GridList style={styles.gridList}  cellHeight={100}>
                        {tilesData.map((tile) => (
                            <GridTile key={tile.img} onTouchTap={this.handleOpen}>
                                <img src={tile.img} style={styles.img}/>
                                <Dialog
                                    actions={actions}
                                    modal={false}
                                    open={this.state.open}
                                    onRequestClose={this.handleClose}
                                    autoScrollBodyContent={true}
                                >
                                    <img src={tile.img} style={{width:"100%"}}/>
                                </Dialog>
                            </GridTile>
                        ))}
                    </GridList>
                </div>
                <CardTitle subtitle="应用安装"/>
                <div>
                    <img style={styles.qrImg} src="http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0107/35a5bfa2570342539097e2ccd5e62c9f.jpg"/>
                </div>
            </Card>
        )
    }

}

export default WxAppDetail;