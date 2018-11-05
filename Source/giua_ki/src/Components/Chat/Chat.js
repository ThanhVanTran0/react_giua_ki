import React, { Fragment } from 'react';
import NavBar from '../NavBar';
import './Chat.css';
import avatar from '../../Images/img_avatar.png';
import Item from './Item'
import moment from 'moment'

import { compose } from "redux"
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase'

function parseJsonToList(jsonString) {
    let list = [];
    if (jsonString === null || typeof jsonString === 'undefined')
        return list;

    list = Object.keys(jsonString).map(item => jsonString[item]);
    return list;
}

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uidFriend: null,
            nameFriend: '',
            message: '',
            listMessage: [],
            photoURL: '',
        }
        this.btnSendClick = this.btnSendClick.bind(this);
    }

    btnSendClick() {
        const { message } = this.state;
        if (message !== '') {
            let _message = {
                from: this.props.me,
                time: this.props.firebase.database.ServerValue.TIMESTAMP,
                content: this.state.message,
            }
            let roomid = this.props.me > this.state.uidFriend ? `${this.state.uidFriend}_${this.props.me}` : `${this.props.me}_${this.state.uidFriend}`

            this.props.firebase.push(`message/${roomid}`, _message)
            this.setState({ message: '' })
        }
    }

    itemChatWithClick = (item) => {
        this.setState(
            {
                uidFriend: item.uid, nameFriend: item.displayName,
                photoURL: item.photoURL,
            }, () => {
                //Lay du lieu chat ve
                let roomid = this.props.me > this.state.uidFriend ? `${this.state.uidFriend}_${this.props.me}` : `${this.props.me}_${this.state.uidFriend}`
                this.props.firebase.database().ref(`message/${roomid}`).on('value',(snapshoot) => {
                    if(snapshoot.val()) {
                        let list = Object.keys(snapshoot.val()).map(item => snapshoot.val()[item]);
                        this.setState({ listMessage: list })
                    }
                })
            })


    }

    scrollToBottom = () => {
        if(typeof this.chatContent === 'undefined') return;
        let scrollHeight = this.chatContent.scrollHeight;
        const height = this.chatContent.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.chatContent.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
      }

    componentDidUpdate(){
        this.scrollToBottom()
    }

    render() {
        let list = parseJsonToList(this.props.listOnline);
        list = list.sort((a,b) => (a.time < b.time || a.online === false && b.online === true) ? 1 : a.time === b.time ? 0 : -1);
        return (
            <div>
                <NavBar />
                <div class="row">
                    <div className="column-left" style={{ backgroundColor: '#c5ddeb' }}>
                        <div className="people-list">
                            {list.map(item => {
                                if (item.uid != this.props.me) {
                                    return (
                                        <Item item={item} onClick={() => this.itemChatWithClick(item)} />
                                    );
                                }
                                return null;

                            })}
                        </div>
                    </div>
                    {/* End colum left: all friend */}
                    <div className="column-right">
                        {!this.state.uidFriend ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 60px)', fontSize: 45, fontWeight: 500 }}>
                            Message App FireBase
                            </div> :

                            <Fragment>
                                <div className="chat-header clearfix">
                                    <img src={this.state.photoURL} alt="avatar" />
                                    <div className="chat-width">
                                        Chat with {this.state.nameFriend}
                                    </div>
                                    {/* <i className="fa fa-star"></i> Nut star */}
                                </div>
                                {/* End header */}
                                <div className="chat-history" ref={e => {this.chatContent = e}}>
                                    <ul>
                                        {this.state.listMessage.map(item => {
                                            if (item.from === this.props.me) {
                                                return (
                                                    <li className="clearfix">
                                                        <div className="message-data align-right">
                                                            <span className="message-data-time">
                                                                {moment(item.time).format('DD/MM/YY HH:mm')}
                                                        </span>
                                                            <span className="message-data-name"> {this.props.myName}</span>
                                                        </div>
                                                        <div className="message other-message float-right">
                                                            {item.content}
                                                    </div>
                                                    </li>
                                                );
                                            } else {
                                                return (
                                                    <li>
                                                        <div className="message-data">
                                                            <span className="message-data-name">
                                                                <i className="fa fa-circle online" /> {this.state.nameFriend}
                                                </span>
                                                            <span className="message-data-time">{moment(item.time).format('DD/MM/YY HH:mm')}</span>
                                                        </div>
                                                        <div className="message my-message">
                                                        {item.content}
                                            </div>
                                                    </li>);
                                            }
                                        })}

                                    </ul>
                                </div>
                                {/* End history chat */}

                                <div class="chat-message clearfix">
                                    <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3" onChange={(e) => this.setState({ message: e.target.value })} value={this.state.message}></textarea>
                                    <button onClick={this.btnSendClick}>Send</button>
                                </div>
                                {/* End form send message */}
                            </Fragment>
                        }

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listOnline: state.firebase.data.presence,
        me: state.firebase.auth.uid,
        historyMessage: state.firebase.data.message,
        myName: state.firebase.auth.displayName,
    }
}
export default compose(
    firebaseConnect(props => [{ path: 'presence' }, { path: 'message' }]), //Lấy presence trên database về data.presence 
    connect(mapStateToProps)
)(Chat);