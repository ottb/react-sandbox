import React, { Component } from 'react';
import axios from 'axios'
import WordPressPost from './WordPressPost';

class WordPressList extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: [], message: "loading..."};
  }

  // need to make use of maxPosts and postOrder
  callAPI() {
    let url = this.props.url + "?_embed";
    if (this.props.maxPosts) {
      url += "&per_page=" + this.props.maxPosts;
    }
    if (this.props.postOrder) {
      url += "&filter[orderby]=date&order=" + this.props.postOrder;
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

  componentDidMount() {
    if (!this.props.url || !this.props.url.length) {
      this.setState({message: "no posts at this time"});
    } else {
      this.callAPI();
    }
  }

  render() {
    const postItems = this.state.posts.map((post) =>
      <WordPressPost key={post.id} title={post.title.rendered} date={post.date} author={post._embedded.author[0].name} />
    );

    return (
        <div>
          <p>{this.state.message}</p>
          <ul>{postItems}</ul>
        </div>
    );
  }
}

export default WordPressList;