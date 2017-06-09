import React, { Component } from 'react';
import WordPressController from './WordPressController'
import TeamCityBuildController from './TeamCityBuildController'

class App extends Component {
  render() {
    return(
      <div>
        <WordPressController url="https://health.clevelandclinic.org/wp-json/wp/v2/posts" />
        <TeamCityBuildController url="http://cc-clmccbld01:9090/guestAuth/app/rest/builds" state="finished" />
      </div>
    );
  }
}

export default App;
