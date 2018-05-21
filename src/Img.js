import React, { Component } from 'react';
import image from './pictures/img.png';
import arrow from './pictures/arrow.png';
import heart from './pictures/heart.png';
import stars from './pictures/stars.png';

import './img.css';

class Img extends Component {
  render () {
    const data = this.props.data;
    return (
      <div>
        <div className='container'>
          <div className='image' style={{ backgroundImage: `url(${image})` }}>
            <div
              className='arrow'
              onClick={this.props.onClick}
              style={{ backgroundImage: `url(${arrow})` }}
            />
            <div
              className='heart'
              style={{ backgroundImage: `url(${heart})` }}
            />
            <div className='bottom-left'>{data.name}</div>
            <div className='stars' style={{ backgroundImage: `url(${stars})` }}>
              <p className='starCount'>(32)</p>
            </div>
          </div>
        </div>
        <div className='container2'>
          <div className='info'>
            <p>Info</p>
          </div>
          <div className='schema'>
            <p>Schema</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Img;
