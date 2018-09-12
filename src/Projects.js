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
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Placeholder 1</CardTitle>
            <CardSubtitle>Adding projects soon</CardSubtitle>
            <CardText>Yep</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
          <CardTitle>Placeholder 2</CardTitle>
            <CardSubtitle>Adding projects soon</CardSubtitle>
            <CardText>Yep</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card className='rightmost'>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
          <CardTitle>Placeholder 3</CardTitle>
            <CardSubtitle>Adding projects soon</CardSubtitle>
            <CardText>Yep</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Projects;
