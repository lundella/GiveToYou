import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Campaign extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('-----react campaign call --- ');
  }

  render() {
    return (
      <div>
        <p>Campaign Page</p>
        <Link to="/">Main</Link>
      </div>
      
    )
  }
}