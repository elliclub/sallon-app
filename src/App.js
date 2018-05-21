import React, { Component } from 'react';
import List from './List';
import Saloon from './Saloon';

import './App.css';

class App extends Component {
  state = {
    saloon: {},
    view: 'List'
  };
  render() {
    const view = this.state.view;

    return (
      <div className="App">
        {view === 'List' ? (
          <List
            onItemClick={saloon =>
              this.setState({ view: 'Saloon', saloon: saloon })
            }
          />
        ) : (
          <Saloon
            data={this.state.saloon}
            onBackClick={() => this.setState({ view: 'List', saloon: {} })}
          />
        )}
      </div>
    );
  }
}

export default App;
