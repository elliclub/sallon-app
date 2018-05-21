import React, { Component } from 'react';
import arrow from './pictures/headerarrow.png';
import filter from './pictures/filter.png';

import './header.css';

class Header extends Component {
  render () {
    return (
      <div className='headerRending'>
        <div className='header'>
          <div
            className='headerArrow'
            style={{ backgroundImage: `url(${arrow})` }}
          />
          <div
            className='filter'
            style={{ backgroundImage: `url(${filter})` }}
          />
          <div className='title'>
            <p>Hår</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
