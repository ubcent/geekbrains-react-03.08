import './Search.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from 'reactstrap';

export default class Search extends Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div className="search my-4">
        <Card>
          <CardHeader>
            <h5>Search</h5>
          </CardHeader>
          <CardBody>
            <InputGroup>
              <Input type="text" name="search" placeholder="Search for..." />
              <InputGroupAddon addonType="append"><Button>Go!</Button></InputGroupAddon>
            </InputGroup>
          </CardBody>
        </Card>
      </div>
    );
  }
}
