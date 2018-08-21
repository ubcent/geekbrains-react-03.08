import './AsideMenu.css';

import React, {Component} from "react";

export default class AsideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isOpened: true
        });
    }

    toggle() {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render() {
        const {title, items} = this.props.data;

        const listItem = items.map((item, index) => {
            return <li key={index}>
                <a href={item.href}>{item.title}</a>
            </li>
        });

        return (
            <div className="sidebar-module">
                <div style={{display: 'flex'}}>
                    <h3 className="cursor" onClick={this.toggle.bind(this)}>
                        {title}
                    </h3>
                    <p style={{marginLeft: '13px', marginTop: '24px'}}>
                        {(this.state.isOpened) ? 'Opened' : 'Closed'}
                    </p>
                </div>
                <div className={(this.state.isOpened) ? 'active' : 'noactive'}>
                    <ul className='list-unstyled'>
                        {listItem}
                    </ul>
                </div>
            </div>
        )
    }
}
