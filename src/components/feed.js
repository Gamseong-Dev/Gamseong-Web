import React, { Component } from 'react';
import axios from 'axios';
import '../css/mypage.css';
import '../css/feed.css';
import Comments from './Comments'

class Feed extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const {feeds} = this.props
    const article = feeds.map((feed, index) => (
      <article key={index}>
        <div className="article_header">
          <img src={require('../images/winter.jpg')} className="author_img" alt="작성자 이미지" />
          <span className="author_name">{feed.feed.user.name}</span>
          <span className="author_location"><img src={require('../images/location.png')} className="location_ico" alt="위치 아이콘 이미지" />{feed.feed.address}</span>
          <span className="author_date">{feed.feed.creationTime}</span>
        </div>
        <div className="article_body">
          <div className="author_content">
            {feed.feed.contents}
          </div>
        </div>
        <Comments />
      </article>
    ))
    return (
      <div className="feeds">
        {article}
      </div>
    );
  }
}

export default Feed;
