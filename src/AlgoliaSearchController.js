import React, { Component } from 'react';
import AlgoliaSearch from './AlgoliaSearch';
import { callAlgoliaAPI } from './functions';

class AlgoliaSearchController extends Component {
  constructor(props) {
    super(props);
    this.state = {seaches: [], message: "loading..." };
  }

  // upon mount, validate url prop and call API if needed
  componentDidMount() {
    if (!this.props.url || !this.props.url.length) {
      this.setState({message: "no search statistics at this time"});
    } else {
      this.manageAPIState(this.props.url);
    }
  }

  // upon update, log action to console, validate url prop and call API if neededs
  componentDidUpdate(prevProps, prevState) {
    // only update message state if url prop is newly empty, otherwise this gets into a rendering loop when no url is provided
    // only call API if the number of posts or order of posts or url has changed
    if (this.props.url !== prevProps.url && (!this.props.url || !this.props.url.length)) {
      this.setState({message: "no search statistics at this time"});
    } else if (this.props.url !== prevProps.url) {
      this.manageAPIState(this.props.url);
    }
  }

  // issues call to API, manages state updates
  manageAPIState(url) {
    this.setState({message: "loading..."});

    if (this.props.url) {
      callAlgoliaAPI(url)
        .then((state) => {
          this.setState({message: state.message, searches: state.searches});
        });
    }
  }

  // display list of builds
  render() {
    return (
        <div>
          <AlgoliaSearch searches={this.state.searches} message={this.state.message} />
        </div>
    );
  }
}

export default AlgoliaSearchController;