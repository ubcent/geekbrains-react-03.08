import React from 'react';
import './developer.css';

export class Developer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p onClick={() => alert(new Date())}>
        This app is being created by {this.props.firstName} {this.props.lastName}
      </p>
    );
  }
}
