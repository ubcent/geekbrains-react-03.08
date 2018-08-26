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
                <Navbar light expand="lg" fixed="top">
                    <Container>
                        <NavbarBrand href="#">Start Bootstrap</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}  data-toggle="collapse" data-target="#navbarResponsive"
                                       aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"/>
                        <Collapse isOpen={this.state.isOpen} navbar id="navbarResponsive">
                            <Nav className="ml-auto" navbar>
                                <NavItem active>
                                    <NavLink href="#">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Blog</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Comments</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Users</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}