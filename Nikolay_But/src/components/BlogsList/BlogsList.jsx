import './BlogsList.scss';

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default class BlogsList extends PureComponent {
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
        <div className="BlogsList">
          {blogs.map((blog) =>
            <div className="card top-15" key={blog.id}>
              <div className="card-body">
                <h5 className="card-title">ID {blog.id}: <Link to={`/blogs/${blog.id}`}>{blog.title}</Link></h5>
                <p className="card-text">{blog.body}</p>
              </div>
            </div>
          )}
        </div>
        <Button color="secondary" size="lg" block onClick={ onLoadMore }>Load More</Button>
      </Fragment>
    );
  }
}
