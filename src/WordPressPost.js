import React, { Component } from 'react';

class WordPressPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          {this.props.title} - {this.props.date} ({this.props.author})
        </div>
    );
  }
}

export default WordPressPost;