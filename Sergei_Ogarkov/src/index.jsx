import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './components/Menu';
import Wrapper from './components/Wrapper';

const menuItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'News',
        href: '/new'
    },
];

class App extends Component {
    render() {
        return (
            <div>
                <Wrapper>
                    <div>Hello world</div>
                    <Menu size="big" items={menuItems}/>
                </Wrapper>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));