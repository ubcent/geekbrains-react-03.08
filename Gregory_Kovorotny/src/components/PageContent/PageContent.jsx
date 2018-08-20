import './PageContent.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import About from 'components/About';
import Post from 'components/Post';
import PostViewContainer from 'containers/PostViewContainer';
import Search from 'widgets/Search';
import Categories from 'widgets/Categories';
import PostsListContainer from 'containers/PostsListContainer';
import BloggersListContainer from 'containers/BloggersListContainer';
import CommentsListContainer from 'containers/CommentsListContainer';

import Content from '../../Content';


export default class PageContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routeAction: window.location.hash.substr(1).split('/')[1],
      routeId: window.location.hash.substr(1).split('/')[2],
    }
  }

  componentDidMount() {
    console.log(window.location.hash.substr(1).split('/'));
    window.addEventListener('hashchange', () => {
      this.setState({
        routeAction: window.location.hash.substr(1).split('/')[1],
        routeId: window.location.hash.substr(1).split('/')[2],
      })
    });
  }

  render() {
    let MainContent;
    let filterId;

    switch(this.state.routeAction) {
      case 'post':
        MainContent = PostViewContainer;
        filterId = this.state.routeId; // postId
        break;
      case 'posts':
        MainContent = PostsListContainer;
        filterId = this.state.routeId; // userId
        break;
      case 'bloggers':
        MainContent = BloggersListContainer;
        break;
      case 'comments':
        MainContent = CommentsListContainer; // TODO подумать нельзя ли один и тот же компонент использовать с PostView ??
        filterId = this.state.routeId; // userId
        break;
      default:
        MainContent = About;
    }

    console.log(filterId);

    return ( // вот тут в строке 72 - postId мне не всегда нужен (а только для PostViewContainer. как бы избежать его передачи всегда?)
      <div className="page-content">
        <Container>
          <Row>
            <Col md="8" className="main-content">
              <MainContent filterId={filterId}/>
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
