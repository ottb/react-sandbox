import React from 'react';
import PropTypes from 'prop-types';
import TeamCityBuild from './TeamCityBuild';

const TeamCityBuildList = (props) => {
  // create list of builds to render if builds have been passed in, otherwise just render message
  if (props.builds) {
    const buildItems = props.builds.map((build) =>
      <TeamCityBuild key={build.id} type={build.buildTypeId} status={build.status} date={build.finishDate} state={build.state} progress={build.percentageComplete} />
    );

    return (
      <div>
        <p>{props.message}</p>
        <ul>{buildItems}</ul>
      </div>
    )
  } else {    
    return (
        <div>
          <p>{props.message}</p>
        </div>
    );
  }
}

TeamCityBuildList.PropTypes = {
  builds: PropTypes.array,
  message: PropTypes.string.isRequired
}

export default TeamCityBuildList;