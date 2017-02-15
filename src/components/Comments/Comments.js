import React, { Component } from 'react';
import './Comments.css';

class Comments extends Component {
  render(){
    return (
      <div className="article_comment">
        <div className="comm">
          <img src={require('../../images/friends1.png')} className="comm_img" alt="작성자 이미지" />
          <span className="comm_name">friends1</span>
          <p className="comm_content">ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>
        </div>
      </div>
    );
  }
}

export default Comments;
