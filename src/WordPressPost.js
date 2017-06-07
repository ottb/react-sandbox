import React, { Component } from 'react';

class WordPressPost extends Component {

  render() {
    return (
        <div>
          {this.props.title} - {this.props.date} ({this.props.author})
        </div>
    );
  }
}

export default WordPressPost;