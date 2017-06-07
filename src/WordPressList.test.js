import React from 'react';
import ReactDOM from 'react-dom';
import WordPressList from './WordPressList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WordPressList />, div);
});
