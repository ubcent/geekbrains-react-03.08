import React, { Component } from 'react';

import Menu from './components/Menu';
import Wrapper from './components/Wrapper';

const menu1 = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
]

const menu2 = [
  { label: 'News', href: '/news' },
  { label: 'Sport', href: '/sport' },
]

export class App extends Component {
  render() {
    return (
      <div>
        <Menu size='big' items={menu1} />

        <Wrapper>
          <div>Hello world (wrapped)</div>
          <Menu items={menu2} />
        </Wrapper>
      </div>
    );
  }
}
