import React, {PureComponent} from 'react';

import BlogsList from 'components/BlogsList';

export default class BlogsListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      blogs: [],
      page: 1,
    }
  }

  loadMore = () => {
    const {page} = this.state;
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((blogs) => {
        this.setState((prevState) => ({
          blogs: prevState.blogs.concat(
            blogs.map((blog) => ({id: blog.id, title: blog.title, body: blog.body}))
          ),
          page: prevState.page + 1,
          loading: false,
        }));
      });
  }

  componentDidMount() {
    this.loadMore();
  }

  handleLoadMore = (event) => {
    this.loadMore();
    event.preventDefault();
  }

  render() {
    const {blogs, loading} = this.state;

    return (
      loading ? 'Loading' : <BlogsList onLoadMore={this.handleLoadMore} blogs={blogs} />
    )
  }
}
