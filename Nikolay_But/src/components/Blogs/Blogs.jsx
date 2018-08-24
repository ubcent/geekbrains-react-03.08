import './Blogs.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Blogs extends Component {

  static propTypes = {
    blogs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isREquired,
      })
    )
  }

  static defaultProps = {
    blogs: [],
  }

  render() {
    const { blogs } = this.props;

    return (
      <ul className="Blogs">
        {blogs.map((blog) => <li key={blog.id}>
          <div className="Comment">
            <h4>{blog.author}</h4>
            <div>{blog.text}</div>
          </div>
        </li>)}
      </ul>
    );
  }
}
