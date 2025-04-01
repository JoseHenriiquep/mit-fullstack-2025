import logo from '../assets/logo.png'
import React, { useState } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavbarBrand, NavItem, NavLink, Container, NavbarText } from "reactstrap"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { useCart } from '../hooks/CartContext'
import { useTheme } from '../hooks/ThemeContext';
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const {theme, toggleTheme} = useTheme();

    const {cart, dispatch} = useCart();

    return(
        <>
            <Navbar color={theme} expand="md">
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
                        <NavItem>
                            <NavLink tag={Link} to="/data">
                                Data
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/users-axios">
                                UserAxios
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/icons">
                                Icons
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/store">
                                Store
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/tema">
                                Tema
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText onClick={toggleTheme}>{theme === 'light' ? <FaMoon/> : <FaSun/>}</NavbarText>
                    <NavbarText><FaShoppingCart/> {cart.length}</NavbarText>
                </Collapse>  
            </Navbar>
        </>
    )
};

export default Header;