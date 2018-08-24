import React, {Component} from 'react';
import { Container, Row, Col} from 'reactstrap';

import Post from '../Post';
import Widgets from '../Widgets';

export default class Layout extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="lg-8"><Post/></Col>
                    <Col xs="md-4"><Widgets/></Col>
                </Row>
            </Container>
        );
    }
}