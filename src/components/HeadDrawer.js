import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeadDrawer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="head-drawer">
        <p>Header</p>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/campaign">Campaign</Link></li>
        </ul>
      </div>
    )
  }
}