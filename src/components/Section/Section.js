import React, { Component } from 'react';
import Feed from '../Feed/Feed';
import './Section.css';


class Section extends Component {
  render(){
    const {feeds} = this.props;
    return (
      <section>
        {feeds.length > 0 && <Feed feeds={feeds}/>}
      </section>
    );
  }
}

export default Section;
