import React, { useState, useEffect } from 'react';
import './App.css';
import fetch from './util/mock-fetch.js'

function updateRealCount(setViewCount){
  fetch('/current-view-count').then(res => res.json()).then((json)=>{
    setViewCount(json["view-count"]);
  });
}

function App(){

  const [ viewCount, setViewCount ] = useState(0);
  const [ time, setTime ] = useState(new Date());

  useEffect(() => {
    
    updateRealCount(setViewCount);

    const iid1 = setInterval(() => {
      setViewCount((viewCount) => {
        return viewCount + 1;
      });
    }, 3000);
    
    const iid2 = setInterval(() => {
      updateRealCount(setViewCount);
    }, 10000);

    const iid3 = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => {
      clearInterval(iid1);
      clearInterval(iid2);
      clearInterval(iid3);
    }
  }, []);

  useEffect(() => {
    document.title = viewCount;
  }, [viewCount]);

  return (
    <div className="App">
      <p>View Count: <span>{ viewCount }</span></p>
      <p>Time: <span>{ time.toString() }</span></p>
    </div>
  );
}

export default App;
