import './PostDetails.scss';

import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class PostDetails extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <div className="PostDetails">
                <h1 className="mt-4">Post Title</h1>
                <p className="lead">
                    by <a href="#"> Start Bootstrap</a>
                </p>
                <hr/>
                <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>
                <hr/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo,
                    aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                    recusandae? Qui, necessitatibus, est!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas
                    placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem
                    obcaecati?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam
                    sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum
                    minus inventore?

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos
                    iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat.
                    Temporibus, voluptatibus.

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis
                    unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat
                    perspiciatis. Enim, iure!
                </p>
            </div>
        )
    }
}