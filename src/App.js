import React, { Component } from 'react';
import Header from './header/header.js';
import Search from './search/search.js';
import Menu from './menu/menu.js';
import Foot from './foot/foot.js';
import Backtop from './backtop/backtop.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
	    this.state = {
	    
	    }
  }
  render() {
    return (
        <div className="App">
          <Header />
          <Search />
          <Menu />
          <Backtop />
    	 <Foot />
        </div>
    );
  }
}

export default App;
