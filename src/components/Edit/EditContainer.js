import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import EditSection from './EditSection'
import './Edit.css';




class EditContainer extends Component {
  render(){
    return (
      <div id="Edit">
        <Header />
        <EditSection />
        <Footer />
      </div>
    );
  }
}


export default EditContainer;
