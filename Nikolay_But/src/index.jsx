import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import CommentsForm from 'components/CommentsForm';
import CommentsList from 'components/CommentsList';

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
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }
  }

  handleSubmit = (comment) => {
    const { comments } = this.state;

    this.setState({
      comments: comments.concat([comment]),
    })
    console.log('comment', comment);
  }

  render() {
    const { comments } = this.state;

    return (
      <Fragment>
        <Layout className="layout row">
            <Menu size="big" items={menuItems}></Menu>
            <Sidebar items={sidebarItems}/>
            <Content articles={articles}>
              <CommentsList comments={comments} />
              <CommentsForm onSubmit={this.handleSubmit} />
            </Content>
        </Layout>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
