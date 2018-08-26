import 'bootstrap/dist/css/bootstrap.css';

import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import routes from './routes';
import store from './store';

import Menu from 'components/Menu';
import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import Content from 'components/Content';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LoginButton from 'components/LoginButton';


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
  {
    id: 3,
    label: 'Comments',
    href: '/comments'
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
    label: 'Top rated',
    href: '/top'
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
    const {comments, blogs, users} = this.state;

    this.setState({
      comments: comments.concat([comment]),
    })
  }

  render() {
    const {comments, blogs, users} = this.state;

    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header>I'm header</Header>
            <Layout className="layout row">
              <Container>
                <Row>
                  <Col xs={{size: 12, order: 1, offset: 0}}>
                    <Menu size="big" items={menuItems}></Menu>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{size: 3, order: 1, offset: 0}}>
                    <Sidebar items={sidebarItems} />
                  </Col>
                  <Col xs={{size: 9, order: 1, offset: 0}}>
                    <Content>
                      <Switch>
                        {routes.map((route, idx) => <Route key={idx} {...route} />)}
                      </Switch>
                    </Content>
                  </Col>
                </Row>
                <Footer />
              </Container>
            </Layout>
          </Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
