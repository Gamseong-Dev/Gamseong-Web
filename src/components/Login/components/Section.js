import React, {Component} from 'react';


class Section extends Component {
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

  goSignPage(){
    window.location.href = 'http://localhost:3000/sign';
  }

  render(){

    // 로그아웃 한 후 다시 로그인 페이지로 돌아왔을 때 페이지 뒤로가기 막기
    history.pushState(null, null, location.href);
    window.onpopstate = function(e){
      history.go(1);
    }

    return (
      <div id="section">
        <section>
          <div className="loginForm">
            <form action="" method="">
              <h2>감성여행</h2>
              <p>내가 있는 이곳에서 시작하다</p>
              <input type="email" className="login_id" name="account" value={this.state.account} placeholder="이메일 주소" onChange={this.onChange} required />
              <input type="password" className="login_pw" name="password" value={this.state.password} placeholder="비밀번호" onChange={this.onChange} required />
              <button className="login_btn" onClick={this.onSubmit}>로그인</button>
            </form>
          </div>
          <div className="doSignForm">
            <p>계정이 없으신가요? <button onClick={this.goSignPage.bind(this)}>가입하기</button></p>
          </div>
          <div className="googleplay">
            <a href="https://play.google.com/store/apps/details?id=com.ionicframework.gamseong7840931" target="_blank"><img src={require('../../../images/googleplay.png')} alt="구글플레이 이미지" /></a>
          </div>
        </section>
      </div>
    );
  }
}

export default Section
