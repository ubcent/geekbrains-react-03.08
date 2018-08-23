import './BloggerView.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap';

export default class BloggerView extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
    }),
  }

  static defaultProps = {}

  render() {
    const { id, name, username, image, email, phone, address } = this.props;

    return (
      <div className="blogger-view">
        <Col md="6" className="mx-auto">
          <Card>
            <CardImg top width="75px" src={image} alt="blogger avatar" />
            <CardBody>
              <CardTitle>Blogger Profile</CardTitle>
              <CardSubtitle>{id}: {name} - {username}</CardSubtitle>
              <CardText>E-mail: {email}</CardText>
              <CardText>Phone: {phone}</CardText>
              <CardText>City: {address.city}</CardText>
              <Link to="/bloggers"><Button color="primary">Back to bloggers list</Button></Link>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}
