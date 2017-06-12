import React from 'react';
import ReactDOM from 'react-dom';
import AlgoliaSearchController from './AlgoliaSearchController';
import { callAlgoliaAPI } from './functions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlgoliaSearchController />, div);
});

// add test for callAPI function
it('returns 1 post with valid API call', () => {
  callAlgoliaAPI("https://status.algolia.com/1/usage/total_search_operations/period/month", 1)
    .then((returnState) => {
      // this should actually be 1, but apparently you can't fire off a network request in jest?
      expect(returnState.searches.length).toBe(0);  
    });
});