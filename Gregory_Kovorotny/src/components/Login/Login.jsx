import './Login.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback } from 'reactstrap';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      userLogin: '',
      userPassword: '',
      userLoginError: false,
      userPasswordError: false,
    };

    this.toggle = this.toggle.bind(this);
    this.login = this.login.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  login() {
    const { userLogin, userPassword } = this.state;
    if (userLogin === 'user' && userPassword === '1234') {
      this.setState({ userLoginError: false, userPasswordError: false });
      this.toggle();
    } else {
      this.setState({ userLoginError: true, userPasswordError: true });
      setTimeout(() => this.setState({ userLoginError: false, userPasswordError: false }), 2000);
    }
  }

  render() {
    const className = 'login';
    return (
      // решил не выделять LoginForm в отдельный компонент
      // чтобы проще было работать с Input-ами
      <div className={className}>
        <Button outline color="secondary" onClick={this.toggle}>Login</Button>
        <Modal autoFocus={false} centered isOpen={this.state.modal} toggle={this.toggle} className={className}>
          <ModalBody>
            <div className='login-form'>
              <Form>
                <FormGroup>
                  <Label for='userLogin'>Login</Label>
                  <Input
                    autoFocus type='text' name='userLogin' id='userLogin' placeholder='Your login'
                    invalid={this.state.userLoginError}
                    onChange={(e) => this.setState({ userLogin: e.target.value })}
                  />
                  <FormFeedback>User name doesn't exist!</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for='userPassword'>Password</Label>
                  <Input
                    type='password' name='userPassword' id='userPassword' placeholder='Your password'
                    invalid={this.state.userPasswordError}
                    onChange={(e) => this.setState({ userPassword: e.target.value })}
                  />
                  <FormFeedback>Wrong password!</FormFeedback>
                </FormGroup>
              </Form>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.login}>Login</Button>
            <Button onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
