import './PageContent.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import Post from 'components/Post';
import PostView from 'components/PostView';
import Search from 'widgets/Search';
import Categories from 'widgets/Categories';

import Content from '../../Content';


export default class PageContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: window.location.hash.substr(1),
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: window.location.hash.substr(1) })
    });
  }

  render() {
    let MainContent;
    switch(this.state.route) {
      case '/posts':
        MainContent = Post; // заменим на PostsList
        break;
      case '/bloggers':
        MainContent = Post; // заменим на BloggersList
        break;
      default:
        MainContent = PostView; // заменим на About
    }

    return (
      <div className="page-content">
        <Container>
          <Row>
            <Col md="8" className="main-content">
              <MainContent />
            </Col>
            <Col md="4" className="sidebar-widgets">
              <Search />
              <Categories categories={Content.categories} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
