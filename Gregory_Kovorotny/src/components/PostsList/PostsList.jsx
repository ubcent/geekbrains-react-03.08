import './PostsList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Button,
  ButtonGroup,
} from 'reactstrap';

import Post from 'components/Post';

export default class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
      })
    ),
    onLoadPosts: PropTypes.func.isRequired,
  }

  static defaultProps = {
    posts: [],
  }

  handleLoadPosts = (event) => {
    event.preventDefault();
    const { onLoadPosts } = this.props;
    if (typeof onLoadPosts === 'function') {
      onLoadPosts(event.target.name);
    }
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="posts-list">
        {posts.map((post) => <Post {...post}/>)}
        <Row noGutters={false}>
          <Col md="4" className="mx-auto">
            <ButtonGroup className="my-2">
              <Button className="m-1" outline color="primary" onClick={this.handleLoadPosts} name="prev">Newer</Button>
              <Button className="m-1" outline color="primary" onClick={this.handleLoadPosts} name="next">Older</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
