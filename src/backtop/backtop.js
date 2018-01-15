import React, { Component } from 'react';
import { BackTop,Icon } from 'antd';
import './backtop.css';
class Backtop extends Component {
  constructor(props) {
    super(props);
	    this.state = {
	    
	    }
  }
  render() {
    return (
        <div className="backtop">
           <BackTop>
            <div className="top-inner"><Icon type="to-top" /><div>Top</div></div>
          </BackTop>
        </div>
    );
  }
}

export default Backtop;
