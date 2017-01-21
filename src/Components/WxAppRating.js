/**
 * Created by loketa on 1/19/17.
 */
import React from 'react';
import {Rate } from 'antd';

const styles ={
    Rate:{
        fontSize:"12px",
        float:"right",
        display:"flex"
    },

};

class WxAppRating extends React.Component{
    render(){
        return (
            <span>
                <Rate disabled allowHalf defaultValue={this.props.rating} style={styles.Rate}/>
            </span>
        )
    }
}

export default  WxAppRating;