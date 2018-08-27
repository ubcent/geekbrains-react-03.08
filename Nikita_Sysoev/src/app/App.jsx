import 'cssreboot/reboot.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store/store';

import BlogPage from '../pages/BlogPage';
import CommentsPage from '../pages/CommentsPage';
import PageNotFound from '../pages/PageNotFound';
import UsersPage from '../pages/UsersPage';
import HomePage from '../pages/HomePage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PostDetailsPage from '../pages/PostDetailsPage';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="app">
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/blog" component={BlogPage}/>
                            <Route exact path="/comments" component={CommentsPage}/>
                            <Route exact path="/users" component={UsersPage}/>
                            <Route exact path="/blog/:id" component={PostDetailsPage}/>
                            <Route exact path="*" component={PageNotFound}/>
                        </Switch>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}