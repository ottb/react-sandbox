import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TeamCityBuildList from './TeamCityBuildList';
import { callTeamCityAPI } from '../../functions';

class TeamCityBuildController extends Component {
  constructor(props) {
    super(props);
    this.state = {builds: [], message: "loading...", maxBuilds: 5 };
  }

  // upon mount, validate url prop and call API if needed
  componentDidMount() {
    if (!this.props.url || !this.props.url.length) {
      this.setState({message: "no builds at this time"});
    } else {
      this.manageAPIState(this.props.url, this.state.maxBuilds, this.props.state);
    }
  }

  // upon update, log action to console, validate url prop and call API if neededs
  componentDidUpdate(prevProps, prevState) {
    // only update message state if url prop is newly empty, otherwise this gets into a rendering loop when no url is provided
    // only call API if the number of posts or order of posts or url has changed
    if (this.props.url !== prevProps.url && (!this.props.url || !this.props.url.length)) {
      this.setState({message: "no builds at this time"});
    } else if (this.props.url !== prevProps.url || this.state.maxBuilds !== prevState.maxBuilds || (this.props.ticks !== prevProps.ticks && this.props.ticks % 5 === 0)) {
      this.manageAPIState(this.props.url, this.state.maxBuilds);
    }
  }

  // issues call to API, manages state updates
  manageAPIState(url, maxBuilds, state) {
    this.setState({message: ""});

    callTeamCityAPI(url, maxBuilds, state)
      .then((state) => {
        this.setState({message: state.message, builds: state.builds});
      });
  }

  // display list of builds
  render() {
    return (
        <div>
          <TeamCityBuildList builds={this.state.builds} message={this.state.message} />
        </div>
    );
  }
}

TeamCityBuildController.defaultProps = {
  ticks: 0
}

TeamCityBuildController.propTypes = {
  url: PropTypes.string.isRequired,
  ticks: PropTypes.number
}

export default TeamCityBuildController;