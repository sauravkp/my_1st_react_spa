import React, { Component } from 'react';
import './Landing.scss';
import { Link } from "react-router-dom";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
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
                <h1>Simply efficient Virtual Classrooms </h1>
                <p>CentEdge helps schools, colleges and tuition centers set-up virtual classrooms with live streaming and recording without any extra hardware cost.</p>
              </div>
              <div>
                <img height="400" src="https://epecate.com/wp-content/uploads/2019/01/virtual_classroom3_imac2015retina_front-1024x1024.png" />
              </div>
          </div>
        </div>

        <div className="features">
          <h1 className="headline">Next generation Teaching Learning with CentEdge</h1>
          <div className="is-row">
            <div className="is-col-md-4">
                <div className="card">
                  <div className="icon">
                    <Icon>star</Icon>
                  </div>
                  <h3>Anytime anywhere Teaching</h3>
                  <p>Live stream your class directly from your virtual classroom anytime anywhere with exactly 2 clicks. Any student can raise hand to ask doubt through voice and teacher can choose whose request to accept.</p>
                </div>
            </div>
            
            <div className="is-col-md-4">
                <div className="card">
                  <div className="icon">
                    <Icon>star</Icon>
                  </div>
                  <h3>Live Streaming with recording</h3>
                  <p>The virtual classrooms comes with interactive live streaming and recording as default features with different pre-configured options for educational institute and training centers. It can help them in reaching and teaching more students with their existing resources.</p>
                </div>
            </div>

            <div className="is-col-md-4">
                <div className="card">
                  <div className="icon">
                    <Icon>star</Icon>
                  </div>
                  <h3>Online quiz, assignment and feedback</h3>
                  <p> The virtual classrooms are equipped with online, quiz, assignments to measure the students understanding. The real time fedback by students helps the teacher in understanding the teaching quality and effectiveness. </p>
                </div>
            </div>

            <div className="is-col-md-4">
                <div className="card">
                  <div className="icon">
                    <Icon>star</Icon>
                  </div>
                  <h3>Integrated Management</h3>
                  <p>Builtin admin dashboards along with on-demand integration with other services like HRMS, ERP, LMS, Accreditation, Biometric etc.</p>
                </div>
            </div>

            <div className="is-col-md-4">
                <div className="card">
                  <div className="icon">
                    <Icon>star</Icon>
                  </div>
                  <h3>Share, Re-use &amp; Collaborate</h3>
                  <p>The recording can be re-used by sharing it inside a virtual classrooms or can even be downloaded only by the author. The future students can get benefited from the recordings by going through some of the recordings even before the actual class begins. </p>
                </div>
            </div>
            <div className="is-col-md-4">
                <div className="card">
                  <div className="icon">
                    <Icon>star</Icon>
                  </div>
                  <h3>Skill gap analysis</h3>
                  <p>Academic analytics, behavioural analytics, marks and attendance analytics, video analytics etc for course content improvement, student engagement improvement, student academic performance improvement.</p>
                </div>
            </div>
            
          </div>
        </div>
      
        <Footer/>
      </section>
    )
  }
}

export default Landing;

