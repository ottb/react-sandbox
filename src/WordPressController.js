import React, { Component } from 'react';
import axios from 'axios'
import WordPressList from './WordPressList';
import ButtonComponent from './ButtonComponent';

class WordPressController extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: [], message: "loading...", numClicks: 0, maxPosts: 5, postOrder: "desc"};
    this.buttonClick = this.buttonClick.bind(this);
  }

  // upon mount, validate url prop and call API if needed
  componentDidMount() {
    if (!this.props.url || !this.props.url.length) {
      this.setState({message: "no posts at this time"});
    } else {
      this.callAPI();
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

    if (!this.props.url || !this.props.url.length) {
      this.setState({message: "no posts at this time"});
    } else if (this.state.maxPosts !== prevState.maxPosts || this.state.postOrder !== prevState.postOrder) {
      this.callAPI();
    }
  }

  // creates request URL based on state, makes API call with error handling
  callAPI() {
    let url = this.props.url + "?_embed";
    if (this.state.maxPosts) {
      url += "&per_page=" + this.state.maxPosts;
    }
    if (this.state.postOrder) {
      url += "&filter[orderby]=date&order=" + this.state.postOrder;
    }
    axios.get(url)
      .then((response) => {
        if (!response.data || response.data.length === 0) {
          this.setState({message: "no posts at this time"});
        } else {
          console.log(response.data);
          this.setState({message: ""});
          this.setState({posts: response.data});
        }
      })
      .catch((error) => {
        this.setState({message: "error loading posts"});
      });
  }

  // on click, update state with number of clicks and maxPosts/postOrder from form component
  buttonClick(maxPosts, postOrder) {
    this.setState((prevState) => {
      return {numClicks: prevState.numClicks + 1};
    });

    this.setState({maxPosts: maxPosts, postOrder: postOrder});
  }
  
  // display form and list of posts
  render() {
    return (
        <div>
          <ButtonComponent buttonClick={this.buttonClick.bind(this)} maxPosts={this.state.maxPosts} postOrder={this.state.postOrder} />
          <WordPressList posts={this.state.posts} message={this.state.message} />
        </div>
    );
  }
}

export default WordPressController;