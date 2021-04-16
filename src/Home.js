import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container fluid className='center-everything'>
          <h1 className="display-3">Osama Esmail</h1>
          <figure>
            <img className='circle-pic' alt='Me in front of a blossoming tree' src='Me.jpg' />
          </figure>
          <div className="lead">
            I'm a senior at the University of Illinois at Urbana-Champaign studying computer science.
          </div>
          <div className="lead">
            I also study math as a second major and keep tabs on new, interesting technologies.
          </div>
          <div className="lead">
            I also enjoy following professional sports (especially NBA, NFL, and MLB), building various objects (custom PC, wood table), and gaming (lately big on The Witcher 3).
          </div>
          <div className="lead">
            This website is somewhat a WIP, so there will be some changes and things moved around. Welcome to my personal website!
          </div>
        </Container>
      </Jumbotron>
    );
  }
}

export default Home;
