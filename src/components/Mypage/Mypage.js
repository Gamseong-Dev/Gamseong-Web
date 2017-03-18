import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/feeds'
import Header from '../Header/Header';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';
import './Mypage.css';


class Mypage extends Component {
  componentDidMount(){
    const userId = localStorage.getItem('userId')
    this.props.fetchFeeds(userId)
  }
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
    feeds: state.feeds,
    user: state.login,
  }
}

export default connect(mapStateToProps, actions)(Mypage);

// export default Mypage
