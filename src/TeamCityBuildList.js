import React, { Component } from 'react';
import TeamCityBuild from './TeamCityBuild';

class TeamCityBuildList extends Component {
  // create list of builds to render if builds have been passed in, otherwise just render message
  render() {
    if (this.props.builds) {
      const buildItems = this.props.builds.map((build) =>
        <TeamCityBuild key={build.id} type={build.buildTypeId} status={build.status} date={build.finishDate} state={build.state} progress={build.percentageComplete} />
      );

      return (
        <div>
          <p>{this.props.message}</p>
          <ul>{buildItems}</ul>
        </div>
      )
    } else {    
      return (
          <div>
            <p>{this.props.message}</p>
          </div>
      );
    }
  }
}

export default TeamCityBuildList;