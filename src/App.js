import React from 'react';
import './App.css';
import fetch from './mock-fetch.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = { viewCount: 0, time: new Date() }
  }

  componentDidMount(){
    this.updateRealCount();
    
    this.iid1 = setInterval(() => {
      this.setState((state) => {
        return { viewCount: state.viewCount + 1 };
      });
    }, 3000);
    
    this.iid2 = setInterval(() => {
      this.updateRealCount();
    }, 10000);
    
    this.iid3 = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000)
  }

  updateRealCount(){
    fetch('/current-view-count').then(res => res.json()).then((json)=>{
      this.setState({ viewCount: json["view-count"] });
    });
  }

  componentWillUnmount(){
    clearInterval(this.iid1);
    clearInterval(this.iid2);
    clearInterval(this.iid3);
  }

  render(){
    return (
      <div className="App">
        <p>View Count: <span>{ this.state.viewCount }</span></p>
        <p>Time: <span>{ this.state.time.toString() }</span></p>
      </div>
    );
  }
}

export default App;
