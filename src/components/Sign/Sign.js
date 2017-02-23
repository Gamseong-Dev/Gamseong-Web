import React, {Component} from 'react';
import './Sign.css';
import Footer from '../Footer/Footer';

class Sign extends Component {
  render(){
    return (
      <div id="Sign">
        <Section />
        <Footer />
      </div>
    );
  }
}

class Section extends Component {

  goLoginPage(){
    window.location.href = 'http://localhost:3000/';
  }

  render(){
    return (
      <div id="section">
        <section>
          <div className="signForm">
            <form action="" method="">
              <h2>감성여행</h2>
              <p>내가 있는 이곳에서 시작하다</p>
              <button className="facebook_login_btn">페이스북으로 가입하기</button>
              <p className="or">페이스북 계정이 없으면</p>
              <input type="email" className="sign_id" name="account" placeholder="이메일 주소" required />
              <input type="password" className="sign_pw" name="password" placeholder="비밀번호" required />
              <input type="password" className="sign_pw_chk" name="password" placeholder="비밀번호 확인" required />
              <input type="text" className="sign_nickname" name="nickname" placeholder="이름(별명)" required />
              <button className="sign_btn">가입하기</button>
            </form>
          </div>
          <div className="doLoginForm">
            <p>계정이 있으신가요? <button onClick={this.goLoginPage.bind(this)}>로그인</button></p>
          </div>
          <div className="googleplay">
            <a href="https://play.google.com/store/apps/details?id=com.ionicframework.gamseong7840931" target="_blank"><img src={require('../../images/googleplay.png')} alt="구글플레이 이미지" /></a>
          </div>
        </section>
      </div>
    );
  }
}

export default Sign;
