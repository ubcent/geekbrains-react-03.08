import './ArticlesList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from "components/Article";

export default class ArticlesList extends Component {
  static propTypes = {
      articles: PropTypes.arrayOf(
        PropTypes.shape({
          article_id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          subtitle: PropTypes.string,
          text: PropTypes.string
        })
      )
  };

  static defaultProps = {};

  render() {

    const {articles} = this.props;

    return (
      <div className="ArticlesList">
          {articles.map((article) => <div><Article {...article}/></div>)}
      </div>
    );
  }
}
  