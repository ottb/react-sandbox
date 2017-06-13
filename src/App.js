import React, { Component } from 'react';
import Dragula from 'react-dragula';
import WordPressController from './WordPressController'
import TeamCityBuildController from './TeamCityBuildController'
import AlgoliaSearchController from './AlgoliaSearchController'

class App extends Component {
  render() {
    return(
      <div className="container" ref={this.dragulaDecorator}>
        <WordPressController url="https://health.clevelandclinic.org/wp-json/wp/v2/posts" />
        <TeamCityBuildController url="http://cc-clmccbld01:9090/guestAuth/app/rest/builds" state="finished" />
        <AlgoliaSearchController url="https://status.algolia.com/1/usage/total_search_operations/period/month" />
      </div>
    );
  }
  
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };
}

export default App;
