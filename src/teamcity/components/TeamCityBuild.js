import React from 'react';
import PropTypes from 'prop-types';

const TeamCityBuild = (props) => {
  if (props.state === "finished") {
    return (
        <div>
          {props.type} - {props.status} [{props.date}]
        </div>
    );
  } else { // running
    return (
        <div>
          {props.type} <div style={{height: '20px', width: '300px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'black'}}><div style={{width: props.progress + '%', height: '20px', backgroundColor: 'blue', color: 'white'}}><strong>{props.progress}%</strong></div></div>
        </div>
    );
  }
}

TeamCityBuild.propTypes = {
  state: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  progress: PropTypes.number
}

export default TeamCityBuild;