import './App.css';

import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';

import SecondLayout from '../layouts/SecondLayout';
import BlogPage from '../pages/BlogPage';
import CommentsPage from '../pages/CommentsPage';
import PageNotFound from '../pages/PageNotFound';
import UsersPage from '../pages/UsersPage';
import IndexLayout from '../layouts/IndexLayout';
import ParentLayout from '../layouts/ParentLayout';

export default class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route component={ParentLayout}>
                    <Route path="/" component={IndexLayout}/>
                    <Route component={SecondLayout}>
                        <Route path="/blog" component={BlogPage}/>
                        <Route path="/comments" component={CommentsPage}/>
                        <Route path="/users" component={UsersPage}/>
                        <Route path="*" component={PageNotFound}/>
                    </Route>
                </Route>
            </Router>
        )
    }
}