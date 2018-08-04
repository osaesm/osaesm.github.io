import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about-me'>About Me</Link>
            </li>
          </ul>
          <Route exact path='/' component={Home} />
          <Route path='/about-me' component={AboutMe} />
        </div>
      </Router>
    );
  }
}

export default Routes;
