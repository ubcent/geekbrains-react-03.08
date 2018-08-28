import './User.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class User extends Component {
    static propTypes = {};
    static defaultProps = {};
    
    render() {
        const {obj} = this.props;
        return (
        <tr className="User">
            {
                Object.values(obj).map((value, index) => {
                    return <td key={index}>{value}</td>
                })
            }
        </tr>
        )
    }
}