import 'bootstrap/dist/css/bootstrap.css';
import './Sidebar.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

export default class Sidebar extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({id: PropTypes.number, href: PropTypes.string, label: PropTypes.string})
    ),
  }

  static defaultProps = {
    items: []
  }

  render() {
    const {items} = this.props;

    return (
      <div className="sidebar">
        <div class="card card-margin-top">
          <div class="card-header">Categories</div>
          <div class="card-body">
            <ul class="list-group list-group-flush">{items.map((item) => <li class="list-group-item"><a class="card-text" href={item.href} key={item.id}>{item.label}</a></li>)}</ul>
          </div>
        </div>
      </div>
    );
  }
}



