import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/feeds'
import FeedList from './FeedList';
import './Mypage.css';


class FeedContainer extends PureComponent {
  componentDidMount(){
    this.props.fetchFeeds()
  }
  render(){
    const {feeds} = this.props;
    if(feeds.length < 0) {
      return (
        <div>
          <p> 피드 로딩 중</p>
        </div>
      )
    }
    return (
      <div id="MyPage">
        <section>
          <FeedList feeds={feeds}/>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({feeds}) => ({
  feeds
})

export default connect(mapStateToProps, actions)(FeedContainer);
