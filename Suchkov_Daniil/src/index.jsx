import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import Menu from './components/menu';
import Loginform from './components/loginform';
import Content from './components/content';
import CommentsFoarm from './components/CommentsFoarm';
import Commentslist from './components/Commentslist';

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
    constructor(props){
        super(props);

        this.state = { 
            comments: [],
        }
    }

    formSubmit = (comment) => {
        const { comments } = this.state;

        this.setState({
            comments: comments.concat({comment}),
        })
    }

    render(){
        const { comments } = this.state;

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
                <Commentslist comments={comments}/>
                <CommentsFoarm onSubmit={this.formSubmit}/>
            </Container>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))