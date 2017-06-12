import React, { Component } from 'react';

class TeamCityBuild extends Component {

  render() {
    return (
        <div>
          {this.props.type} - {this.props.status} [{this.props.date}]
        </div>
    );
  }
}

export default TeamCityBuild;