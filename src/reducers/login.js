import * as types from '../actions/types';


export default function (state = {}, action) {
  switch (action.type) {
    case types.USER_LOG_IN:
      return { ...state, authenticated: true, user: action.user}
    case types.USER_LOG_IN_ERR:
      return { ...state, authenticated: false}
    default:
      return state
  }
}
