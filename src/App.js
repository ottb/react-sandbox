import React, { Component } from 'react';
import Dragula from 'react-dragula';
import WordPressController from './WordPressController'
import TeamCityBuildController from './TeamCityBuildController'
import AlgoliaSearchController from './AlgoliaSearchController'

class App extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {ticks: 0};
  }

  render() {
    return(
      <div className="container" ref={this.dragulaDecorator}>
        <WordPressController url="https://health.clevelandclinic.org/wp-json/wp/v2/posts" ticks={this.state.ticks} />
        <TeamCityBuildController url="http://cc-clmccbld01:9090/guestAuth/app/rest/builds" ticks={this.state.ticks} />
        <AlgoliaSearchController url="https://status.algolia.com/1/usage/total_search_operations/period/month" ticks={this.state.ticks} />
      </div>
    );
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  tick() {
    this.setState((prevState) => {
      return {ticks: prevState.ticks + 1};
    });
  }
  
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };
}

export default App;
