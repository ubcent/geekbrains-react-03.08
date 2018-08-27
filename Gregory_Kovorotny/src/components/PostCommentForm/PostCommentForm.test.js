import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';

configure({adapter: new Adapter()});

import PostCommentForm from './PostCommentForm';
import {
  Button,
} from 'reactstrap';

test('PostCommentForm should fire onSubmit event', () => {
  const mockOnSubmit = jest.fn();
  const mockPreventDefault = jest.fn();
  const mockObject = {
    author: 'Vasya',
    message: 'Message',
    postId: 22,
  };
  const postComment = shallow(<PostCommentForm postId={22} onSubmit={mockOnSubmit} />); // проверить в тесте postId

  postComment.setState(mockObject);
  postComment.find(Button).simulate('click', {preventDefault: mockPreventDefault});

  expect(mockOnSubmit.mock.calls[0][0]).toEqual(mockObject);
  expect(mockPreventDefault.mock.calls.length).toBe(1);
});
