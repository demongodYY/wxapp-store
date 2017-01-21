/**
 * Created by loketa on 1/17/17.
 */
import React,{ Component } from 'react';
import { Row, Col } from 'antd';
import WxAppThumbnail from './WxAppThumbnail'

const styles = {
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        overflowY: 'hidden',
    },
    qrImg :{
        width: '125px',
        height: '140px',
        clear: 'both',
        display: 'block',
        margin: 'auto',
    },
};

class WxAppDetail extends Component {
    render(){
        return(
            <div>
                <coentent>
                    <h4>应用介绍</h4>
                    <hr/>
                    <p>{this.props.wxAppItem.slogan}</p>
                </coentent>
                <br/>
                <coentent>
                    <h4>应用截图</h4>
                    <hr/>
                    <Row gutter={16} style={styles.gridList}>
                        {this.props.wxAppItem.showImgsWebUrls.map((tile,index) => (
                            <Col className="gutter-row" span={6} key={index}>
                                <div className="gutter-box">
                                    <WxAppThumbnail imgUrl={tile}/>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </coentent>
                <br/>
                <coentent>
                    <h4>应用安装</h4>
                    <hr/>
                    <p style={{textAlign:"center",fontWeight:"bold",}}>{this.props.wxAppItem.name}</p>
                    <p style={{textAlign:"center",fontSize:"0.8em",}}>(微信扫描二维码或复制App名在发现->小程序里搜索安装)</p>
                    <img style={styles.qrImg} src={this.props.wxAppItem.setupQrWebUrl}　alt={"暂无二维码，请复制上方应用名在微信小程序中搜索安装"}/>
                </coentent>
                <coentent>
                    <h4>开发者</h4>
                    <hr/>
                    <p>{this.props.wxAppItem.developer}</p>
                </coentent>
            </div>
        )
    }

}

export default WxAppDetail;