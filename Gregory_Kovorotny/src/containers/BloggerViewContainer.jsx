import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import BloggerView from 'components/BloggerView';

export default class BloggerViewContainer extends Component {
  static propTypes = {
    filterId: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      blogger: {},
    }
  }

  componentDidMount() {
    const userId = this.props.filterId;

    fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
      .then((response) => response.json())
      .then((blogger) => {
        this.setState({
          loading: false,
          blogger: {
            id: blogger[0].id,
            name: blogger[0].name,
            username: blogger[0].username,
            image: 'http://placehold.it/75x75.png',
            email: blogger[0].email,
            phone: blogger[0].phone,
            address: blogger[0].address,
          },
        })
      });
  }

  render() {
    const { loading, blogger } = this.state;

    return (
      <Fragment>
        {loading ? 'loading' : <BloggerView {...blogger} />}
      </Fragment>
    );
  }
}
