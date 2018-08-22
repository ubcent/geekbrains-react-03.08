import React, {Component} from 'react';
import UsersList from '../components/UsersList';

export default class UsersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/src/json/profiles.json')
            .then((response) => response.json())
            .then((users) => {
                this.setState({
                    users,
                    loading: false,
                })
            });
    }

    reverse = () => {
        this.setState({
            users: this.state.users.reverse(),
        });
    };

    render() {
        const {users, loading} = this.state;
        return (
            loading ? 'Loading...' : <UsersList reverse={this.reverse} users={users}/>
        );
    }
}