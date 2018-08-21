import './CommentContainer.scss';

import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';
import CommentsForm from "../CommentsForm";
import CommentsList from "../CommentsList";

export default class CommentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    handleSubmit = (comment) => {
        const {comments} = this.state;

        this.setState({
            comments: comments.concat([comment])
        })
    };

    render() {
        const {comments} = this.state;
        return (
            <Fragment>
                <CommentsForm onSubmit={this.handleSubmit}/>
                <CommentsList comments={comments}/>
            </Fragment>
        )
    }
}