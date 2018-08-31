import './Post.scss';

import React, {Fragment} from 'react';
import {Card, Button, CardText} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function (props) {
    const {title, body, id,} = props;

    return (
        <Fragment>
            <Card body className="card-body-post">
                <h2 className="card-title">{title}</h2>
                <CardText>{body}</CardText>
                <Link to={`/blog/${id}`}>
                    <Button size="sm">Read More &rarr;</Button>
                </Link>
            </Card>
        </Fragment>
    )
}