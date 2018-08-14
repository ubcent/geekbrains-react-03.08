
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu';


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
]
class App extends Component {

    render() {
        return (
            <div>
                <Menu size="small"  items={menuItems}/>
            <wrapper> <div>Hello world</div></wrapper>

            </div>

        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));