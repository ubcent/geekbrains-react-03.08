import './Home.scss';

import React, {Component,Fragment} from 'react';
import {Container, Row, Col} from 'reactstrap';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <header className="masthead" style={{backgroundImage: `url('./img/about-bg.jpg')`}}>
                    <div className="overlay"/>
                    <Container>
                        <Row>
                            <Col className="col-lg-8 col-md-10 mx-auto">
                                <div className="page-heading">
                                    <h1>About me</h1>
                                    <span className="subheading">This is what I do.</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </header>
                <Container>
                    <Row>
                        <Col className="col-lg-8 col-md-10 mx-auto">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae deserunt dignissimos
                                distinctio doloribus explicabo id incidunt inventore laboriosam nam, natus necessitatibus
                                provident quod reiciendis repellat sint sunt tempore voluptas!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae deserunt dignissimos
                                distinctio doloribus explicabo id incidunt inventore laboriosam nam, natus necessitatibus
                                provident quod reiciendis repellat sint sunt tempore voluptas!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae deserunt dignissimos
                                distinctio doloribus explicabo id incidunt inventore laboriosam nam, natus necessitatibus
                                provident quod reiciendis repellat sint sunt tempore voluptas!</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}