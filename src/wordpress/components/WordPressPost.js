import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WordPressPost extends Component {

  render() {
    return (
        <div>
          {this.props.title} - {this.props.date} ({this.props.author})
        </div>
    );
  }
}

WordPressPost.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default WordPressPost;