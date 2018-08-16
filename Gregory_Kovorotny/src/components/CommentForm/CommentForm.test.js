import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

import CommentForm from './CommentForm';

test('CommentForm should ...', () => {

});