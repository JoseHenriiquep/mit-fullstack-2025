import logo from '../assets/logo.png'
import React, { useState } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavbarBrand, NavItem, NavLink, Container } from "reactstrap"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <>
            <Navbar color='dark' dark expand="md">
                <NavbarBrand>
                <img src={logo} width="50px" alt="logo" style={{paddingRight: "5px"}}/>
                MIT Full Stack 2025
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/users">
                                Users
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/feedback">
                                Feedback
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>  
            </Navbar>
        </>
    )
};

export default Header;