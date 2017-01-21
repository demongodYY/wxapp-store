/**
 * Created by loketa on 1/16/17.
 */
import React,{ Component }from 'react';
import { Row, Col } from 'antd';
import WxAppRating from './WxAppRating';
const styles ={
  avtar:{
      width:"34px",
      height:"34px",
      borderRadius:"25px",
      float:"left",
      clear: 'both',
      display: 'block',
      margin: '2px',
  },
  title:{
    float:"left",
    fontSize:"16px",
    fontWeight:"bold",
  }


};

class WxAppItem extends Component{

    render() {
        return (
            <Row gutter={4}>
                <Col className="gutter-row" span={3}>
                    <div className="gutter-box">
                        <img src={this.props.wxAppItem.logoWebUrl} style={styles.avtar} alt="图标"/>
                    </div>
                </Col>
                <Col className="gutter-row" span={14}>
                    <div className="gutter-box">
                        <span style={styles.title}>{this.props.wxAppItem.name}</span>
                    </div>
                </Col>
                <Col className="gutter-row" span={7}>
                    <div className="gutter-box">
                        <WxAppRating style={{float:"right"}} rating={this.props.wxAppItem.starNum}/>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default  WxAppItem;