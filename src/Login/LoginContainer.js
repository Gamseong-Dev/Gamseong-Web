import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/login'
import LoginSection from './LoginSection'
import Footer from '../Layout/Footer';
import './LoginContainer.css'


const LoginContainer = ({
  auth,
  getAccount
}) => (
    <div id="Login">
      <LoginSection getAccount={getAccount}/>
      <Footer />
    </div>
  )

function mapStateToProps(state){
  return{
    auth: state.login
  }
}

export default connect(mapStateToProps, actions)(LoginContainer)
