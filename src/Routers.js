import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom' // withRouter
import App from './App'
import {Login} from './Login'
import { connect } from 'react-redux'
import PrivateRoute from './PrivateRoute'



class Routers extends Component {
  state = {
     login: this.props.login.authenticated
  }
  componentWillReceiveProps(newProps){
    this.setState({login: newProps.login.authenticated})
  }
  render(){
    const RedirectToLogin = (path) => this.state.login ? <Redirect to={`/${path}`}/> : <Redirect to="/login" />
    return(
      <Router>
        <Switch>
          <PrivateRoute path="/mypage" component={App} auth={this.state.login}/>
          <Route exact path="/" render={() => RedirectToLogin('mypage')} />
          <Route path="/login" render={() => (
            this.state.login
              ? <Redirect to="/mypage" />
              : <Login />
          )}/>
        </Switch>
      </Router>
    )
  }
}



const mapStateToProps = ({login}) => ({
  login
})


export default connect(mapStateToProps, null)(Routers)

/* <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="app" component={App} />
    <Route path="login" component={Login} />
    <Route path="sign" component={Sign} />
    <Route path="mypage" component={Mypage} />
    <Route path="Edit" component={Edit} />
  </Route>
</Router> */
