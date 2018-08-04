import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import ContactMe from './ContactMe'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/contact-me'>Contact Me</Link>
          </li>
          <Route exact path='/' component={Home} />
          <Route path='/contact-me' component={ContactMe} />
        </div>
      </Router>
    );
  }
}

export default Routes;
