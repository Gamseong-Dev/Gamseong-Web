import React, { Component } from 'react';
import './Feed.css';
import '../Comments/Comments.css';
// import Comments from '../Comments/Comments';

class Feed extends Component {
  constructor(){
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup = (e) => {
    this.setState({
      showPopup: !this.state.showPopup
    });

    const clickedImg = e.target.getAttribute('src')
    localStorage.setItem('thisImg', clickedImg)
  }

  render(){
    // let userId = localStorage.getItem('userId'),
    // userAcct = localStorage.getItem('userAcct');

    console.log("localStorage",localStorage.getItem('userId'));
    const {feeds} = this.props;
    console.log("feeds",feeds);
    const article = feeds.map((feed, index) => (
      <div id="article" key={index}>
        <article key={index}>
          <div className="article_header">
            {feed.feed.user.imageUrl !== null? <img src={feed.feed.user.imageUrl} className="author_img" alt="작성자 이미지" /> : <img src={require('../../images/person.png')} className="author_img" alt="작성자 이미지" />}
            <span className="author_name">{feed.feed.user.name}</span>
            <span className="author_location"><img src={require('../../images/location.png')} className="location_ico" alt="위치 아이콘 이미지" />{feed.feed.address}</span>
            <span className="author_date">{feed.feed.creationTime.split(' ')[0]}</span>
          </div>

          <div className="article_body">
            <div className="author_content_image">
              {feed.feed.imgUrl !== null? <img src={`http://52.78.110.20:8080${feed.feed.imgUrl}`} id="more" onClick={this.togglePopup} alt="콘텐츠 이미지" /> : ''}
            </div>
            <div className="author_content">
              {feed.feed.contents}
            </div>
            <div className="author_status">
              <span><img src={require('../../images/like_icon.png')} alt="좋아요 아이콘 이미지" /> {feed.userLikeStatus}개</span> <span><img src={require('../../images/comment_icon.png')} alt="댓글 아이콘 이미지" /> {feed.reply.length}개</span>
            </div>
          </div>

          <div className="article_comment">
            {feed.reply.map((re, i) => (
              <div>
                <div className="comm" key={i}>
                  <img src={re.user.imageUrl === null ? require('../../images/person.png') : re.user.imageUrl } className="comm_img" alt="작성자 이미지" />
                  <span className="comm_name">{re.user.name}</span>
                  <p className="comm_content">{re.contents}</p>
                </div>
                {re.contents.length > 0 ? <div className="comm_more"><button>댓글 더보기</button></div> : ''}
              </div>
            ))}
          </div>
        </article>
        {this.state.showPopup ? <MorePopup
          closePopup={this.togglePopup} /> : null}
      </div>
    ));

    return (
      <div className="feeds">
        {article}
      </div>
    );
  }
}

class MorePopup extends Component {
  render(){
    return (
      <div id="MorePopup" onClick={this.props.closePopup}>
        <div className="more_detail">
          <img src={localStorage.getItem('thisImg')} className="more_img" alt="사진 클릭시 확대 창" />
          <div className="more_comm">댓글</div>
        </div>
        <div className="curtain"></div>
      </div>
    );
  }
}

export default Feed;
