import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlogList extends Component {
  render() {
    // create list of posts to render if posts have been passed in, otherwise just render message
    if (this.props.blogs) {
      const blogItems = this.props.blogs.map((blog) =>
        <li key={blog}>{blog}</li>
      );

      return (
        <div>
          <button onClick={() => this.props.blogAction("add")}>Add Blog</button>
          <ul>{blogItems}</ul>
        </div>
      )
    } else {    
      return (
          <div>
          </div>
      );
    }
  }
}

BlogList.PropTypes = {
  blogs: PropTypes.array
}

export default BlogList;