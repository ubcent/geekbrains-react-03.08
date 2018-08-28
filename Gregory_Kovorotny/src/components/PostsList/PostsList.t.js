import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

import PostsList from './PostsList';

test('PostsList should ...', () => {

});
