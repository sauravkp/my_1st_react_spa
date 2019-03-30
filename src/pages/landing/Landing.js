import React, { Component } from 'react';
import './Landing.scss';
import { Link } from "react-router-dom";
import Header from '../../components/header/Header';
import { siteData } from '../../constant';
import Icon from '@material-ui/core/Icon';

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

        <div className="features">
          <h1 className="headline">Ready for virtual classrooms?</h1>
          <div className="is-row">
            <div className="is-col-md-4">
                <div className="card">
                  <div className="icon">
                    <Icon>star</Icon>
                  </div>
                  <h3>Lorem Ipsum</h3>
                  <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                </div>
            </div>

            <div className="is-col-md-4">
                <div className="card">
                  <div className="icon">
                    <Icon>star</Icon>
                  </div>
                  <h3>Lorem Ipsum</h3>
                  <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                </div>
            </div>

            <div className="is-col-md-4">
                <div className="card">
                  <div className="icon">
                    <Icon>star</Icon>
                  </div>
                  <h3>Lorem Ipsum</h3>
                  <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                </div>
            </div>

            <div className="is-col-md-4">
                <div className="card">
                  <div className="icon">
                    <Icon>star</Icon>
                  </div>
                  <h3>Lorem Ipsum</h3>
                  <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                </div>
            </div>
            <div className="is-col-md-4">
                <div className="card">
                  <div className="icon">
                    <Icon>star</Icon>
                  </div>
                  <h3>Lorem Ipsum</h3>
                  <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                </div>
            </div>
            <div className="is-col-md-4">
                <div className="card">
                  <div className="icon">
                    <Icon>star</Icon>
                  </div>
                  <h3>Lorem Ipsum</h3>
                  <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                </div>
            </div>
            
          </div>
        </div>
      </section>
    )
  }
}

export default Landing;

