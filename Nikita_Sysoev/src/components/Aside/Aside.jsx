import './Aside.scss';

import React, {Component} from 'react';
import Login from '../Login';
import Search from '../Search';
import Categories from '../Categories';

export default class Aside extends Component {
    render() {
        return (
            <div className="Aside">
                <Login/>
                <Search/>
                <Categories/>
            </div>
        )
    }
}