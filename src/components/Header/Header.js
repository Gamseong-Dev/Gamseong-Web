import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Header.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.goMain = this.goMain.bind(this);
  }

  toggleModal(){
    this.setState({modalIsOpen: !this.state.modalIsOpen})
  }

  goMain(){
    window.location.href = 'http://localhost:3000/';
  }

  render(){
    return (
      <div>
        <header>
          <div className="header_cont">
            <div className="header_logo">
              <img src={require('../../images/logo.png')} alt="감성여행 로고 이미지" />
              <h1>감성여행</h1>
            </div>
            <div className="header_nav">
              <ul>
                <li><button onClick={this.toggleModal}><img src={require('../../images/per.png')} alt="상태 아이콘" /></button></li>
              </ul>
            </div>
          </div>
        </header>
        <Modal open={this.state.modalIsOpen}>
          <div className="modal">
            <ul>
              <li><button onClick={this.goMain}>로그아웃</button></li>
              <li><button onClick={this.toggleModal}>취소</button></li>
            </ul>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Header;
