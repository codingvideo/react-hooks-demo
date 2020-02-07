export function setViewCount(val){
  return { type:'SET_VIEW_COUNT', viewCount: val };
}

export function addOneViewCount(){
  return { type:'ADD_ONE_VIEW_COUNT' };
}

export function updateTime(){
  return { type:'UPDATE_TIME' };
}