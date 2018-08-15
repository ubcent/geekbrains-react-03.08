import React, {Component} from "react";

export default class Menu extends Component {
    render() {
        return <div  style={{display: "flex"}}>
            <div className="navbar-header">
                <a href="#" className="navbar-brand">Blog</a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </div>
        </div>
    }
}