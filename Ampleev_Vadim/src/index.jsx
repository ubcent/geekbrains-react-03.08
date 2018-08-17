import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu';
import Wrapper from './components/Wrapper';

const menuItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'News',
        href: '/news'
    }
]
class App extends Component {
    render() {
        return (
            <div>
                <Wrapper>
                    <div>Hello world!</div>
                    <Menu size="big"/>
                </Wrapper>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));