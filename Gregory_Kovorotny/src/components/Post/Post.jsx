import './Post.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
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
    const postUrl = '/post/' + id;

    return (
      <div className="post">
        <Card>
          <CardImg top width="100%" src={imgUrl} alt="post img 750x300" />
          <CardBody>
            <CardTitle>{title}: id {id}</CardTitle>
            <CardText>
              {body}
          </CardText>
          <Link to={postUrl}><Button color="primary">Read More ...</Button></Link>
          </CardBody>
          <CardFooter className="text-muted">
            Posted on {moment(date).format('YYYY-MM-DD')} by <a href="#">{author}</a>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
