import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render(){
    return (
      <header>
        <div className="header_cont">
          <div className="header_logo">
            <img src={require('../../images/logo.png')} alt="감성여행 로고 이미지" />
            <h1>감성여행</h1>
          </div>
          <div className="header_nav">
            <ul>
              <li><a href="#"><img src="" alt="또 뭐,,있을까" /></a></li>
              <li><a href="#"><img src={require('../../images/per.png')} alt="상태 아이콘" /></a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
