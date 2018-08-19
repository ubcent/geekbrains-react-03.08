import './Post.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  CardImg,
  Button,
} from 'reactstrap';

export default class Post extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    author: PropTypes.string.isRequired,
  }

  render() {
    const { id, imgUrl, title, body, date, author } = this.props;
    const postUrl = '#/post/' + id;

    return (
      <div className="post">
        <Card>
          <CardImg top width="100%" src={imgUrl} alt="post img 750x300" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>
              {body}
          </CardText>
          <a href={postUrl}><Button color="primary">Read More ...</Button></a>
          </CardBody>
          <CardFooter className="text-muted">
            Posted on {date.toISOString()} by <a href="#">{author}</a>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
