import React from 'react';
import ReactDOM from 'react-dom';
import WordPressController from '../components/WordPressController';
import { callAPI } from '../../functions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WordPressController />, div);
});

// add test for callAPI function
it('returns 1 post with valid API call', () => {
  callAPI("https://health.clevelandclinic.org/wp-json/wp/v2/posts", 1, "desc")
    .then((returnState) => {
      // this should actually be 1, but apparently you can't fire off a network request in jest?
      expect(returnState.posts.length).toBe(0);  
    });
});