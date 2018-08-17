import React, {Component} from "react";

import Wrapper from "../Wrapper";
import AsideMenu from "../AsideMenu/AsideMenu";

export default class Content extends Component {
    render() {
        const menu = {
            title: "Archives",
            items: [
                {href: '#', title: 'March 2014'},
                {href: '#', title: 'February 2014'},
                {href: '#', title: 'January 2014'},
                {href: '#', title: 'December 2013'},
                {href: '#', title: 'November 2013'},
                {href: '#', title: 'October 2013'},
                {href: '#', title: 'September 2013'},
                {href: '#', title: 'August 2013'},
                {href: '#', title: 'July 2013'},
                {href: '#', title: 'June 2013'},
                {href: '#', title: 'May 2013'},
                {href: '#', title: 'April 2013'}
            ]
        };

        return (
            <div className="content">
                <Wrapper>
                    <div className="space-between">
                        <div className="col-sm-8">
                            Content
                        </div>
                        <div className="col-sm-3">
                            <AsideMenu data={menu}/>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}