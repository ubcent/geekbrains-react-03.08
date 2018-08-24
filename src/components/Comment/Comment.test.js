import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';

configure({adapter: new Adapter()});

import Comment from './Comment';

test('Comment should render author and message', () => {
  const comment = shallow(<Comment author="Vasya" message="Hello" />);

  expect(comment.find('.author').text()).toEqual('Vasya');
  expect(comment.find('.message').text()).toEqual('Hello');
});
