import * as types from '../actions/types';


export default function (state = [], action) {
  switch (action.type) {
    case types.COMPLETE_FEEDS_FETCH:
      return [ ...action.feeds ];
    default:
      break;
  }
  return state;
}
