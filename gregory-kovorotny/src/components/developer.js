import React from 'react';
import './developer.css';

export class Developer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="developer"
        onClick={() => alert(new Date())}>
        This app is being created by {this.props.firstName} {this.props.lastName}
      </div>
    );
  }
}
