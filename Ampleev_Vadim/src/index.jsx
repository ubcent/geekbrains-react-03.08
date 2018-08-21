import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Wrapper>
                    <Header/>
                    <Main/>
                    <Footer/>
                </Wrapper>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));