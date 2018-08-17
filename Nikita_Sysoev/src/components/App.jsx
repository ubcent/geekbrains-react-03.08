import './App.css';

import React, {Component} from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => this.showMessage(), 1000);
    }

    showMessage(){
        alert('Welcome to React Blog');
    }
}