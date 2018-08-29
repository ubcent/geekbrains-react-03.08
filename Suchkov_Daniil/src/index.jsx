import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';

import Menu from './components/menu';
import Loginform from './components/loginform';
import Content from './components/content';

const menuItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'News',
        href: '/new'
    },
    {
        label: 'Tags',
        href: '/tags'
    },
    {
        label: 'History',
        href: '/history'
    },
]

class App extends Component {
    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <Menu items={menuItems}/>
                        <Loginform/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Content/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))