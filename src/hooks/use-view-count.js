import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setViewCount, addOneViewCount } from '../actions'
import fetch from '../util/mock-fetch.js';

function getRealCount(cb){
  fetch('/current-view-count').then(res => res.json()).then((json)=>{
    cb(json["view-count"]);
  });
}

function useViewCount(startCount){

  const viewCount = useSelector((state) => state.viewCount);
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(setViewCount(startCount));

    getRealCount((viewCount) => {
      dispatch(setViewCount(viewCount));
    });

    const iid1 = setInterval(() => {
      dispatch(addOneViewCount());
    }, 3000);
    
    const iid2 = setInterval(() => {
      getRealCount((viewCount) => {
        dispatch(setViewCount(viewCount));
      });
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