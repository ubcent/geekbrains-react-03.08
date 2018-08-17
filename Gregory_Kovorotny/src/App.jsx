import React, { Component } from 'react';

import Wrapper from './components/Wrapper';
import MenuHeader from './components/MenuHeader';
import MenuFooter from './components/MenuFooter';
import HomePage from './components/HomePage';

import Content from './Content';


export class App extends Component {
  render() {
    return (
        <Wrapper>
          <MenuHeader items={Content.menu} />
          <HomePage />
          <MenuFooter items={Content.menu} />
        </Wrapper>
    );
  }
}
