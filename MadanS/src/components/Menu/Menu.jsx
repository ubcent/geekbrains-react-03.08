import './Menu.css';

import React, {Component} from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Menu extends Component {

    render (){
    const { items, size } = this.props;
    const className = classNames('menu', {
        'menu-big' : size === 'big',
        'menu-small' : size === 'small',
    });
/* добавила ключ, но ошибка в консоли об отсутствии ключа все равно есть????*/
        return (

            <ul className={className}>{items.map( (item, index) =>
                <li>
                    <a href={item.href} key={index}>{item.label}</a>
                </li>
            ) }
            </ul>

        );


    }
}



