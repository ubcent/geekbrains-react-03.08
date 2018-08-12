import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Wrapper from './components/Wrapper';
import MenuHeader from './components/MenuHeader';
import MenuFooter from './components/MenuFooter';
import HomePage from './components/HomePage';

import Config from './config';


export class App extends Component {
  render() {
    return (
        <Wrapper>
          <MenuHeader items={Config.menuHeader} />
          <HomePage />
          <MenuFooter items={Config.menuFooter} />
        </Wrapper>
    );
  }
}
