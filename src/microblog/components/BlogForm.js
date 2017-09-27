import React from 'react';
import PropTypes from 'prop-types';

const BlogForm = (props) => {
  // form for adding a blog entry
  return (
    <div>
      <input type="text" value={props.entry} onChange={props.onBlogChange} />
      <button onClick={() => props.blogAction("save")}>Save Blog</button>
    </div>
  );
}

BlogForm.PropTypes = {
  entry: PropTypes.string
};

export default BlogForm;