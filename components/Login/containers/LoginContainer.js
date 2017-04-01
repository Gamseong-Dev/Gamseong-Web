import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../actions/login'
import './LoginContainer.css';
import Section from '../components/Section'
import Footer from '../../Footer/Footer';

const LoginContainer = ({auth, getAccount}) => {
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

export default connect(mapStateToProps, actions)(LoginContainer)
