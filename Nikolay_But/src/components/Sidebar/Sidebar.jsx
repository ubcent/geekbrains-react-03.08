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
        <div className="card card-margin-top">
          <div className="card-header">Categories</div>
          <div className="card-body">
            <ul className="list-group list-group-flush">{items.map((item) => <li className="list-group-item" key={item.id}><a className="card-text" href={item.href}>{item.label}</a></li>)}</ul>
          </div>
        </div>
      </div>
    );
  }
}



