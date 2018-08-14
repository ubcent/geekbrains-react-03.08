import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu';
import Wrapper from './components/Wrapper';

const menuItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'News',
    href: '/new'
  },
]

class App extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <div>Hello world</div>
          <Menu size="big" />
        </Wrapper>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
