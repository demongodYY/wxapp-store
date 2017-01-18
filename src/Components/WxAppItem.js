/**
 * Created by loketa on 1/16/17.
 */
import React,{ Component }from 'react';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import WxAppDetail from './WxAppDetail';

class WxAppList extends Component{
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
        const actions=[
            <FlatButton
                label="Confirm"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />

        ];
        return (
            <ListItem
                primaryText={this.props.wxAppItem.name}
                leftAvatar={<Avatar src={this.props.wxAppItem.logo}/>}
                rightIcon={<ActionGrade />}
                onTouchTap={this.handleOpen}
            >
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <WxAppDetail wxAppItem={this.props.wxAppItem}/>
                </Dialog>
            </ListItem>
        );
    }
}

export default  WxAppList;