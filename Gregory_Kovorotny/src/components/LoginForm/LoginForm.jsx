import './LoginForm.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input } from 'reactstrap';

export default class LoginForm extends Component {

  render() {
    return (
      // Buttons лучше в форме оставить и обрабатывать onSubmit?
      // или же в Modal и по клику ТАМ уже собирать данные с Input по id ???
      <div className='login-form'>
        <Form>
          <FormGroup>
            <Label for='userLogin'>Login</Label>
            <Input autoFocus type='text' name='userLogin' id='userLogin' placeholder='Your login' />
          </FormGroup>
          <FormGroup>
            <Label for='userPassword'>Password</Label>
            <Input type='password' name='userPassword' id='userPassword' placeholder='Your password' />
          </FormGroup>
        </Form>
      </div>
    );
  }
}
