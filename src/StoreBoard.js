import React, { Component } from 'react';
import moment from 'moment'

moment.locale("ja",
    {
        relativeTime: {
            future: 'あと%s',
            past: '%s前',
            s: '秒',
            m: '1分',
            mm: '%d分',
            h: '1時間',
            hh: '%d時間',
            d: 'un日',
            dd: '%d日',
        }
    });

class StoreBoard extends Component {

    componentDidMount(){
        const {start,end} = this.props;
        const isClose = moment.now < start || end < moment.now;
        this.setState({isClose});
    }

    renderNextChange() {
        const {start,end} = this.props;
        const {isClose} = this.state;
        if (isClose){
            return (
                <p>開店まで {start.fromNow}</p>
            );
        }
            return (
                <p>閉店まで {end.fromNow}</p>
            );
    }

    render() {
        const {name,start,end} = this.props;
        const format ='HH時mm分';
        const isClose = moment.now < start || end < moment.now;
        return (
            <div className="StoreBoard" style={{width:"200px",margin:"10px",background: isClose ? 'red' : '#aaa'}}>
                <h2>{name}</h2>
                {this.renderNextChange()}
                <p>{start.format(format)} - {end.format(format)}</p>
            </div>
        );
    }
}

export default StoreBoard;

