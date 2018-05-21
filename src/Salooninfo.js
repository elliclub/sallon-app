import React from 'react';
import pin from './pictures/pin.png';
import arrowdown from './pictures/arrowdown.png';
import clock from './pictures/clock.png';
import web from './pictures/web.png';
import phone from './pictures/phone.png';

import './salooninfo.css';

class Salooninfo extends React.Component {
  render () {
    const data = this.props.data;
    return (
      <div className='contact-info'>
        <div className='pin' style={{ backgroundImage: `url(${pin})` }} />
        <div className='adressField'>
          <p>{data.adress}</p>
        </div>
        <div className='arrowCtrl'>
          <div
            className='arrow'
            style={{ backgroundImage: `url(${arrowdown})` }}
          />
        </div>
        <div className='pin' style={{ backgroundImage: `url(${clock})` }} />
        <div className='openHours'>
          <p>Öppet till {data.openHours} idag</p>
        </div>
        <div className='pin' style={{ backgroundImage: `url(${phone})` }} />
        <div className='phoneNumber'>
          <p>{data.phoneNumber}</p>
        </div>
        <div className='pin' style={{ backgroundImage: `url(${web})` }} />
        <div className='webbAdress'>
          <p>{data.url}</p>
        </div>
        <div className='Lorem'>
          <p>{data.description}</p>
        </div>
      </div>
    );
  }
}

export default Salooninfo;
