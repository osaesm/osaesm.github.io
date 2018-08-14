import React, { Component } from 'react';

class ContactMe extends Component {
  render() {
    const address = <div>
      <div>410 E Green St. Apt #410</div>
      <div>Champaign, IL 61820</div>      
    </div>
    return (
      <div>
        <h1>Contact Me</h1>
        <div>Email: osamabinesmail@gmail.com</div>
        <br/>
        <div>Phone: (847) 834-1796</div>
        <br/>
        <div>Mailing Address: {address}</div>
      </div>
    );
  }
}

export default ContactMe;
