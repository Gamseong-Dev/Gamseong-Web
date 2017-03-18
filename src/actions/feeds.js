import * as FEED from './types';
import axios from 'axios';

const ROOT_URL = 'http://52.78.110.20:8080';
export const fetchFeeds = (userId) => (dispatch, getState) => {
  axios.get(`${ROOT_URL}/gamseong/feeds/users/${userId}`)
    .then((feeds) => {
      console.log(feeds)
      dispatch({
        type: FEED.COMPLETE_FEEDS_FETCH,
        feeds : feeds.data
      })
  });
}
