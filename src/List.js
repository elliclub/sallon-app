import React, { Component } from 'react';
import Item from './Item';
import Header from './Header';
import './list.css';
import arrowdown from './pictures/arrowdown.png';

const url = '/saloons.json';

class List extends Component {
  state = {
    filterPrice: 0,
    saloons: [],
    showFilter: false
  };

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          saloons: data
        });
      });
  }

  getPriceRange() {
    const { filterPrice } = this.state;
    const prices = this.state.saloons.map(s => s.price).sort((a, b) => a - b);

    if (filterPrice > 0) {
      return '0 - ' + filterPrice;
    }

    return prices[0] + ' - ' + prices[prices.length - 1];
  }

  renderFilter() {
    const saloons = this.state.saloons
      .map(s => s)
      .sort((a, b) => a.price - b.price);

    let filterPrice = this.state.filterPrice;
    if (filterPrice === 0) {
      filterPrice = saloons[0].price;
    }

    return (
      <div>
        <p>Filtera på pris (0-700 kr)</p>
        <input
          type="range"
          value={filterPrice}
          min={0}
          max={700}
          onChange={event => this.setState({ filterPrice: event.target.value })}
        />
        <button
          onClick={() => this.setState({ showFilter: !this.state.showFilter })}
        >
          Uppdatera
        </button>
      </div>
    );
  }

  render() {
    let { saloons } = this.state;
    const { filterPrice } = this.state;

    if (!this.state.saloons.length) {
      return (
        <div>
          <p>Laddar...</p>
        </div>
      );
    }

    if (filterPrice > 0) {
      saloons = saloons.filter(s => s.price < filterPrice);
    }

    return (
      <div>
        <Header />
        <div className="filterItem">
          <div className="filtered">
            <p>Pris {this.getPriceRange()} kr</p>
          </div>
          <div
            className="filter-arrow"
            style={{ backgroundImage: `url(${arrowdown})` }}
            onClick={() =>
              this.setState({ showFilter: !this.state.showFilter })
            }
          />
        </div>
        {this.state.showFilter
          ? this.renderFilter()
          : saloons.map((item, index) => (
              <Item
                key={index}
                data={item}
                onClick={() => this.props.onItemClick(item)}
              />
            ))}
      </div>
    );
  }
}

export default List;
