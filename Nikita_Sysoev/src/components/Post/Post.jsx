import './Post.scss';

import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Post extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };
    static defaultProps = {};

    render() {
        const {title, text, id} = this.props;
        return (
            <div className="Post">
                <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p className="card-text">
                        {text}
                    </p>
                    <Link to={`/blog/${id}`}>
                        <Button color="primary">Read More →</Button>
                    </Link>
                </div>
                <div className="card-footer text-muted">
                    Posted on January 1, 2017 by
                </div>
            </div>
        )
    }
}