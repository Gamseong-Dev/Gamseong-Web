import * as FEED from './types';
import axios from 'axios';


// /feeds/users/{id(유저 아이디):String}?

export const fetchFeeds = () => (dispatch, getState) => {
  const ROOT_URL = 'http://52.78.110.20:8080/gamseong/feeds/locations/S031031/users/069357';
  axios.get(ROOT_URL).then((feeds) => {
    dispatch({
      type: FEED.COMPLETE_FEEDS_FETCH,
      feeds : feeds.data
    })
  });
}
