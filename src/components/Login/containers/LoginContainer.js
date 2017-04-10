import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../actions/login'
import './LoginContainer.css';
import Section from '../components/Section'
import Footer from '../../Footer/Footer';
import { browserHistory } from 'react-router';

const LoginContainer = ({auth, getAccount}) => {

  loginStatusCheck()
  return(
  <div id="Login">
    <Section getAccount={getAccount}/>
    <Footer />
  </div>
)}


function mapStateToProps(state){
  return{
    auth: state.login
  }
}

function loginStatusCheck(){
  localStorage.getItem('userId').length < 5 ? true : browserHistory.push('mypage')
}

export default connect(mapStateToProps, actions)(LoginContainer)
