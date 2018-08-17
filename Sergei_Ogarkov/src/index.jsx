import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

import Navi from './components/Navi';
import LeftNav from './components/LeftNav';
import Wrapper from './components/Wrapper';

const menuItems = [
    {
        label: 'Sport',
        href: '/sport'
    },
    {
        label: 'News',
        href: '/new'
    },
    {
        label: 'Fasion',
        href: '/fasion'
    },
];


const leftNavItems = [
    {
        label: 'Recent',
        href: '/recent'
    },
    {
        label: 'Friends',
        href: '/friends'
    },
    {
        label: 'Recommended',
        href: '/recommended'
    },
];


class App extends Component {
    render() {
        return (
            <div>
                <Wrapper>
                    <Navi  items={menuItems}/>
                    <Row>
                        <Col xs="2"><LeftNav  items={leftNavItems}/></Col>
                        <Col xs="10">Articles</Col>
                    </Row>
                </Wrapper>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));