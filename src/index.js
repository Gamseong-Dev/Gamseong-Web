import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Async from './middlewares/async';
import Routers from './Routers'
import {CheckUserStorage} from './actions/login'
import { AppContainer } from 'react-hot-loader'
import './index.css';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, Async)(createStore);
const store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);


store.dispatch(CheckUserStorage())


ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routers />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

if(module.hot) {
  module.hot.accept('./Routers', () => {
    const NextApp = require('./Routers').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
