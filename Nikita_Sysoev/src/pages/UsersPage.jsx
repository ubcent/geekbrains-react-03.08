import React, {Component} from 'react';
import UsersContainer from '../containers/UsersContainer';
import Pagination from '../components/Pagination';
import Wrapper from '../components/Wrapper';
import Aside from '../components/Aside';

export default class UsersPage extends Component {
    render() {
        return (
            <div className="content">
                <Wrapper>
                    <div className="space-between">
                        <div className="col-lg-8">
                            <h1 className="my-4">
                                Users
                            </h1>
                            <UsersContainer/>
                            <Pagination/>
                        </div>
                        <div className="col-md-4">
                            <Aside/>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}
