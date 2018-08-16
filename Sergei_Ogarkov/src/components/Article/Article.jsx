import './Article.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Article extends Component {
  static propTypes = {
      article_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      text: PropTypes.string
  };

  static defaultProps = {}

  render() {

    const {article_id, title, subtitle, text} = this.props;

    return (
      <div className="Article" id={article_id}>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
            <CardText>{text}</CardText>
            <Button>More...</Button>
          </CardBody>
        </Card>
        <br/>
      </div>
    );
  }
}
  