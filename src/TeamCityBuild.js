import React, { Component } from 'react';

class TeamCityBuild extends Component {

  render() {
    return (
        <div>
          {this.props.type} - {this.props.status}
        </div>
    );
  }
}

export default TeamCityBuild;