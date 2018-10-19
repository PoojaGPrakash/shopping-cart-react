import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import './Header.css';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

import Home from '../Home/Home';
import Contactus from '../Contactus/Contactus';
// import Courses from '../Courses/Courses';
import Aboutus from '../Aboutus/Aboutus';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

 
export default class Header extends Component {
    render () {
        return(
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">WebSiteName</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>     
                            <NavItem>                 
                                <Link to="/">Home</Link>
                            </NavItem> 
                            <NavItem> 
                                <Link to="/Contactus">Contact Us</Link>
                            </NavItem> 
                            <NavItem> 
                                <Link to="/Aboutus">About Us</Link>
                            </NavItem> 
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem>Action</MenuItem>
                                <MenuItem>Another action</MenuItem>
                                <MenuItem>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem> 
                                <Link to="/Login">
                                <span className="glyphicon glyphicon-log-in"></span> Login</Link>
                            </NavItem> 
                            <NavItem> 
                                <Link to="/Signup">
                                <span className="glyphicon glyphicon-user"></span> Sign Up</Link>
                            </NavItem> 
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>

                {/* <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/">WebSiteName</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Contactus">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/Courses">Courses</Link>
                            </li>
                            <li>
                                <Link to="/Aboutus">About Us</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                            <li><Link to="/"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        </ul>
                    </div>
                </nav> */}

                <Route path="/" exact component={Home} />
                <Route path="/Contactus" component={Contactus} />
                {/* <Route path="/Courses" component={Courses} /> */}
                <Route path="/Aboutus" component={Aboutus} />
                <Route path="/Login" component={Login}/>
                <Route path="/Signup" component={Signup}/>

            </div>
        );
    }
}