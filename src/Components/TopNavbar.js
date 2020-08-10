import { Navbar, Nav} from 'react-bootstrap';
import Logo from '../Image/logo-tp.jpg';
import React, { Component } from 'react';

export default class TopNavbar extends Component {
    constructor() {
        super();
        this.state = {navClass: 'inv-grad-bg'}
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (event) => {
        if(window.scrollY > window.innerHeight) {
            if(this.state.navClass !== 'nav-scrolled')
                this.setState({navClass: 'nav-scrolled'});
        }
        else if(this.state.navClass !== 'inv-grad-bg') {
            this.setState({navClass: 'inv-grad-bg'});
        }

    };

    render() {
        return (
            <Navbar sticky="top" className={this.state.navClass} expand="lg">
                <Navbar.Brand href="/"><img src={Logo} width={50} height={50} alt=""/><span className="white-text">Software Avenger</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/#about">About</Nav.Link>
                        <Nav.Link href="/#services">Services</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/#contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}