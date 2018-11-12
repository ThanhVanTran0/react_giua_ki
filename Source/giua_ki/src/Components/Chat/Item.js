import React, { Component } from 'react'
import moment from 'moment'


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'offline',
            time: null
        }
    }

    calcTime = timestamp => {
        return setInterval(() => {
            this.setState({ message: this.calc(timestamp) })
        }, 60000);
    }

    calc = timestamp => {
        let sub = moment() - moment(timestamp);
        let minus = Math.round(sub / 60000);
        let hour = Math.round(minus / 60);
        if (hour < 1) {
            if (minus < 1)
                return 'offline'
            return `left ${minus}m ago`;
        }
        else
            return `left ${hour}h ago`;
    }

    componentDidMount() {
        if (this.props.item.online === false) {
            this.setState({ message: this.calc(this.props.item.time) }, () => this.calcTime(this.props.item.time))
        }

    }

    componentWillReceiveProps(newProps) {
        if (newProps.item.online === false && newProps.item.time !== this.state.time) {
            clearInterval(this.calcTime);
            this.setState({ message: this.calc(newProps.item.time), time: newProps.item.time }, () => this.calcTime(newProps.item.time))
        }
    }

    componentWillUnmount() {
        clearInterval(this.calcTime);
    }

    render() {
        let item = this.props.item;
        return (
            <div className="people-info" onClick={this.props.onClick}>
                <img src={item.photoURL} alt="Avatar" className="avatar" />
                <div className="about">
                    <div className="name">{item.displayName}</div>
                    <div className="status">
                        <p className={item.online ? 'circle-online' : 'circle-offline'} />
                        <p className="state">{item.online ? "online" : this.state.message}</p>
                    </div>
                    <i className={item.star ? "fa fa-star itemclass true":"fa fa-star itemclass"}></i>
                </div>
            </div>
        );
    }
}

export default (Item)