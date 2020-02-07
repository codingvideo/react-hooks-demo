import React from 'react';
import './App.css';
import useViewCount from './hooks/use-view-count';
import useTime from './hooks/use-time';

function App(){

  const viewCount = useViewCount(0);
  const time = useTime();

  return (
    <div className="App">
      <p>View Count: <span>{ viewCount }</span></p>
      <p>Time: <span>{ time.toString() }</span></p>
    </div>
  );
}

export default App;
