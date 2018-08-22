import React, {Component} from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default class ParentLayout extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="app">
                <Header/>
                {children}
                <Footer/>
            </div>
        )
    }
}