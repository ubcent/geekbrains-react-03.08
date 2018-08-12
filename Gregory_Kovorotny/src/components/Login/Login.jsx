import './Login.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter } from 'reactstrap';

import LoginForm from '../LoginForm';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className='login'>
        <Button outline color="secondary" onClick={this.toggle}>Login</Button>
        <Modal centered isOpen={this.state.modal} toggle={this.toggle} className='login'>
          <ModalBody><LoginForm /></ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>Login</Button>
            <Button onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
