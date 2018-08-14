import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu';
import Wrapper from './components/Wrapper';

const menuItems = [
    {
        label:'Home',
        href: '/'
    },
    {
        label:'News',
        href:'/new'
    },
];

class App extends Component {
    render() {
        return(
            <div>
                <Menu size="small" items={menuItems} />

                <Wrapper>
                    <div>Hello World!</div>
                </Wrapper>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));