import React from 'react';
import ReactDOM from 'react-dom';
import AlgoliaSearch from './AlgoliaSearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlgoliaSearch />, div);
});
