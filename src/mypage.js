import React, { Component } from 'react';
import Feed from './feed';
import './css/mypage.css';

export default class extends Component {
  render(){
    return (
      <div id="MyPage">
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

class Header extends Component {
  render(){
    return (
      <header>
        <div className="header_cont">
          <div className="header_logo">
            <img src={require('./images/logo.png')} alt="감성여행 로고 이미지" />
            <h1>감성여행</h1>
          </div>
          <div className="header_nav">
            <ul>
              <li><a href="#"><img src="" alt="또 뭐,,있을까" /></a></li>
              <li><a href="#"><img src={require('./images/per.png')} alt="상태 아이콘" /></a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

class Section extends Component {
  render(){
    return (
      <section>
        <Feed />
      </section>
    );
  }
}

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
          <p>감성여행</p>
        </div>
      </footer>
    );
  }
}
