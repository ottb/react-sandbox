import React from 'react';
import PropTypes from 'prop-types';
import WordPressPost from './WordPressPost';

const WordPressList = (props) => {
  // create list of posts to render if posts have been passed in, otherwise just render message
  if (props.posts) {
    const postItems = props.posts.map((post) =>
      <WordPressPost key={post.id} title={post.title.rendered} date={post.date} author={post._embedded.author[0].name} />
    );

    return (
      <div>
        <p>{props.message}</p>
        <ul>{postItems}</ul>
      </div>
    )
  } else {    
    return (
        <div>
          <p>{props.message}</p>
        </div>
    );
  }
}

WordPressList.PropTypes = {
  posts: PropTypes.array,
  message: PropTypes.string.isRequired
}

export default WordPressList;