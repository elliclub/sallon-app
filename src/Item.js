import React from 'react';
import stars from './pictures/stars.png';
import itemarrow from './pictures/itemarrow.png';

import './item.css';

class Item extends React.Component {
  render () {
    return (
      <div className='showItems' onClick={this.props.onClick}>
        <div className='firstItem'>
          <p className='saloonTime'>{this.props.data.time}</p>
        </div>
        <div className='secondItem'>
          <p className='saloonTitle'>{this.props.data.name}</p>
          <div
            className='item-stars'
            style={{ backgroundImage: `url(${stars})` }}
          >
            <p className='starCount' style={{ color: 'black' }}>
              (32)
            </p>
          </div>
          <p className='saloonAdress'>{this.props.data.adress}</p>
        </div>
        <div className='thirdItem'>
          <p className='saloonPrice'>{this.props.data.price} kr</p>
          <p className='saloonMinutes'>{this.props.data.minutes}</p>
        </div>
        <div
          className='item-arrow'
          style={{ backgroundImage: `url(${itemarrow})` }}
        />
      </div>
    );
  }
}

export default Item;
