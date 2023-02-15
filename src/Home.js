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
            I'm a software development engineer at Microsoft working on CBL-Mariner, the Azure-focused Linux Distribution developed in-house.
          </div>
          <div className="lead">
            I also enjoy working on data and web driven side projects, and they keep me up to date.
          </div>
          <div className="lead">
            I also enjoy following professional sports (especially NBA, NFL, and MLB), bargain hunting for new hobbies (like ice cream making!), and gaming (lately big on Horizon Zero Dawn).
          </div>
          <div className="lead">
            This website is a perpetual WIP, so there will be some changes and things moved around. Welcome to my personal website!
          </div>
        </Container>
      </Jumbotron>
    );
  }
}

export default Home;
