import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render(){
    return (
      <footer>
        <div className="footer_cont">
          <ul>
            <li><a href="#">감성여행 정보</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">개인정보보호</a></li>
          </ul>
          <p><img src={require('../../images/logo.png')} alt="감성여행 로고 이미지" />감성여행</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
