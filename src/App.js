import React, { Component } from 'react';
import WordPressController from './WordPressController'

class App extends Component {
  render() {
    return(
      <div>
        <WordPressController url="https://health.clevelandclinic.org/wp-json/wp/v2/posts" />
      </div>
    );
  }
}

export default App;
