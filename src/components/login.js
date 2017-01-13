import React, {Component} from 'react';
import { browserHistory } from 'react-router'
import axios from 'axios';
import '../css/login.css';
import Footer from './Footer';

class Login extends Component {

  componentDidMount() {
      var param = {
        account: 'qkrekwjd9715@hanmail.net',
        password: 'qpalzm50'
      };

      let getNumber = () => {
          axios.post('http://52.78.110.20:8080/gamseongAccounts/users/login', param)
            .then(response => {console.log(response);});
      };
      getNumber();
  }
  render(){
    return (
      <div id="Login">
        <Section />
        <Footer />
      </div>
    );
  }
}

class Section extends Component {
  renderPage = () => {
    browserHistory.push('mypage');
  }
  render(){
    return (
      <div id="section">
        <section>
          <div className="loginForm">
            <form action="" method="">
              <h2>감성여행</h2>
              <p>내가 있는 이곳에서 시작하다</p>
              <input type="text" className="login_id" name="username" placeholder="사용자 이름" required />
              <input type="password" className="login_pw" name="userpassword" placeholder="비밀번호" required />
              <input type="submit" className="login_btn" value="로그인" onClick={this.renderPage}/>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
