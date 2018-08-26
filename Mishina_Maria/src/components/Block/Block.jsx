import './Block.scss';

import React, {Component} from 'react';
import { Container, Row, Col} from 'reactstrap';

export default class Block extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return(
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
        );
    }
}
