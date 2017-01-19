/**
 * Created by loketa on 1/19/17.
 */
import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css'

class WxAppRating extends React.Component{
    render(){
        return (
            <span>
                评分：<Rater interactive={false} rating={this.props.rating} />
            </span>
        )
    }
}

export default  WxAppRating;