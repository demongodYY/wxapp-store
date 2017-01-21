/**
 * Created by loketa on 1/18/17.
 */

import React from 'react'
import {Modal} from 'antd';

const styles={
    img :{
        width: '90%',
        clear: 'both',
        display: 'block',
        margin: 'auto',
    }
};

class WxAppThumbnail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible : false,
        };
    }
    handleOpen = () => {
        this.setState({visible: true});
    };
    handleClose = () => {
        this.setState({visible: false});
    };
    render() {
        return(
            <div >
                <img src={this.props.imgUrl} style={{width:"100%"}} alt={"应用截图"} onClick={this.handleOpen}/>
                <Modal title="应用截图" visible={this.state.visible} onOk={this.handleClose} onCancel={this.handleClose} style={{top:2}}>
                    <img src={this.props.imgUrl} style={styles.img} alt={"应用截图"}/>
                </Modal>
            </div>
        )
    }
}

export default WxAppThumbnail;