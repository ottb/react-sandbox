import React from 'react';
import ReactDOM from 'react-dom';
import TeamCityBuild from '../components/TeamCityBuild';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamCityBuild />, div);
});
