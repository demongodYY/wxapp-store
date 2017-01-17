/**
 * Created by loketa on 1/16/17.
 */
import React,{ Component }from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ActionGrade from 'material-ui/svg-icons/action/grade'
import WxAppItem from './WxAppItem'

class WxAppList extends Component{
    render() {
        return (
            <appListsheet>
                <List>
                    <WxAppItem
                        primaryText="哈哈哈"
                        iconSrc="http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/f16a926276714663b43deb772e87ef6f.jpg"
                    />
                    <WxAppItem
                        primaryText="哼哼哼"
                        iconSrc="http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/f16a926276714663b43deb772e87ef6f.jpg"
                    />
                    <WxAppItem
                        primaryText="呵呵呵"
                        iconSrc="http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/f16a926276714663b43deb772e87ef6f.jpg"
                    />
                    <WxAppItem
                        primaryText="哦哦哦"
                        iconSrc="http://img1.welineup.net:8090/vibeacon/img1/bokajunRank/2017/0110/f16a926276714663b43deb772e87ef6f.jpg"
                    />
                </List>
            </appListsheet>
        );
    }
}

export default  WxAppList;