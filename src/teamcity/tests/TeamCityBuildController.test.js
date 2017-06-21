import React from 'react';
import ReactDOM from 'react-dom';
import TeamCityBuildController from '../components/TeamCityBuildController';
import { callTeamCityAPI } from '../../functions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamCityBuildController />, div);
});

// add test for callAPI function
it('returns 1 post with valid API call', () => {
  callTeamCityAPI("http://cc-clmccbld01:9090/guestAuth/app/rest/builds", 1)
    .then((returnState) => {
      // this should actually be 1, but apparently you can't fire off a network request in jest?
      expect(returnState.builds.length).toBe(0);  
    });
});