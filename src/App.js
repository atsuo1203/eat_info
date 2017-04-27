import React, { Component } from 'react';
import './App.css';
import moment from 'moment'
import StoreBoard from './StoreBoard';

const data = {
    stores: [
        { name: "松屋" ,start: "9:00" ,end: "21:00"},
        { name: "武蔵家" ,start: "9:00" ,end: "21:00"}
    ]
};

class App extends Component {
  render() {
      const storeBoard = [];
      data.stores.forEach((e) => {
          storeBoard.push(
              <StoreBoard
                  key={e.name}
                  name={e.name}
                  start={moment(e.start, 'HH:mm')}
                  end={moment(e.end, 'HH:mm')}
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
