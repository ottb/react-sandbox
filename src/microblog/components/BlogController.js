import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import BlogList from './BlogList';
import BlogForm from './BlogForm';
import * as blogActions from '../actions/blogActions'

class BlogController extends Component {
  constructor(props) {
    super(props);
    this.state = { blog: "", view: props.view };
  }

  // on click, update state with action
  buttonClick = (action) => {
    if (action === "save") {
      this.props.actions.createBlog(this.state.blog);
    }
    this.setState({view: action});
  }  

  blogChange = (event) => {
    this.setState({blog: event.target.value});
  }

  render() {
    switch(this.state.view) {
      case "list":
      case "save":
        return (
          <BlogList blogs={this.props.blogs} blogAction={this.buttonClick} />
        );
      case "add":
        return (
          <BlogForm blogAction={this.buttonClick} onBlogChange={this.blogChange} />
        );
      default:
        return (
          <BlogList />
        );
    }
  }
}

BlogController.PropTypes = {
  actions: PropTypes.object.isRequired,
  blogs: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    blogs: state.blogs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(blogActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogController);