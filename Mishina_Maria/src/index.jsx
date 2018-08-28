import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import routes from './routes';

import NavBar from 'components/NavBar';
import Footer from 'components/Footer';

class App extends Component {

    render() {

        return(
            <BrowserRouter>
                <Fragment>
                    <NavBar/>
                    <Switch>
                        {routes.map((route, idx) => <Route key={idx} {...route} />)}
                    </Switch>
                    <Footer/>
                </Fragment>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));