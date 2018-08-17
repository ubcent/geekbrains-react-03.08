import './Categories.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from 'reactstrap';

export default class Categories extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(
      PropTypes.shape({ tag: PropTypes.string })
    ),
  }

  static defaultProps = {
    categories: [],
  }

  render() {
    const { categories } = this.props;
    const count = categories.length;
    const categoriesLeft = categories.filter((category, idx) => idx % 2 === 0);
    const categoriesRight = categories.filter((category, idx) => idx % 2 === 1);


    return (
      <div className="categories my-4">
        <Card>
          <CardHeader>
            <h5>Categories</h5>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="6">
                <ul>
                  {categoriesLeft.map((category) => <li><a href="#">{category.tag}</a></li>)}
                </ul>
              </Col>
              <Col lg="6">
                <ul>
                  {categoriesRight.map((category) => <li><a href="#">{category.tag}</a></li>)}
                </ul>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
