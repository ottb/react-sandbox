import React, { Component } from 'react';

class TeamCityBuild extends Component {

  render() {
    if (this.props.state === "finished") {
      return (
          <div>
            {this.props.type} - {this.props.status} [{this.props.date}]
          </div>
      );
    } else { // running
      return (
          <div>
            {this.props.type} <div style={{height: '20px', width: '300px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'black'}}><div style={{width: this.props.progress + '%', height: '20px', backgroundColor: 'blue', color: 'white'}}><strong>{this.props.progress}%</strong></div></div>
          </div>
      );
    }
  }
}

export default TeamCityBuild;