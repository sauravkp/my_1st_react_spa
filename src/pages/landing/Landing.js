import React, { Component } from 'react';
import './Landing.scss';
import { Link } from "react-router-dom";
import Header from '../../components/header/Header';
import { siteData } from '../../constant';

class Landing extends Component {
  render() {
    return (
      <section className="landing">
        <Header/>
        <div className="hero">
          <div className="content">
              <div>
                <h1>Ready for virtual classrooms?</h1>
                <h3>Sign up to get virtual classrooms for your school / colleges</h3>
              </div>
              <div>
                <img src="https://kiwihr.com/static/main.54b30db9.png" />
              </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Landing;

