import './UsersList.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import User from '../User';
import {Table} from 'reactstrap';

export default class UsersList extends Component {
    static propTypes = {};
    static defaultProps = {};

    reverse = () => {
        this.props.reverse();
    };

    render() {
        const {users} = this.props;
        return (
            <Table className="UsersList" bordered>
                <thead>
                <tr onClick={this.reverse} style={{cursor: 'pointer'}}>
                    {
                        Object.keys(users[0]).map((item, index) => {
                            return <th key={index}>{item}</th>
                        })
                    }
                </tr>
                </thead>
                <tbody>
                {
                    users.map((obj, index) => {
                        return <User key={index} obj={obj}/>
                    })
                }
                </tbody>
            </Table>
        )
    }
}