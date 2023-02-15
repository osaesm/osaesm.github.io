import React, { Component } from 'react';
import './Projects.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Projects extends Component {
  render() {
    return (
      <div className='card-collection'>
        <Card className='leftmost'>
          <CardImg top width="100%" src="nba_logo.png" alt="NBA Logo" />
          <CardBody>
            <CardTitle>NBA Betting Bot</CardTitle>
            <CardSubtitle>Developed a custom heuristic for calculating win probability & expected returns on NBA moneyline bets. </CardSubtitle>
            <CardText>Written in Python 3.</CardText>
            <Button>Repository is private due to profit</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="OE.ico" alt="Card image cap" />
          <CardBody>
            <CardTitle>This website</CardTitle>
            <CardSubtitle>Written in ReactJS</CardSubtitle>
            <Button target='_blank' href='https://github.com/osaesm/osaesm.github.io'>Repository</Button>
          </CardBody>
        </Card>
        <Card className='rightmost'>
          <CardImg top width="100%" src="rubiks_cube.jpg" alt="Card image cap" />
          <CardBody>
          <CardTitle>Old Rubik's Cube Solver</CardTitle>
            <CardSubtitle>My attempt at Rubik's Cube solving with no C++, threading, or data structures knowledge.</CardSubtitle>
            <CardText>Later I used CUDA and cleaned things up.</CardText>
            <Button target='_blank' href='https://github.com/osaesm/Rubik'>Repository</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Projects;
