import React, { Component, Fragment } from 'react';

import BloggersList from 'components/BloggersList';

export default class BloggersListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      bloggers: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=8')
      .then((response) => response.json())
      .then((bloggers) => {
        this.setState({
          loading: false,
          bloggers: bloggers.map((blogger) => ({
            id: blogger.id,
            name: blogger.name,
            username: blogger.username,
            posts: Array(8 - blogger.id).fill(0).map((item, idx) => blogger.id * 10 + idx),
            comments: Array(blogger.id - 1).fill(0).map((item, idx) => blogger.id * 10 + idx),
          })),
        })
      });
  }
  render() {
    const { loading, bloggers } = this.state;

    return (
      <Fragment>
        {loading ? 'loading' : <BloggersList bloggers={bloggers} />}
      </Fragment>
    );
  }
}
