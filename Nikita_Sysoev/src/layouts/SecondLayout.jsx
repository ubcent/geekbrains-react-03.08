import React, {Component} from 'react';

import Content from '../components/Content';

export default class SecondLayout extends Component {
    render() {
        const {children} = this.props;
        return <Content children = {children} />
    }
}