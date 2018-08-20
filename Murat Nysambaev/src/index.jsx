import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu';
import Main from './components/Main';


class App extends Component {
    render () {
        return (
            <div>
                <Main/>
            </div>
        )
    }

}
ReactDOM.render(<App/>, document.getElementById('app'));