import './Menu.css';
import classNames from 'classnames';

import React, {Component} from 'react';
import Proptypes from 'prop-types';


export default class Menu extends Component {
    static propTypes = {
        items:Proptypes.arrayOf(
            Proptypes.shape({href: Proptypes.string, label: Proptypes.string})
        ),
        size: Proptypes.oneOf(['big','small']),
    }

    static defaultProps = {
        size: 'small',
        items: [],
    }

    render() {
        const {items, size} = this.props;
        const className = classNames('menu', {
            'menu-big': size === 'big',
            'menu-small': size === 'small',
        })

        return(
            <ul className = {className}>{items.map((item) => <li><a href={item.href}>{item.label}</a></li>)}</ul>
        )
    }
}