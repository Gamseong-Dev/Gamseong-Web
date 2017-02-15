import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
  handleChange: function() {
      return alert("이미지바뀌어야하는데....");
  },

	render: function () {
		return (
			<div>
				<Tabs>
					<TabList>
						<Tab>프로필 편집</Tab>
						<Tab>설정</Tab>
					</TabList>

					<TabPanel>
            <ImageUpload />
            <div className="cont_wrap">
              <h2>닉네임 변경</h2>
  						<input type="text" placeholder="닉네임 들어가야함" />
            </div>
            <div className="cont_wrap">
              <h2>비밀번호 변경</h2>
  						<input type="password" placeholder="비밀번호를 입력해주세요" />
              <input type="password" placeholder="비밀번호를 다시 입력해주세요" />
            </div>
            <button className="submit">완료</button>
					</TabPanel>

					<TabPanel>
            <div className="cont_wrap">
  						<h2>옵션</h2>
              <p>쪽지</p>
              <input type="checkbox" id="cb1" className="tgl tgl-light" name="memo" />
              <label className="tgl-btn" htmlFor="cb1"></label>
              <br />
              <p>알림</p>
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
      imagePreviewUrl: ''
    };
  }

  handleImageChange(e){
    e.preventDefault();

    let reader =  new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  render(){
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;

    if(imagePreviewUrl){
      imagePreview = (<img src={imagePreviewUrl} id="profile_image" className="profile_image" alt="프로필 사진" />);
    }else{
      imagePreview = (<img src={require('../../images/friends1.png')} id="profile_image" className="profile_image" alt="프로필 사진" />);
    }

    return (
      <div className="cont_wrap">
        <h2>프로필 사진 변경</h2>
        {imagePreview}
        <input type="file" onChange={(e)=>this.handleImageChange(e)} />
      </div>
    );
  }
}

export default Edit;
