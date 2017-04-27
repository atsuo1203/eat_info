import React, { Component } from 'react';
import './App.css';
import moment from 'moment'
import StoreBoard from './StoreBoard';

const data = {
    stores: [
        { name: "松屋" ,start: "0:00" ,end: "24:00"},
        { name: "武蔵家" ,start: "9:00" ,end: "21:00"}
    ]
};

class App extends Component {
  render() {
      const storeBoard = [];
      data.stores.forEach((e) => {
          const hm = e.end.split(':');
          const h = parseInt(hm[0]);
          let end = null;
          if (h <24){
              end = moment(e.end, 'HH:mm')
          } else {
              end = moment((end-24) + ':' + hm[1], 'HH:mm');
              end.add('1','d');
          }
          storeBoard.push(
              <StoreBoard
                  key={e.name}
                  name={e.name}
                  start={moment(e.start, 'HH:mm')}
                  end={end}
              />
          )
      });

    return (
      <div className="App">
          <div className="App-header">
            <h2>eat_info</h2>
              <p>北千住の学生のための営業時間</p>
          </div>

          <div style={{display:'flex'}}>
              {storeBoard}
          </div>
      </div>
    );
  }
}

export default App;
