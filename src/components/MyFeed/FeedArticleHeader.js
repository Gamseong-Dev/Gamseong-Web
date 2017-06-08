import React from 'react'


const FeedArticleHeader = ({feed}) => (
  <div className="article_header">
    {feed.user.imageUrl ? <img src={feed.user.imageUrl} className="author_img" alt="작성자 이미지" /> : <img src={require('../../images/person.png')} className="author_img" alt="작성자 이미지" />}
    <span className="author_name">{feed.user.name}</span>
    <span className="author_location"><img src={require('../../images/location.png')} className="location_ico" alt="위치 아이콘 이미지" />{feed.address}</span>
    <span className="author_date">{feed.creationTime.split(' ')[0]}</span>
  </div>
)

export default FeedArticleHeader
