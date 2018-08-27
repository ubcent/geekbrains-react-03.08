import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';

configure({adapter: new Adapter()});

import PostComment from './PostComment';

test('PostComment should render author and message', () => {
  const postComment = shallow(<PostComment id={777} postId={22} author="Vasya" message="Hello" />);

  expect(postComment.find('h4').text()).toEqual('Vasya');
  expect(postComment.find('div.post-comment > div').text()).toEqual('Hello');
});
