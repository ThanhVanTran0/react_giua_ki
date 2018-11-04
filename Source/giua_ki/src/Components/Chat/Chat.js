import React from 'react';
import NavBar from '../NavBar';
import './Chat.css';
import avatar from '../../Images/img_avatar.png';

export default class Chat extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div class="row">
                    <div className="column-left" style={{ backgroundColor: '#c5ddeb' }}>
                        <div className="people-list">
                            <div className="people-info">
                                <img src={avatar} alt="Avatar" className="avatar" />
                                <div className="about">
                                    <div className="name">Tran Van Thanh</div>
                                    <div className="status">
                                        <p className="circle-online" />
                                        <p className="state">online</p>
                                    </div>
                                </div>
                            </div>
                            <div className="people-info">
                                <img src={avatar} alt="Avatar" className="avatar" />
                                <div className="about">
                                    <div className="name">Tran Van Thanh</div>
                                    <div className="status">
                                        <p className="circle-online" />
                                        <p className="state">online</p>
                                    </div>
                                </div>
                            </div>
                            <div className="people-info">
                                <img src={avatar} alt="Avatar" className="avatar" />
                                <div className="about">
                                    <div className="name">Tran Van Thanh</div>
                                    <div className="status">
                                        <p className="circle-online" />
                                        <p className="state">online</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End colum left: all friend */}
                    <div className="column-right">
                        <div className="chat-header clearfix">
                            <img src={avatar} alt="avatar" />
                            <div className="chat-width">
                                Chat with Vincent Porter
                        </div>
                            {/* <i className="fa fa-star"></i> Nut star */}
                        </div>
                        {/* End header */}
                        <div className="chat-history">
                            <ul>
                                <li className="clearfix">
                                    <div className="message-data align-right">
                                        <span className="message-data-time">
                                            10:10 AM, Today
                                    </span>
                                        <span className="message-data-name">Olia</span>
                                    </div>
                                    <div className="message other-message float-right">
                                        Hi Vincent, how are you? How is the project coming along?
                                    </div>
                                </li>

                                <li>
                                    <div className="message-data">
                                        <span className="message-data-name">
                                            <i className="fa fa-circle online" /> Vincent
                                        </span>
                                        <span className="message-data-time">10:12 AM, Today</span>
                                    </div>
                                    <div className="message my-message">
                                        Are we meeting today? Project has been already finished and I have results to show you.
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <div className="message-data align-right">
                                        <span className="message-data-time">
                                            10:10 AM, Today
                                        </span>
                                        <span className="message-data-name">Olia</span>

                                    </div>
                                    <div className="message other-message float-right">
                                        Hi Vincent, how are you? How is the project coming along?
                                    </div>
                                </li>

                                <li>
                                    <div className="message-data">
                                        <span className="message-data-name">
                                            <i className="fa fa-circle online" /> Vincent
                                        </span>
                                        <span className="message-data-time">10:12 AM, Today</span>
                                    </div>
                                    <div className="message my-message">
                                        Are we meeting today? Project has been already finished and I have results to show you.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* End history chat */}

                        <div class="chat-message clearfix">
                            <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></textarea>
                            <button>Send</button>
                        </div>
                        {/* End form send message */}
                    </div>
                </div>
            </div>
        );
    }
}
