import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const menuItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'News',
    href: '/news'
  },
];

const sidebarItems = [
  {
    label: 'All articles',
    href: '/all'
  },
  {
    label: 'New articles',
    href: '/new'
  },
];

const articles = [
  {
    label: 'All articles',
    href: '/all'
  },
  {
    label: 'New articles',
    href: '/new'
  },
];

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout className="layout row">
            <Menu size="big" items={menuItems}></Menu>
            <Sidebar items={sidebarItems}/>
            <Content articles={articles} />
        </Layout>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
