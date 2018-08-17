import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';
import NavBar from './components/NavBar';


class App extends Component {
    render() {
        return(
            <Fragment>
                <NavBar/>
                <Layout/>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));