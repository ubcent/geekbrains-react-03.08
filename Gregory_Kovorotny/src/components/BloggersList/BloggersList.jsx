import './BloggersList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
} from 'reactstrap';

import Blogger from 'components/Blogger';

export default class BloggersList extends Component {
  static propTypes = {
    bloggers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        posts: PropTypes.arrayOf(PropTypes.number),
        comments: PropTypes.arrayOf(PropTypes.number),
      })
    ),
  }

  static defaultProps = {
    bloggers: [],
  }

  render() {
    const { bloggers } = this.props;
    
    return (
      <Table hover className="bloggers-list">
        <thead>
          <tr>
            <th>Blogger name</th>
            <th>Login username</th>
            <th>Posts written</th>
            <th>Comments made</th>
          </tr>
        </thead>
        <tbody>
          {bloggers.map((blogger) => <Blogger {...blogger} />)}
        </tbody>
      </Table>
    );
  }
}
