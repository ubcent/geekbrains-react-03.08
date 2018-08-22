
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu';
import Wrapper from './components/Wrapper';


const menuItems = [{
    label: 'Home',
    href: '/'
},
    {
        label: 'News',
        href: '/new'
    },
    {
        label: 'About',
        href: '/new'
    },
    {
        label: 'Contacts',
        href: '/new'
    },
];
class App extends Component {

    render() {
        return (
            <Fragment>
            <div>
                <div id="menu"><Menu size="small" items={menuItems}/></div>
            <Wrapper> <div>Hello world</div></Wrapper>

            </div>
            </Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));