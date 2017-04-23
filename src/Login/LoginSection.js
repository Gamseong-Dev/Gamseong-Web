import React, {Component} from 'react';


class LoginSection extends Component {
  constructor(props){
    super(props)
    this.state = {
      account: '',
      password: ''
    }
  }

  onChange = e => {
    this.setState({
    [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const {getAccount} = this.props
    getAccount(this.state)
  }

  render(){
    return (
      <div id="section">
        <section>
          <div className="loginForm">
            <form action="" method="" onSubmit={this.onSubmit}>
              <h2>감성여행</h2>
              <p>내가 있는 이곳에서 시작하다</p>
              <button className="facebook_login_btn">페이스북으로 로그인</button>
              <p className="or">또는</p>
              <input type="email" className="login_id" name="account" value={this.state.account} placeholder="이메일 주소" onChange={this.onChange} required />
              <input type="password" className="login_pw" name="password" value={this.state.password} placeholder="비밀번호" onChange={this.onChange} required />
              <button type="submit" className="login_btn">로그인</button>
            </form>
          </div>
          <div className="googleplay">
            <a href="https://play.google.com/store/apps/details?id=com.ionicframework.gamseong7840931" target="_blank"><img src={require('../images/googleplay.png')} alt="구글플레이 이미지" /></a>
          </div>
        </section>
      </div>
    );
  }
}

export default LoginSection
