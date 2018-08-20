import './Pagination.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Pagination extends Component {
    static propTypes = {};
    static defaultProps = {};
    
    render() {
        return (
        <ul className="Pagination">
            <li className="page-item">
                <a className="page-link" href="#">← Older</a>
            </li>
            <li className="page-item" disabled>
                <a className="page-link" href="#">Newer →</a>
            </li>
        </ul>
        )
    }
}