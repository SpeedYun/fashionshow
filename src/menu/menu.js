import React, { Component } from 'react';
import { Carousel } from 'antd';
import './menu.css';
class Menu extends Component {
  constructor(props) {
    super(props);
	    this.state = {
	    
	    }
  }
  render() {
    return (
        <div className="Menu">
          <Carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </div>
    );
  }
}

export default Menu;
