import './Login.scss';

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
  FormFeedback,
} from 'reactstrap';


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
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleLogin = () => {
    const { userLogin, userPassword } = this.state;
    if (userLogin === 'user' && userPassword === '1234') {
      this.setState({
        userLoginError: false,
        userPasswordError: false,
        userLogin: '',
        userPassword: '',
      });
      this.toggle();
    } else {
      this.setState({ userLoginError: true, userPasswordError: true });
      setTimeout(() => this.setState({ userLoginError: false, userPasswordError: false }), 2000);
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
            <div className="login-form">
              <Form>
                <FormGroup>
                  <Label for="userLogin">Login</Label>
                  <Input
                    id="userLogin" type="text" name="userLogin" placeholder="Your login" value={this.state.userLogin}
                    autoFocus
                    invalid={this.state.userLoginError}
                    onChange={this.handleChange}
                  />
                  <FormFeedback>User name doesn't exist!</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="userPassword">Password</Label>
                  <Input
                    id="userPassword" type="password" name="userPassword" placeholder="Your password" value={this.state.userPassword}
                    invalid={this.state.userPasswordError}
                    onChange={this.handleChange}
                  />
                  <FormFeedback>Wrong password!</FormFeedback>
                </FormGroup>
              </Form>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleLogin}>Login</Button>
            <Button onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
