import './menu.scss';

import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


export default class Menu extends Component {
    render() {
        const { items } = this.props;

        return (
            <Breadcrumb tag="nav">
                {items.map((item) => <BreadcrumbItem tag="a" href="{item.href}">{item.label}</BreadcrumbItem>)}
            </Breadcrumb>
        );
    }
}