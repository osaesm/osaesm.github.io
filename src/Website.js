import React, { Component } from 'react'
import Routes from './Routes';
import './Website.css';

class Website extends Component {
  render() {
    const email = 'osamabinesmail@gmail.com'
    const phoneNumber = '(847) 834-1796'
    const mailingAddress = '410 E Green St, Apt 514, Champaign, IL 61820'
    return (
      <div>
        <div className='body'>
          <Routes />
        </div>
        <div className='footer'>
          {/* <hr classname='horizontal-break' /> */}
          <p className='first-line'>
            Email: <a href={`mailto:${email}`}>{email}</a> |
            Phone: <a href='tel:+18478341796'>{phoneNumber}</a> |
            Mailing Address: <a href='https://goo.gl/maps/9orw4vZDeFx' target='_blank' rel="noopener noreferrer" >{mailingAddress}</a>
          </p>
          <p>
            LinkedIn: <a href={'https://www.linkedin.com/in/osamabinesmail/'} target='_blank' rel="noopener noreferrer" >/in/osamabinesmail</a> |
            GitHub: <a href={'http://github.com/osaesm'} target='_blank' rel="noopener noreferrer" >/osaesm</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Website;
