import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

import CommentsForm from './CommentsForm';

test('CommentsForm should fire onSubmit event', () => {
  const mockOnSubmit = jest.fn();
  const mockPreventDefault = jest.fn();
  const mockObject = {
    author: 'Vasya',
    message: 'Message',
  };
  const comment = shallow(<CommentsForm onSubmit={mockOnSubmit} />);

  comment.setState(mockObject);
  comment.find('button').simulate('click', { preventDefault: mockPreventDefault })

  expect(mockOnSubmit.mock.calls[0][0]).toEqual(mockObject);
  expect(mockPreventDefault.mock.calls.length).toBe(1);
});
