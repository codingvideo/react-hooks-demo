import React, { useState, useEffect } from 'react';

function useTime(){

  const [ time, setTime ] = useState(new Date());

  useEffect(() => {

    const iid = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => {
      clearInterval(iid);
    }
  }, []);

  return time;
}

export default useTime;