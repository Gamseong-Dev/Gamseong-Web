import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import '../css/mypage.css';


class Mypage extends Component {
  render(){
    const {feeds} = this.props
    return (
      <div id="MyPage">
        <Header />
        <Section feeds={feeds}/>
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
