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
    let postId;

    switch(this.state.routeAction) {
      case 'post':
        MainContent = PostViewContainer;
        postId = this.state.routeId;
        break;
      case 'posts':
        MainContent = PostsListContainer; // TODO - props надо указать параметры фильтра... чтобы был универсальным
        break;
      case 'bloggers':
        MainContent = BloggersListContainer;
        break;
      case 'comments':
        MainContent = CommentsListContainer; // TODO подумать нельзя ли один и тот же компонент использовать с PostView ??
        break;                               // тоже будет получать фильтр. либо id поста, либо id пользователя, либо все подряд ??
      default:
        MainContent = About;
    }

    return ( // вот тут в строке 58 - postId мне не всегда нужен (а только для PostViewContainer. как бы избежать его передачи всегда?)
      <div className="page-content">
        <Container>
          <Row>
            <Col md="8" className="main-content">
              <MainContent postId={postId}/>
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
