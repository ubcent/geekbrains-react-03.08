import './Pagination.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Pagination extends Component {
    static propTypes = {};
    static defaultProps = {};
    
    render() {
        const {loadPrev, loadNext} = this.props;
        return (
        <ul className="Pagination">
            <li className="page-item">
                <a className="page-link" onClick={loadPrev}>← Older</a>
            </li>
            <li className="page-item">
                <a className="page-link" onClick={loadNext}>Newer →</a>
            </li>
        </ul>
        )
    }
}