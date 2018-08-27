import React, {Component} from 'react';
import {connect} from 'react-redux';

import {load} from "actions/users";

import UsersList from '../components/UsersList';

class UsersContainer extends Component {
    componentDidMount() {
        this.props.loadUsers();
    }

    render() {
        const {users, loading} = this.props;
        return (
            !loading && users ? <UsersList users={users}/> : 'Loading...'
        );
    }
}

function mapToStateProps(state, props) {
    return {
        ...props,
        users: state.users.entities,
        loading: state.users.loading,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        loadUsers: () => load(dispatch),
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(UsersContainer)