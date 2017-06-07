import React, { Component } from 'react';
import WordPressPost from './WordPressPost';

class WordPressList extends Component {
  // create list of posts to render if posts have been passed in, otherwise just render message
  render() {
    if (this.props.posts) {
      const postItems = this.props.posts.map((post) =>
        <WordPressPost key={post.id} title={post.title.rendered} date={post.date} author={post._embedded.author[0].name} />
      );

      return (
        <div>
          <p>{this.props.message}</p>
          <ul>{postItems}</ul>
        </div>
      )
    } else {    
      return (
          <div>
            <p>{this.props.message}</p>
          </div>
      );
    }
  }
}

export default WordPressList;