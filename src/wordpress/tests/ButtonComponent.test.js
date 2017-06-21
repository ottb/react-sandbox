import React from 'react';
import ReactDOM from 'react-dom';
import ButtonComponent from '../components/ButtonComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonComponent />, div);
});
