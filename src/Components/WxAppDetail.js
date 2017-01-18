/**
 * Created by loketa on 1/17/17.
 */
import React,{ Component } from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import {GridList, GridTile} from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import WxAppThumbnail from './WxAppThumbnail'

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
        overflowY: 'hidden',
    },
    qrImg :{
        width: '140px',
        height: '150px',
        clear: 'both',
        display: 'block',
        margin: 'auto',
    }
};

class WxAppDetail extends Component {
    render(){
        return(
            <Card>
                <CardHeader
                    title={this.props.wxAppItem.name}
                    subtitle={this.props.wxAppItem.comp}
                    avatar={this.props.wxAppItem.logo}
                />
                <CardTitle
                    subtitle="应用介绍(点击查看详情)"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {this.props.wxAppItem.desc}
                </CardText>
                <CardTitle subtitle="应用截图"/>
                <div style={styles.root}>
                    <GridList style={styles.gridList}  cellHeight={100}>
                        {this.props.wxAppItem.pic.map((tile,index) => (
                            <WxAppThumbnail key={index} imgUrl={tile}/>
                        ))}
                    </GridList>
                </div>
                <CardTitle subtitle="应用安装"/>
                <div>
                    <img style={styles.qrImg} src="http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0107/35a5bfa2570342539097e2ccd5e62c9f.jpg"　alt={"暂无二维码，请复制应用名在小程序中搜索安装"}/>
                </div>
            </Card>
        )
    }

}

export default WxAppDetail;