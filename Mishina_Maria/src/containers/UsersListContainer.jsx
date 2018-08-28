import React, {PureComponent} from 'react';
import UsersList from 'components/UsersList';

    export  default class UsersListContainer extends PureComponent {

        constructor(props){
            super(props);
            this.state = {
                users: [],
                loading: true,
            }
        }

        componentDidMount() {
            fetch(`http://jsonplaceholder.typicode.com/users`)
                .then((response) => response.json())
                .then((users) => {
                    this.setState({
                        users: users.map((user) => ({
                            id: user.id,
                            name: user.name,
                            username: user.username,
                            email: user.email,
                            phone: user.phone,
                            website: user.website,
                        })),
                        loading: false,
                    })
                })
        }

        render () {
            const {users,loading} = this.state;
            return(
                loading ? 'Loading' : <UsersList users={users}/>
            )
    }
}