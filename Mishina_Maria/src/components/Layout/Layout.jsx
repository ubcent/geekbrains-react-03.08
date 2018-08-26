import React, {Component,Fragment} from 'react';

import Header from '../Header';
import Block from '../Block';

export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Block/>
            </Fragment>
        );
    }
}