/**
 * Created by loketa on 1/18/17.
 */

import React from 'react'
import GridTile from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const styles={

    img: {
        padding:'0 5px',
        width: '100px',
        height: '100px',
    },
};

class WxAppThumbnail extends React.Component{
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
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];
        return(
            <GridTile onTouchTap={this.handleOpen}>
                <img src={this.props.imgUrl} style={styles.img} alt={"应用截图"}/>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <img src={this.props.imgUrl} style={{width:"100%"}} alt={"应用截图"}/>
                </Dialog>
            </GridTile>
        )
    }
}

export default WxAppThumbnail;