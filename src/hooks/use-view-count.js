import React, { useState, useEffect } from 'react';
import fetch from '../util/mock-fetch.js';

function updateRealCount(setViewCount){
  fetch('/current-view-count').then(res => res.json()).then((json)=>{
    setViewCount(json["view-count"]);
  });
}

function useViewCount(startCount){

  const [ viewCount, setViewCount ] = useState(startCount);

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

    return () => {
      clearInterval(iid1);
      clearInterval(iid2);
    }
  }, []);

  useEffect(() => {
    document.title = viewCount;
  }, [viewCount]);

  return viewCount;
}

export default useViewCount;