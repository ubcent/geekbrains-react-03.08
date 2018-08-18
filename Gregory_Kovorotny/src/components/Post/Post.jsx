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
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div className="post">
        <Card>
          <CardImg top width="100%" src="http://placehold.it/750x300.png" alt="post img 750x300" />
          <CardBody>
            <CardTitle>Post Title</CardTitle>
            <CardText>
              Eu fore familiaritatem ab aliquip labore appellat nescius ita elit senserit qui
              quem minim ab ubi fugiat elit amet expetendis.
          </CardText>
          <a href="#"><Button color="primary">Read More ...</Button></a>
          </CardBody>
          <CardFooter className="text-muted">
            Posted on January 1, 2018 by <a href="#">Blog Author</a>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
