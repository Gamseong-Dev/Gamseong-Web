import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Header.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      modalText: ''
    }

    this.toggleModalProfileEdit = this.toggleModalProfileEdit.bind(this);
    this.toggleModalLogout = this.toggleModalLogout.bind(this);
    this.goMain = this.goMain.bind(this);
  }

  toggleModalProfileEdit(){
    this.setState({modalIsOpen: !this.state.modalIsOpen, modalText: '프로필 편집'})
  }

  toggleModalLogout(){
    this.setState({modalIsOpen: !this.state.modalIsOpen, modalText: '로그아웃'})
  }

  goMain(){
    window.location.href = '/login';
  }

  goProfileEdit(){
    window.location.href = '/edit';
  }

  goMyPage(){
    window.location.href = '/mypage';
  }

  render(){
    return (
      <div>
        <header>
          <div className="header_cont">
            <div className="header_logo">
              <img src={require('../../images/logo.png')} alt="감성여행 로고 이미지" />
              <h1  onClick={this.goMyPage}>감성여행</h1>
            </div>
            <div className="header_nav">
              <ul>
                <li><button onClick={this.goMyPage}><img src={require('../../images/mypage.png')} alt="마이페이지 아이콘" /></button></li>
                <li><button onClick={this.toggleModalProfileEdit}><img src={require('../../images/per.png')} alt="상태 아이콘" /></button></li>
                <li><button onClick={this.toggleModalLogout}><img src={require('../../images/logout.png')} alt="로그아웃 아이콘" /></button></li>
              </ul>
            </div>
          </div>
        </header>
        <Modal open={this.state.modalIsOpen}>
          <div className="modal">
            <ul>
              <li>
                <button onClick={this.state.modalText === '프로필 편집' ? this.goProfileEdit : this.goMain}>
                  {this.state.modalText}
                </button>
              </li>
              <li>
                <button onClick={this.state.modalText === '프로필 편집' ? this.toggleModalProfileEdit : this.toggleModalLogout}>
                  취소
                </button>
              </li>
            </ul>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Header;
