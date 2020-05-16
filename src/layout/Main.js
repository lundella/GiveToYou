import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('-----react call --- ');
  }


  render() {
    return (
      <div>
        <p>Main Page</p>
        <Link to="/campaign">Campaign</Link>
      </div>
    )
  }
}