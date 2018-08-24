import React, { PureComponent } from 'react';

import Users from 'components/Users';

export default class UsersContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      users: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          users: users.map((user) => ({ id: user.id, name: user.name, username: user.username, email: user.email })),
          loading: false,
        })
      });
  }

  render() {
    const { users, loading } = this.state;

    return (
      loading ? 'Loading' : <Users users={users} />
    )
  }
}
