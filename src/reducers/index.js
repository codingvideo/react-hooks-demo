export function time(state = new Date(), action) {
  switch (action.type) {
    case 'UPDATE_TIME':
      return new Date();
    default:
      return state;
  }
}

export function viewCount(state = 0, action) {
  switch (action.type) {
    case 'ADD_ONE_VIEW_COUNT':
      return state + 1;
    case 'SET_VIEW_COUNT':
      return action.viewCount;
    default:
      return state;
  }
}