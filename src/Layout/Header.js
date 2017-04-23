import React from 'react'
import {Link} from 'react-router-dom'
import Modal from '../components/Modal';

class Header extends React.Component {
  state = {
    modalIsOpen: false,
    modalText: ''
  }
  toggleModal = (modalText) => {
    console.log(this.props);
    this.setState({modalIsOpen: !this.state.modalIsOpen, modalText})
  }
  handleTabClick = (modalText) => {
    if(modalText === '로그아웃'){
      console.log(this.props)
      this.props.userLogOut()
      this.setState({modalIsOpen: !this.state.modalIsOpen})
    } else {
      this.setState({modalIsOpen: !this.state.modalIsOpen})
    }
  }
  render(){
    let { modalText } = this.state, {match} = this.props;
    return(
      <header>
        <div className="header_cont">
          <div className="header_logo">
            <img src={require('../images/logo.png')} alt="감성여행 로고 이미지" />
            <Link to="/mypage"><h1>감성여행</h1></Link>
          </div>
          <div className="header_nav">
            <ul>
              <li><button><img src={require('../images/alert.png')} alt="알림 아이콘" /></button></li>
              <li><Link to="/mypage"><img src={require('../images/mypage.png')} alt="마이페이지 아이콘" /></Link></li>
              <li><img onClick={() => this.toggleModal('프로필 편집')} src={require('../images/per.png')} alt="상태 아이콘" /></li>
              <li><img onClick={() => this.toggleModal('로그아웃')} src={require('../images/logout.png')} alt="로그아웃 아이콘" /></li>
            </ul>
          </div>
        </div>
        <Modal open={this.state.modalIsOpen}>
          <div className="modal">
            <ul>
              <li>
                <Link to={modalText === '프로필 편집' ? `${match.url}/edit` : '/mypage'} onClick={() => this.handleTabClick(modalText)}>
                  {modalText}
                </Link>
              </li>
              <li onClick={() => this.toggleModal(false)}> 취소 </li>
            </ul>
          </div>
        </Modal>
      </header>
    )
  }
}

export default Header
