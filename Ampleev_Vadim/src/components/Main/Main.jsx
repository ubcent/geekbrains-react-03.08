import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import CommentsListContainer from 'containers/CommentsListContainer';
import CommentsForm from 'components/CommentsForm';

export default class Main extends Component {
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
        })
    }

    render() {
        const { comments } = this.state;
        return (
            <Fragment>
                <CommentsListContainer comments={comments}/>
                <CommentsForm onSubmit={this.handleSubmit}/>
            </Fragment>
        )
    }
}