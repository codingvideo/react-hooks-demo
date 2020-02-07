import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTime } from '../actions'

function useTime(){

  const time = useSelector((state) => state.time);
  const dispatch = useDispatch();

  useEffect(() => {

    const iid = setInterval(() => {
      dispatch(updateTime());
    }, 1000)

    return () => {
      clearInterval(iid);
    }
  }, []);

  return time;
}

export default useTime;