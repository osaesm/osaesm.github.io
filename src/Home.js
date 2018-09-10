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
            <img className='circle-pic' alt='Pic of me should have loaded' src='https://github.com/osaesm/osaesm.github.io/raw/master/Me.jpg' />
            <figcaption className='caption'>I look more happy in person (I just don't smile for cameras)</figcaption>
          </figure>
          <div className="lead">
            I'm a sophomore at the University of Illinois at Urbana-Champaign studying computer science.
          </div>
          <div className="lead">
            I also study math as a probable second major and pursue whatever new technologies are interesting.
          </div>
          <div className="lead">
            Among my other interests are practically any professional sports, building various objects, and gaming.
          </div>
          <div className="lead">
            This website is somewhat a WIP, so there will be some changes and things moved around.
          </div>
        </Container>
      </Jumbotron>
    );
  }
}

export default Home;
