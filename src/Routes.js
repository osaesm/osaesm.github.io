import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './Routes.css'
import Home from './Home'
import Projects from './Projects'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Routes extends Component {
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
      <Router>
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Osama Esmail</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href='https://github.com/osaesm/osaesm.github.io/raw/master/Resume.pdf'>Resume</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="projects">Projects</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
        </div>
      </Router>
    );
  }
}

export default Routes;
