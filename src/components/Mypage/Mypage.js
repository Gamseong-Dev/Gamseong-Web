import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/feeds'
import Section from '../Feed/Section';
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
        <Section feeds={feeds} />
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
