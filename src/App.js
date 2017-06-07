import React, { Component } from 'react';
import WordPressList from './WordPressList'

class App extends Component {

  render() {
    return(
      <div>
        <WordPressList url="https://health.clevelandclinic.org/wp-json/wp/v2/posts" maxPosts="5" postOrder="desc" />
      </div>
    );
  }
}

export default App;
