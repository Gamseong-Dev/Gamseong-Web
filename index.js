import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Async from './middlewares/async';
import {App, Mypage, Login, Edit} from './components';
import './index.css';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, Async)(createStore);
const store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="app" component={App} />
        <Route path="login" component={Login} />
        <Route path="mypage" component={Mypage} />
        <Route path="Edit" component={Edit} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
