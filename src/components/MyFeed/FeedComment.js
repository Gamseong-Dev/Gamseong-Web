import React from 'react'
import FeedArticleHeader from './FeedArticleHeader'


const FeedComment = ({feed}) => (
  <div className="more_comm">
    <FeedArticleHeader feed={feed}/>
    <div>댓글 리스트</div>
    {console.log(feed)}
    <input />
  </div>
)

export default FeedComment
