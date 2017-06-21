import React from 'react';
import PropTypes from 'prop-types';

const WordPressPost = (props) => {
  return (
    <div>
      {props.title} - {props.date} ({props.author})
    </div>
  );
}

WordPressPost.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default WordPressPost;