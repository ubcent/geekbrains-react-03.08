import React, {Component} from 'react';
import { Container, Row, Col, Nav, NavLink } from 'reactstrap';

import Content from '../Content';


export default class Layout extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>&nbsp;</Col>
                </Row>
                <Row>
                    <Col><Content/></Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Nav>
                            <NavLink href="#">Link</NavLink>
                            <NavLink href="#">Link</NavLink>
                            <NavLink href="#">Another Link</NavLink>
                            <NavLink disabled href="#">Disabled Link</NavLink>
                            <NavLink href="#">Another Link</NavLink>
                            <NavLink href="#">Link</NavLink>
                            <NavLink href="#">Link</NavLink>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>&nbsp;</Col>
                </Row>
            </Container>
        );
    }
}