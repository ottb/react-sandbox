import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render, mount } from 'enzyme';
import AlgoliaSearch from './AlgoliaSearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlgoliaSearch />, div);
});

it('displays message when prop is set to a value', () => {
  const wrapper = mount(<AlgoliaSearch message="test-message" />);
  expect(wrapper.text()).toContain('test-message');
});

it('displays a sum when prop contains an array', () => {
  const array = [{t: 1, v: 1}, {t: 2, v: 2}];
  const wrapper = shallow(<AlgoliaSearch searches={array} />);
  expect(wrapper.text()).toContain('Total Search Operations (last 30 days): 3')
});

it('displays a barchart when prop contains an array', () =>{
  const array = [{t: 1, v: 1}, {t: 2, v: 2}];
  const wrapper = shallow(<AlgoliaSearch searches={array} />);
  expect(wrapper.contains('<Bar />'));
});

