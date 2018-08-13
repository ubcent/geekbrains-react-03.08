import './App.css';

import React, {Component} from "react";

import Header from "./Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}