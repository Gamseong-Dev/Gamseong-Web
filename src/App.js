import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from './actions/login'
import { Route, Switch } from 'react-router-dom'
import Layout from './Layout';
import {Mypage, Edit} from './components'
import './App.css'


// const Mypage = () => <div>myyyyyy</div>
// const Edit = () => <div>수정할 꼬야~~~</div>

class App extends Component {
  render() {
    let nav = [
      {path:'mypage', component: Mypage, name: '마이페이지'},
      {path:'edit', component: Edit, name: '마이페이지'},
    ]
    const { match } = this.props;
    return (
      <Layout {...this.props}>
        <Switch>
          {nav.map((n, i) => <Route key={i} path={`${match.url}/${n.path}`} component={n.component}/>)}
          <Route exact path={match.url} component={Mypage}/>
        </Switch>
      </Layout>
    );
  }
}

export default connect(null, actions)(App);
