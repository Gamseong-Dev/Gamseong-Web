import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Modal from '../Modal';




//사진을 찍고 ->

let width = 320,height = 0, streaming = false, data;
class EditImageUpload extends Component {
  state = {}
  defaultState = {
    file: '',
    imagePreviewUrl: '',
    modalVisible: false,
    cameraVisible: false,
    canvas: 'none',
    takingShot: false,
  }
  componentWillMount(){
    this.setState({...this.defaultState})
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
  handleStartCamera = () => {
    console.log("handleStartCamera 1");
    let video = this.refs.video, canvas = this.refs.canvas, startbutton = this.refs.startbutton
    console.log("handleStartCamera startbutton", startbutton);
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
      //  console.log("method",video.play());
     },
     function(err) {
       console.log("An error occured! " + err);
     }
   );
   video.addEventListener('canplay', () => this.handleCanPlay(video), false)
   startbutton.addEventListener('click', () => this.handleTakePicture(canvas, video) , false);
  //  console.log("handleStartCamera",startbutton);
  //  console.log("handleStartCamera",video);
  console.log("handleStartCamera 2");

   this.handleClearPhoto(canvas)
  }
  handleTakePicture = (canvas, video) => {
    let selectbutton = this.refs.selectbutton;
    this.setState({canvas: '', takingShot: true})
    console.log("handleTakePicture state", this.state.takingShot);
    // console.log(canvas, video);
    console.log("handleTakePicture");
    console.log("handleTakePicture canvas", canvas);
    console.log("handleTakePicture selectbutton", selectbutton);
    //  takepicture('사진찍기');
    let context = canvas.getContext('2d'), data;
    if (width && height) {
      console.log("handleTakePicture IF");
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      data = canvas.toDataURL('image/png');
      // this.setState({imagePreviewUrl: data})
      console.log("handleTakePicture", data.substr(0,100));
    } else {
      console.log("handleTakePicture ELSE");
      this.handleClearPhoto(canvas)
    }

    console.log("handleTakePicture addEventListener")
    selectbutton.addEventListener('click', () => this.handleSetImage(data) , false)

  }
  handleClearPhoto = (canvas) => {
    console.log("handleClearPhoto");
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    data = canvas.toDataURL('image/png');
    // console.log("from_clearphoto", data);
  }
  handleCanPlay = (video) => {
    console.log("handleCanPlay");
    // We will scale the photo width to this

    if (!streaming) {
      // 먼저 상태 확인을 하고 width 와 height을 췍
      height = video.videoHeight / (video.videoWidth/width)
      /*
        video.videoHeight = 0
        video.videoWidth = 0 둘다 영을 가지고,
        height = 0/(0/320) => NaN 값을 가지게 됨
      */
      if (isNaN(height)) {
        /*
          때문에 NaN이라면? width = 320 에서 (4/3)을 나눈 값을 height으로 지정
          그것이 240 값이 나오고 뷰에는 320*240의 video가 나오게 됨
        */
        height = width / (4/3)
      }
      let videoEle = ReactDOM.findDOMNode(this.refs.video), canvasEle = ReactDOM.findDOMNode(this.refs.canvas)
      videoEle.setAttribute('width', width)
      videoEle.setAttribute('height', height)
      canvasEle.setAttribute('width', width)
      canvasEle.setAttribute('height', height)
      streaming = true;
    }
  }
  handleCamera = () => {
    console.log("handleCamera");
    this.setState({modalVisible: false, cameraVisible : true })
    
    this.handleStartCamera()

    // var _this = this; // 밖에 있는 this 를 복사해온 것임 ㅎㅎㅎㅎ
    //
    // var width = 320;    // We will scale the photo width to this
    // var height = 0;     // This will be computed based on the input stream
    //
    // // |streaming| indicates whether or not we're currently streaming
    // // video from the camera. Obviously, we start at false.
    //
    // var streaming = false;
    //
    // // The various HTML elements we need to configure or control. These
    // // will be set by the startup() function.
    //
    // var video = null;
    // var canvas = null;
    // // var photo = null;
    // var startbutton = null;
    //
    //
    // function startup() {
    //   video = document.getElementById('video');
    //   canvas = document.getElementById('canvas');
    //   startbutton = document.getElementById('startbutton');
    //
    //   navigator.getMedia = ( navigator.getUserMedia ||
    //                          navigator.webkitGetUserMedia ||
    //                          navigator.mozGetUserMedia ||
    //                          navigator.msGetUserMedia);
    //
    //   navigator.getMedia(
    //     {
    //       video: true,
    //       audio: false
    //     },
    //     function(stream) {
    //       if (navigator.mozGetUserMedia) {
    //         video.mozSrcObject = stream;
    //       } else {
    //         var vendorURL = window.URL || window.webkitURL;
    //         video.src = vendorURL.createObjectURL(stream);
    //       }
    //       video.play();
    //     },
    //     function(err) {
    //       console.log("An error occured! " + err);
    //     }
    //   );
    //
    //   video.addEventListener('canplay', function(ev){
    //     if (!streaming) {
    //       height = video.videoHeight / (video.videoWidth/width);
    //       // Firefox currently has a bug where the height can't be read from
    //       // the video, so we will make assumptions if this happens.
    //
    //       if (isNaN(height)) {
    //         height = width / (4/3);
    //       }
    //
    //       video.setAttribute('width', width);
    //       video.setAttribute('height', height);
    //       canvas.setAttribute('width', width);
    //       canvas.setAttribute('height', height);
    //       streaming = true;
    //     }
    //   }, false);
    //   startbutton.addEventListener('click', function(ev){
    //     ev.preventDefault();
    //     takepicture('사진찍기');
    //   }, false);
    //   clearphoto()
    //
    // }
    //
    // // Fill the photo with an indication that none has been
    // // captured.
    //
    // function clearphoto() {
    //   var context = canvas.getContext('2d');
    //   context.fillStyle = "#AAA";
    //   context.fillRect(0, 0, canvas.width, canvas.height);
    //
    //   data = canvas.toDataURL('image/png');
    //   console.log("from_clearphoto", data);
    //   // _this.setState({imagePreviewUrl: undefined})
    // }
    //
    // // Capture a photo by fetching the current contents of the video
    // // and drawing it into a canvas, then converting that to a PNG
    // // format data URL. By drawing it on an offscreen canvas and then
    // // drawing that to the screen, we can change its size and/or apply
    // // other changes before drawing it.
    // var data;
    // function takepicture(btnName) {
    //   var context = canvas.getContext('2d');
    //   console.log("takePicture", width, height);
    //   if (width && height) {
    //     canvas.width = width;
    //     canvas.height = height;
    //     context.drawImage(video, 0, 0, width, height);
    //
    //     data = canvas.toDataURL('image/png');
    //     _this.setState({imagePreviewUrl: data})
    //     console.log(btnName, `data = ${data.substr(0,100)}`, `state = ${_this.state.imagePreviewUrl.substr(0,100)}`);
    //   } else {
    //     clearphoto();
    //   }
    // }
    // startup();
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
  handleSetImage = (data) => {
    console.log("handleSetImage");
    console.log("handleSetImage Data", data.substr(0,100))
    // console.log("handleSetImage", this.state.imagePreviewUrl.substr(0,100));
    this.setState({
      imagePreviewUrl: data,
      modalVisible: false,
      cameraVisible: false,
      canvas: 'none',
      takingShot: false
    })
  }
  handleCloseCamera = () => {
    this.setState({
      imagePreviewUrl: this.state.imagePreviewUrl,
      modalVisible: false,
      cameraVisible: false,
      canvas: 'none',
      takingShot: false
    })
  }
  render(){
    console.log("render", this.state);
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
                <video ref="video">Video stream not available.</video>
                <canvas ref="canvas" className="canvas" style={{display:this.state.canvas}}></canvas>
            </div>
            <div ref="cameraBtns">
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
// onClick={() => this.setState({canvas: '', takingShot: true})}
export default EditImageUpload;

{/* <button ref="startbutton" >사진찍기</button>
<button onClick={this.handleCloseCamera}> 닫기</button> */}

//
// {this.state.takingShot
//   ? (<div>
//       <button ref="selectbutton">선택하기</button>
//       <button onClick={() => this.setState({canvas: 'none', takingShot: false })}>다시찍기</button>
//     </div>
//   )
//   : (
//     <div>
//       <button ref="startbutton" >사진찍기</button>
//       <button onClick={this.handleCloseCamera}> 닫기</button>
//     </div>
//   )
// }
