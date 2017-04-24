import React, {Component} from 'react'
import Modal from '../Modal';




//사진을 찍고 ->


class EditImageUpload extends Component {
  state = {
    ...this.defaultState
  }
  defaultState = {
    file: '',
    imagePreviewUrl: '',
    modalVisible: false,
    cameraVisible: false,
    canvas: 'none',
    takingShot: false
  }
  handleImageChange = e => {
    e.preventDefault();

    let reader =  new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        modalVisible: false,
      });
    }

    reader.readAsDataURL(file);
  }
  isSelectCamera = () => {
    this.setState({modalVisible: true})
  }
  handleCamera = e => {
    e.preventDefault()
    this.setState({modalVisible: false, cameraVisible : true })

    var _this = this; // 밖에 있는 this 를 복사해온 것임 ㅎㅎㅎㅎ

    var width = 320;    // We will scale the photo width to this
    var height = 320;     // This will be computed based on the input stream

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
      startbutton = document.getElementById('startbutton');
      console.log("",startbutton)

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

      startbutton.addEventListener('click', function(){
        // ev.preventDefault();
        takepicture('사진찍기');
      }, false);
      clearphoto()

    }

    // Fill the photo with an indication that none has been
    // captured.

    function clearphoto() {
      var context = canvas.getContext('2d');
      context.fillStyle = "#AAA";
      context.fillRect(0, 0, canvas.width, canvas.height);

      var data = canvas.toDataURL('image/png');
      console.log("from_clearphoto", data);
      // _this.setState({imagePreviewUrl: undefined})
    }

    // Capture a photo by fetching the current contents of the video
    // and drawing it into a canvas, then converting that to a PNG
    // format data URL. By drawing it on an offscreen canvas and then
    // drawing that to the screen, we can change its size and/or apply
    // other changes before drawing it.

    function takepicture(btnName) {
      var context = canvas.getContext('2d');
      if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

      var data = canvas.toDataURL('image/png');
        _this.setState({imagePreviewUrl: data})
        console.log(btnName, `data = ${data.substr(0,100)}`, `state = ${_this.state.imagePreviewUrl.substr(0,100)}`);
      } else {
        clearphoto();
      }
    }
    startup();
  }
  renderTakeImg = () => {
    let {imagePreviewUrl} = this.state;
    if(imagePreviewUrl){
      return (
        <div>
          {console.log("render",imagePreviewUrl.substr(0,100))}
          <img src={imagePreviewUrl} id="profile_img" className="profile_img" alt="프로필 사진"/>
        </div>
      )
    }else{
      return (
        <div>
          <img src={require('../../images/friends1.png')} id="profile_img" className="profile_img" alt="프로필 사진" />
        </div>
      )
    }
  }
  handleSetImage = () => {
    console.log("handleSetImage", this.state.imagePreviewUrl.substr(0,100));
    this.setState({
      imagePreviewUrl: this.state.imagePreviewUrl,
      cameraVisible: false,
      takingShot: false
    })
  }
  render(){

    return (
      <div>
        <div className="cont_wrap">
          <h2>프로필 사진 변경</h2>
          <div onClick={this.isSelectCamera} className="profile_image">
            {this.renderTakeImg()}
          </div>
        </div>
        <Modal open={this.state.modalVisible}>
          <div className="modal">
            <ul>
              <li onClick={this.handleCamera}>
                  사진찍기
              </li>
              <li onClick={() => this.setState({...this.defaultState})}>

                  현재 사진 삭제

              </li>
              <li>
                <label> 사진업로드
                  <input type="file" onChange={(e)=>this.handleImageChange(e)} className='file'/>
                </label>
              </li>
              <li onClick={() => this.setState({modalVisible: false})}>
                  취소
              </li>
            </ul>
          </div>
        </Modal>
        <Modal open={this.state.cameraVisible}>
          <div className="modal camera-box">
            <div className="camera">
                <video id="video" onCanPlay={this.handleCanPlay}>Video stream not available.</video>
                <canvas id="canvas" className="canvas" style={{display:this.state.canvas}}></canvas>
            </div>
            {this.state.takingShot
              ? (<div>
                  <button onClick={this.handleSetImage}>선택하기</button>
                  <button onClick={() => this.setState({canvas: 'none', takingShot: false })}>다시찍기</button>
                </div>
              )
              : (
                <div>
                  <button id="startbutton" onClick={() => this.setState({canvas: '', takingShot: true})}>사진찍기</button>
                  <button onClick={() => this.setState({...this.defaultState})}> 닫기</button>
                </div>
              )
            }
          </div>
        </Modal>
      </div>
    );
  }
}

export default EditImageUpload;
