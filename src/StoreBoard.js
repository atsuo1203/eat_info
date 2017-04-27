import React, { Component } from 'react';
import logo from './logo.svg';
import moment from 'moment'

class StoreBoard extends Component {
    render() {
        const {name,start,end} = this.props;
        const format ='HH時mm分';
        const isClose = start < moment.now;
        return (
            <div className="StoreBoard" style={{width:"200px",margin:"10px",background: isClose ? 'red' : '#aaa'}}>
                <h2>{name}</h2>
                <p>開店まで {start.fromNow() }</p>
                <p>{start.format(format)} - {end.format(format)}</p>
            </div>
        );
    }
}

export default StoreBoard;

