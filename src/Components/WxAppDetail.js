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
                    <h4>应用二维码</h4>
                    <hr/>
                    <img style={styles.qrImg} src={this.props.wxAppItem.setupQrWebUrl}　alt={"暂无二维码，请复制应用名在小程序中搜索安装"}/>
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