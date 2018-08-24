import React, {Component} from 'react';
import UsersContainer from '../containers/UsersContainer';
import Pagination from '../components/Pagination/Pagination';

export default class UsersPage extends Component {
    render() {
        return (
            <div className="col-lg-8">
                <h1 className="my-4">
                    Users
                </h1>
                <UsersContainer/>
                <Pagination/>
            </div>
        )
    }
}
