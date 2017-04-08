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
        modalVisible: false,
        cameraVisible: false
      });
    }

    reader.readAsDataURL(file);
  }
  isSelectCamera = () => {
    this.setState({modalVisible: true})
  }
  handleCamera = () => {
    this.setState({modalVisible: false, cameraVisible : true })

    var width = 320;    // We will scale the photo width to this
    var height = 0;     // This will be computed based on the input stream

    // |streaming| indicates whether or not we're currently streaming
    // video from the camera. Obviously, we start at false.

    var streaming = false;

    // The various HTML elements we need to configure or control. These
    // will be set by the startup() function.

    var video = null;
    var canvas = null;
    // var photo = null;
    var startbutton = null;

    function startup() {
      video = document.getElementById('video');
      canvas = document.getElementById('canvas');
      // photo = document.getElementById('photo');
      startbutton = document.getElementById('startbutton');

      navigator.getMedia = ( navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia ||
                             navigator.msGetUserMedia);

      navigator.getMedia(
        {
          video: true,
          audio: false
        },
        function(stream) {
          if (navigator.mozGetUserMedia) {
            video.mozSrcObject = stream;
          } else {
            var vendorURL = window.URL || window.webkitURL;
            video.src = vendorURL.createObjectURL(stream);
          }
          video.play();
        },
        function(err) {
          console.log("An error occured! " + err);
        }
      );

      video.addEventListener('canplay', function(ev){
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth/width);

          // Firefox currently has a bug where the height can't be read from
          // the video, so we will make assumptions if this happens.

          if (isNaN(height)) {
            height = width / (4/3);
          }

          video.setAttribute('width', width);
          video.setAttribute('height', height);
          canvas.setAttribute('width', width);
          canvas.setAttribute('height', height);
          streaming = true;
        }
      }, false);

      startbutton.addEventListener('click', function(ev){
        takepicture();
        ev.preventDefault();
      }, false);

      clearphoto();
    }

    // Fill the photo with an indication that none has been
    // captured.

    function clearphoto() {
      var context = canvas.getContext('2d');
      context.fillStyle = "#AAA";
      context.fillRect(0, 0, canvas.width, canvas.height);

      var data = canvas.toDataURL('image/png');
      // photo.setAttribute('src', data);
    }

    // Capture a photo by fetching the current contents of the video
    // and drawing it into a canvas, then converting that to a PNG
    // format data URL. By drawing it on an offscreen canvas and then
    // drawing that to the screen, we can change its size and/or apply
    // other changes before drawing it.

    function takepicture() {
      var context = canvas.getContext('2d');
      if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

        var data = canvas.toDataURL('image/png');
        // photo.setAttribute('src', data);
      } else {
        clearphoto();
      }
    }

    startup();

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
                <button onClick={this.handleCamera}>
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
        <Modal open={this.state.cameraVisible}>
          <div className="camera">
              <video id="video">Video stream not available.</video>
              <button id="startbutton">Take photo</button>
          </div>
          <canvas id="canvas"></canvas>
          {/* <div className="output">
            <img id="photo" alt="The screen capture will appear in this box." />
          </div> */}
          <button onClick={() => this.setState({cameraVisible: false})}> 닫기</button>
        </Modal>
      </div>
    );
  }
}

export default Edit;
