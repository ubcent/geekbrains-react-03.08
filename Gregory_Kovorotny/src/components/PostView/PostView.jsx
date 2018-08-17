import './PostView.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentsList from 'components/CommentsList';
import CommentForm from 'components/CommentForm';

export default class PostView extends Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }
  }

  handleSubmit = (comment) => {
    const { comments } = this.state;

    this.setState({
      comments: comments.concat([comment]),
    });
  }

  render() {
    const { comments } = this.state;

    return (
      <div className="post-view mt-4">
        <h1>Post Title</h1>
        <hr />
        <p>Posted on Jan 1, 2018 at 12:00 PM</p>
        <hr />
        <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="post image 900x300" />
        <hr />
        <p>
          Ullamco nisi culpa qui aute. Ut noster quo cillum, duis nostrud ex
          reprehenderit, velit quibusdam qui quibusdam, o aute quem irure incurreret. Quae
          proident quo arbitrantur hic ne fugiat fore ad nostrud, non do dolore cernantur
          ita ubi illum quamquam cernantur.
        </p>
        <p>
          Ullamco nulla qui nescius transferrem. Qui quae ea quis, appellat dolor nostrud
          quo excepteur quorum quis aut anim, amet mentitum aut praetermissum. Hic magna
          aliqua et ingeniis ne ipsum laboris eu nescius.
        </p>
        <p>
          Ubi noster ullamco si quid est mentitum, de labore aliqua id mentitum nam fugiat
          voluptate voluptate in noster quamquam offendit, se anim esse elit quamquam,
          anim appellat te sempiternum an amet sed voluptate ne summis. Elit ullamco
          possumus, irure iis arbitror qui amet.
        </p>
        <p>
          Aliqua ita singulis de tamen quo a mandaremus do deserunt, eu aliqua fabulas
          despicationes, sunt incididunt ea incurreret. Ubi cupidatat adipisicing et
          possumus ad velit litteris. Summis in iudicem, senserit quo nulla id anim se
          laborum, ullamco quis quid ingeniis fore.
        </p>
        <p>
          Dolor eiusmod excepteur aut noster pariatur instituendarum. Nisi officia ubi
          malis nulla, id tamen summis illum offendit. Quo minim admodum litteris do si
          legam possumus.
        </p>
        <hr />
        <CommentForm onSubmit={this.handleSubmit} />
        <CommentsList comments={comments}/>
      </div>
    );
  }
}
