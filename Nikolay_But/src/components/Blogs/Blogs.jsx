import './Blogs.scss';

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Blog from 'components/Blog';

export default class Blogs extends Component {

  static propTypes = {
    blogs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isREquired,
      })
    )
  }

  static defaultProps = {
    blogs: [],
  }

  render() {
    const {blogs, onLoadMore} = this.props;

    return (
      <Fragment>
        <div className="Blogs">
          {blogs.map((blog) =>
            <div class="card top-15" key={blog.id}>
              <div class="card-body">
                <h5 class="card-title">ID {blog.id}: <Link to={`/blogs/${blog.id}`}>{blog.title}</Link></h5>
                <p class="card-text">{blog.body}</p>
              </div>
            </div>
          )}
        </div>
        <button onClick={onLoadMore}>Load More</button>
      </Fragment>
    );
  }
}
