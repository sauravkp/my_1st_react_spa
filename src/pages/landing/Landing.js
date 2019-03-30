import React, { Component } from 'react';
import './Landing.scss';
import { Link } from "react-router-dom";

import { siteData } from '../../constant';

class Landing extends Component {
  render() {
    return (
      <section className="landing">
        <h1>Landing</h1>
        <h2>Nice</h2>
      </section>
    )
  }
}

export default Landing;

