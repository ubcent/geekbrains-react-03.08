import './Users.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Users extends Component {

  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      })
    )
  }

  static defaultProps = {
    users: [],
  }

  render() {
    const { users } = this.props;

    return (
      <ol className="Users">
        {users.map((user) => <li key={user.id}>
          {user.username
          /* <div className="User">
            <h4>{user.id}</h4>
            <h5>{user.name}</h5>
            <h6>{user.username}</h6>
            <p>{user.email}</p>
          </div> */}
        </li>)}
      </ol>
    );
  }
}
