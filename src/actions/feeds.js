import * as types from './types';
import axios from 'axios';


export const startFeedsFetch = () => {
  return {
    type: types.START_FEEDS_FETCH
  };
};

export const completeFeedsFetch = (feeds) => {
  return {
    type: types.COMPLETE_FEEDS_FETCH,
    feeds : feeds.data
  };
};



export const fetchFeeds = () => (dispatch, getState) => {
  dispatch(startFeedsFetch());
  const ROOT_URL = 'http://52.78.110.20:8080/gamseong/feeds/locations/S031031/users/069357';
  axios.get(ROOT_URL).then((feeds) => {
    dispatch(completeFeedsFetch(feeds))
  });
}
