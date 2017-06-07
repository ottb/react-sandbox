import React from 'react';
import ReactDOM from 'react-dom';
import WordPressController from './WordPressController';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WordPressController />, div);
});
