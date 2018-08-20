import 'bootstrap/dist/css/bootstrap.css';

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import CommentsForm from 'components/CommentsForm';
import CommentsListContainer from 'containers/CommentsListContainer';
import BlogsContainer from 'containers/BlogsContainer';
import UsersContainer from 'containers/UsersContainer';

const menuItems = [
  {
    id: 0,
    label: 'Home',
    href: '/'
  },
  {
    id: 1,
    label: 'Blogs',
    href: '/blogs'
  },
  {
    id: 2,
    label: 'Users',
    href: '/users'
  },
];

const sidebarItems = [
  {
    id: 0,
    label: 'All articles',
    href: '/all'
  },
  {
    id: 1,
    label: 'New articles',
    href: '/new'
  },
];

const articles = [
  {
    id: 0,
    label: 'All articles',
    href: '/all'
  },
  {
    id: 1,
    label: 'New articles',
    href: '/new'
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      blogs: [],
      users: [],
    }
  }

  handleSubmit = (comment) => {
    const { comments, blogs, users } = this.state;

    this.setState({
      comments: comments.concat([comment]),
    })
    console.log('comment', comment);
  }

  render() {
    const { comments, blogs, users } = this.state;

    return (
      <Fragment>
        <Layout className="layout row">
          <Menu size="big" items={menuItems}></Menu>
          <Sidebar items={sidebarItems} />
          <Content articles={articles}>
            <CommentsListContainer comments={comments} />
            <CommentsForm onSubmit={this.handleSubmit} />
            <UsersContainer users={users} />
            <BlogsContainer blogs={blogs} />
          </Content>
        </Layout>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
