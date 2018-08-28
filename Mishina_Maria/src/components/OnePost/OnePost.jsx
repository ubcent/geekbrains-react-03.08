import './OnePost.scss';
import React, {PureComponent,Fragment} from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';

import Widgets from '../Widgets';

export default class OnePost extends PureComponent {
    static propTypes = {
        userId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    };

    static defaultProps = {
        onePost: [],
    };
  
    render() {
        const {title,body} = this.props;
        return(
            <Fragment>
                <Container className="onePost">
                    <Row>
                        <Col xs="lg-8">
                            <Fragment>
                            <h1 className="mt-4">{title}</h1>
                            <p className="lead">by <a href="https://getbootstrap.com/">Start Bootstrap</a></p>
                            <hr/>
                            <p>Posted on January 1, 2018 at 12:00 PM</p>
                            <hr/>
                            <img src="./img/1.jpg" alt="image" className="img-fluid rounded"/>
                            <hr/>
                            <p>{body}</p>
                            <hr/>
                            {/*пока не понимаю как вытащить имя автора поста*/}
                        </Fragment></Col>
                        <Col xs="md-4"><Widgets/></Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }  
}
    