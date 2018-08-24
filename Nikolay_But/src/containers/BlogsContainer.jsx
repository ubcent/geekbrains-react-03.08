import React, { PureComponent } from 'react';

import Blogs from 'components/Blogs';

export default class BlogsContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      blogs: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          blogs: response.map((blog) => ({ id: blog.id, author: blog.title, text: blog.body })),
          loading: false,
        })
      });
  }

  render() {
    const { blogs, loading } = this.state;

    return (
      loading ? 'Loading' : <Blogs blogs={blogs} />
    )
  }
}
