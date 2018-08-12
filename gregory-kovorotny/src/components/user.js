import React from 'react';
import './user.css';

export class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user">Hi, {this.props.firstName} {this.props.lastName}</div>
    );
  }
}
