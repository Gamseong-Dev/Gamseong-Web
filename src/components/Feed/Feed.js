import React, { Component } from 'react';
import './Feed.css';
import Comments from '../Comments/Comments';

class Feed extends Component {
  render(){
    const {feeds} = this.props;
    console.log(feeds);
    const article = feeds.map((feed, index) => (
      <article key={index}>
        <div className="article_header">
          {feed.feed.user.imageUrl !== null? <img src={feed.feed.user.imageUrl} className="author_img" alt="작성자 이미지" /> : <img src={require('../../images/person.png')} className="author_img" alt="작성자 이미지" />}
          <span className="author_name">{feed.feed.user.name}</span>
          <span className="author_location"><img src={require('../../images/location.png')} className="location_ico" alt="위치 아이콘 이미지" />{feed.feed.address}</span>
          <span className="author_date">{feed.feed.creationTime.split(' ')[0]}</span>
        </div>
        <div className="article_body">
          <div className="author_content_image">
            {feed.feed.imgUrl !== null? <img src={'http://52.78.110.20:8080' + feed.feed.imgUrl} alt="콘텐츠 이미지" /> : ''}
          </div>
          <div className="author_content">
            {feed.feed.contents}
          </div>
        </div>
        <Comments />
      </article>
    ));

    return (
      <div className="feeds">
        {article}
      </div>
    );
  }
}

export default Feed;
