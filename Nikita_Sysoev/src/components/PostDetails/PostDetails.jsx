import './PostDetails.scss';

import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class PostDetails extends Component {
    static propTypes = {};
    static defaultProps = {};

    render() {
        const {title, text} = this.props;
        return (
            <div className="PostDetails">
                <h1 className="mt-4">{title}</h1>
                <p className="lead">
                    by <a href="#"> Start Bootstrap</a>
                </p>
                <hr/>
                <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>
                <hr/>
                <p>
                    {text}
                </p>
            </div>
        )
    }
}