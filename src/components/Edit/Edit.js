import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Modal from '../Modal';
import './Edit.css';

class Edit extends Component {
  render(){
    return (
      <div id="Edit">
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

// npm install react-tabs (설치)
var //React       = require('react'),
    ReactTabs   = require('react-tabs'),
    Tab         = ReactTabs.Tab,
    Tabs        = ReactTabs.Tabs,
    TabList     = ReactTabs.TabList,
    TabPanel    = ReactTabs.TabPanel;

var Section = React.createClass({
	render: function () {
		return (
			<div>
				<Tabs>
					<TabList>
						<Tab>프로필 편집</Tab>
            <Tab>비밀번호 변경</Tab>
						<Tab>알림</Tab>
					</TabList>

					<TabPanel>
            <ImageUpload />
            <div className="cont_wrap">
              <h2>닉네임 변경</h2>
  						<input type="text" placeholder={localStorage.getItem('userName')} />
            </div>
            <button className="submit">완료</button>
					</TabPanel>

          <TabPanel>
            <div className="cont_wrap">
              <h2>비밀번호 변경</h2>
              <input type="password" placeholder="비밀번호를 입력해주세요" />
              <input type="password" placeholder="비밀번호를 다시 입력해주세요" />
            </div>
            <button className="submit">완료</button>
					</TabPanel>

					<TabPanel>
            <div className="cont_wrap">
  						<h2>알림</h2>
              <input type="checkbox" id="cb2" className="tgl tgl-light" name="alert" />
              <label className="tgl-btn" htmlFor="cb2"></label>
            </div>
            <button className="submit">완료</button>
					</TabPanel>
				</Tabs>
			</div>
		);
	}
});


class ImageUpload extends Component {
  constructor(props){
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      modalVisible: false
    };
  }

  handleImageChange(e){
    e.preventDefault();

    let reader =  new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        modalVisible: false
      });
    }

    reader.readAsDataURL(file);
  }
  isSelectCamera = () => {
    this.setState({modalVisible: true})
  }
  render(){
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;

    if(imagePreviewUrl){
      imagePreview = (<img src={imagePreviewUrl} id="profile_img" className="profile_img" alt="프로필 사진"/>);
    }else{
      imagePreview = (<img src={require('../../images/friends1.png')} id="profile_img" className="profile_img" alt="프로필 사진" />);
    }

    return (
      <div>
        <div className="cont_wrap">
          <h2>프로필 사진 변경</h2>
          <div onClick={this.isSelectCamera} className="profile_image">
            {imagePreview}
          </div>
        </div>
        <Modal open={this.state.modalVisible}>
          <div className="modal">
            <ul>
              <li>
                <button>
                  사진찍기
                </button>
              </li>
              <li>
                <button onClick={() => this.setState({imagePreviewUrl: undefined, modalVisible: false})}>
                  현재 사진 삭제
                </button>
              </li>
              <li>
                <label> 사진업로드
                  <input type="file" onChange={(e)=>this.handleImageChange(e)} className='file'/>
                </label>
              </li>
              <li>
                <button onClick={() => this.setState({modalVisible: false})}>
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

export default Edit;
