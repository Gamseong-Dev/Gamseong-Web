import React, { Component } from 'react';
import '../css/footer.css';

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

export default Footer;
