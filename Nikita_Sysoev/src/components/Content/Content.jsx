import './Content.css';

import React, {Component} from "react";

import Wrapper from "../Wrapper";
import Aside from "../Aside";

export default class Content extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="content">
                <Wrapper>
                    <div className="space-between">
                        {children}
                        <div className="col-md-4">
                            <Aside/>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}