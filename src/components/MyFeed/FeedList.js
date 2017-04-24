import React, { PureComponent } from 'react';
import './Feed.css';
import '../Comments/Comments.css';
import FeedArticle from './FeedArticle'


class FeedList extends PureComponent {
  state = {
    feeds : this.props.feeds
  };
  componentWillReceiveProps(newProps){
    if(newProps.feeds !== this.props.props){
      this.setState({ feeds : newProps.feeds})
    }
  }
  renderFeedArticle = (feed, i) => <FeedArticle key={i} feed={feed}/>
  render(){
    return (
      <div className="feeds">
        {this.props.feeds.map(this.renderFeedArticle)}
      </div>
    );
  }
}


export default FeedList;
