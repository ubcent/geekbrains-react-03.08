import './UsersList.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {reverseList} from 'actions/users';

import User from '../User';
import {Table} from 'reactstrap';

class UsersList extends Component {
    static propTypes = {};
    static defaultProps = {};

    render() {
        const {users, reverseList} = this.props;
        return (
            <Table className="UsersList" bordered>
                <thead>
                <tr style={{cursor: 'pointer'}} onClick={reverseList}>
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

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        reverseList: () => dispatch(reverseList())
    }
}

export default connect(null, mapDispatchToProps)(UsersList);