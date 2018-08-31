import React, { PureComponent } from 'react';

import Blog from 'components/Blog';

export default class BlogContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      blog: {},
    }
  }

  componentDidMount() {
    const {match} = this.props;
    fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then((response) => response.json())
      .then((blog) => {
        this.setState({
          loading: false,
          blog,
        });
      });
  }

  render() {
    const { blog, loading } = this.state;
    return (
      loading ? 'Loading blog' : <Blog id={blog.id} title={blog.title} body={blog.body} />
    )
  }
}