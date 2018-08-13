import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu';
import Layout from './components/Layout';

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
        <Layout>
          <div>Hello world</div>
          <Menu size="big" items={menuItems} />
        </Layout>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
