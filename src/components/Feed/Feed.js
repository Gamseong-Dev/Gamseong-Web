import React, { Component } from 'react';
import './Feed.css';
import '../Comments/Comments.css';
// import Comments from '../Comments/Comments';

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
          <div className="author_status">
            <span><img src={require('../../images/like_icon.png')} alt="좋아요 아이콘 이미지" /> {feed.userLikeStatus}개</span> <span><img src={require('../../images/comment_icon.png')} alt="댓글 아이콘 이미지" /> {feed.reply.length}개</span>
          </div>
        </div>

        <div className="article_comment">
          <div className="comm">
            {feed.reply.length !== 0 && feed.reply[0].user.imageUrl !== null? <img src={feed.reply[0].user.imageUrl} className="comm_img" alt="작성자 이미지" /> : null}
            {feed.reply.length !== 0 && feed.reply[0].user.imageUrl === null? <img src={require('../../images/person.png')} className="comm_img" alt="작성자 이미지" /> : null}
            {feed.reply.length !== 0 ? <span className="comm_name">{feed.reply.length === 0 ? '' : feed.reply[0].user.name}</span> : null}
            {feed.reply.length !== 0 ? <p className="comm_content">{feed.reply.length === 0 ? '' : feed.reply[0].contents}</p> : null }
          </div>
        </div>

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
