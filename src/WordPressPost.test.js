import React from 'react';
import ReactDOM from 'react-dom';
import WordPressPost from './WordPressPost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WordPressPost />, div);
});
