/**
 * Created by loketa on 1/17/17.
 */
import React,{ Component } from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import GridList from 'material-ui/GridList';
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
        width: '110px',
        height: '125px',
        clear: 'both',
        display: 'block',
        margin: 'autto',
    }
};

class WxAppDetail extends Component {
    render(){
        return(
            <Card>
                <CardHeader
                    title={this.props.wxAppItem.name}
                    subtitle={this.props.wxAppItem.developer}
                    avatar={this.props.wxAppItem.logoWebUrl}
                />
                <CardTitle
                    subtitle="应用介绍(点击查看详情)"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {this.props.wxAppItem.slogan}
                </CardText>
                <CardTitle subtitle="应用截图"/>
                <div style={styles.root}>
                    <GridList style={styles.gridList}  cellHeight={100}>
                        {this.props.wxAppItem.showImgsWebUrls.map((tile,index) => (
                            <WxAppThumbnail key={index} imgUrl={tile}/>
                        ))}
                    </GridList>
                </div>
                <CardTitle subtitle="应用安装"/>
                <div>
                    <img style={styles.qrImg} src={this.props.wxAppItem.setupQrWebUrl}　alt={"暂无二维码，请复制应用名在小程序中搜索安装"}/>
                </div>
            </Card>
        )
    }

}

export default WxAppDetail;