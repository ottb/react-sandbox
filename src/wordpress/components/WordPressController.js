import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WordPressList from './WordPressList';
import ButtonComponent from './ButtonComponent';
import { callAPI } from '../../functions';

class WordPressController extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: [], message: "loading...", numClicks: 0, maxPosts: 5, postOrder: "desc"};
  }

  // upon mount, validate url prop and call API if needed
  componentDidMount() {
    if (!this.props.url || !this.props.url.length) {
      this.setState({message: "no posts at this time"});
    } else {
      this.manageAPIState(this.props.url, this.state.maxPosts, this.state.postOrder);
    }
  }

  // upon update, log action to console, validate url prop and call API if neededs
  componentDidUpdate(prevProps, prevState) {
    if (this.state.numClicks > prevState.numClicks) {
      let currentdate = new Date(); 
      let datetime = currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();
      console.log("Button clicked at " + datetime);
      console.log("Button has been clicked " + this.state.numClicks + " times");
      console.log("Maximum number of posts is " + this.state.maxPosts);
      console.log("Post display order is " + this.state.postOrder);
    }

    // only update message state if url prop is newly empty, otherwise this gets into a rendering loop when no url is provided
    // only call API if the number of posts or order of posts or url has changed
    if (this.props.url !== prevProps.url && (!this.props.url || !this.props.url.length)) {
      this.setState({message: "no posts at this time"});
    } else if (this.props.url !== prevProps.url || this.state.maxPosts !== prevState.maxPosts || this.state.postOrder !== prevState.postOrder) {
      this.manageAPIState(this.props.url, this.state.maxPosts, this.state.postOrder);
    }
  }

  // issues call to API, manages state updates
  manageAPIState(url, maxPosts, postOrder) {
    this.setState({message: "loading..."});

    callAPI(url, maxPosts, postOrder)
      .then((state) => {
        this.setState({message: state.message, posts: state.posts});
      });
  }

  // on click, update state with number of clicks and maxPosts/postOrder from form component
  buttonClick = (maxPosts, postOrder) => {
    this.setState((prevState) => {
      return {numClicks: prevState.numClicks + 1};
    });

    this.setState({maxPosts: maxPosts, postOrder: postOrder});
  }
  
  // display form and list of posts
  render() {
    return (
        <div>
          <ButtonComponent buttonClick={this.buttonClick} maxPosts={this.state.maxPosts} postOrder={this.state.postOrder} />
          <WordPressList posts={this.state.posts} message={this.state.message} />
        </div>
    );
  }
}

WordPressController.defaultProps = {
  ticks: 0
}

WordPressController.propTypes = {
  url: PropTypes.string.isRequired,
  ticks: PropTypes.number
}

export default WordPressController;