import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './css/index.css';
import App from './App';
import Login from './login';
import MyPage from './mypage';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="app" component={App} />
      <Route path="login" component={Login} />
      <Route path="mypage" component={MyPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
