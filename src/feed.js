import React, { Component } from 'react';
import axios from 'axios';
import './css/mypage.css';
import './css/feed.css';

class Feed extends Component {

  componentDidMount() {
      let getFeed = () => {
          axios.get('http://52.78.110.20:8080/gamseong/feeds/locations/S031031/users/069357')
            .then(response => {
              console.log(response.data)
            });
      }
      getFeed();
  }




  render(){
    return (
      <div className="feeds">
        <article>
          <div className="article_header">
            <img src={require('./images/winter.jpg')} className="author_img" alt="작성자 이미지" />
            <span className="author_name">Yada_z</span>
            <span className="author_location"><img src={require('./images/location.png')} className="location_ico" alt="위치 아이콘 이미지" />{}</span>
            <span className="author_date">2016-12-19</span>
          </div>
          <div className="article_body">
            <div className="author_content">
              수원화성 | 화성(華城)은 경기도 수원시 팔달구와 장안구에 걸쳐 있는 길이 5.52킬로미터의 성곽이다. 1963년 사적 3호로 지정되었으며, 1997년 유네스코 세계문화유산으로 등록되었다. 수원 화성은 한국 성의 구성 요소인 옹성, 성문, 암문, 산대, 체성, 치성, 적대, 포대, 봉수대 등을 모두 갖추어 한국 성곽 건축 기술을 집대성했다고 평가된다.
            </div>
          </div>
          <div className="article_comment">
            <div className="comm01 comm">
              <img src={require('./images/friends1.jpg')} className="comm_img" alt="작성자 이미지" />
              <span className="comm_name">friends1</span>
              <p className="comm_content">ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>
            </div>
          </div>
        </article>
        <article>
          <div className="article_header">
            <img src={require('./images/winter.jpg')} className="author_img" alt="작성자 이미지" />
            <span className="author_name">Yada_z</span>
            <span className="author_location"><img src={require('./images/location.png')} className="location_ico" alt="위치 아이콘 이미지" />경기도 수원시</span>
            <span className="author_date">2016-12-20</span>
          </div>
          <div className="article_body">
            <div className="author_content">
              광교호수공원 | 광교호수공원(光敎湖水公園)은 경기도 수원시 영통구 하동 일대에 위치한 공원이다. 매년 300 만명 이상이 방문한다.[1] 농업을 위해 만들어둔 원천호수와 신대호수를 광교신도시 개발에 맞추어 공원으로 정비했다.
            </div>
          </div>
          <div className="article_comment">
            <div className="comm01 comm">
              <img src={require('./images/friends1.jpg')} className="comm_img" alt="작성자 이미지" />
              <span className="comm_name">friends1</span>
              <p className="comm_content">일빠</p>
            </div>
            <div className="comm02 comm">
              <img src={require('./images/friends2.jpg')} className="comm_img" alt="작성자 이미지" />
              <span className="comm_name">friends2</span>
              <p className="comm_content">이빠</p>
            </div>
            <div className="comm03 comm">
              <img src={require('./images/friends3.jpg')} className="comm_img" alt="작성자 이미지" />
              <span className="comm_name">friends3</span>
              <p className="comm_content">삼빠</p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Feed;
