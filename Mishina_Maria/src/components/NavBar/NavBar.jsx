import React, {Component,Fragment} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container} from 'reactstrap';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Fragment>
                <Navbar expand="lg" dark color="dark" fixed="top" >
                    <Container>
                        <NavbarBrand href="/">THE BLOG PLACE</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}  data-toggle="collapse" data-target="#navbarResponsive"
                                       aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"/>
                        <Collapse isOpen={this.state.isOpen} navbar id="navbarResponsive">
                            <Nav className="ml-auto" navbar>
                                <NavItem >
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/blog">Blog</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/comments">Comments</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/users">Users</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}