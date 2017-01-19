import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../Header/Header';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
import './Mypage.css';


class Mypage extends Component {
  render(){
    const {feeds} = this.props;
    return (
      <div id="MyPage">
        <Header />
        <Section feeds={feeds} />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    feeds: state.feeds
  }
}

export default connect(mapStateToProps)(Mypage);

// export default Mypage
