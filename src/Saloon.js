import React, { Component } from 'react';
import Img from './Img';
import Salooninfo from './Salooninfo';

class Saloon extends Component {
  render () {
    return (
      <div>
        <Img data={this.props.data} onClick={this.props.onBackClick} />
        <Salooninfo data={this.props.data} />
      </div>
    );
  }
}

export default Saloon;
