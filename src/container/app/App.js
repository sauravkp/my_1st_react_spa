import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.scss';

import { routes } from '../../routes';

class App extends Component {
  
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  render() {

    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return (
        <div style={{
          position: 'absolute',
          top: 'calc(50% - 4em)',
          left: 'calc(50% - 4em)'
        }}>
          <svg className="loader" width="240px" height="240px" viewBox="0 0 240 240" version="1.1">
            <g transform="translate(-30.000000, -55.000000)" fill="none">
              <path d="M208.5241,108.083333 C202.148208,117.111156 194.798331,126.229121 186.474249,135.4375 C178.150167,144.645879 169.294893,152.861075 159.908162,160.083333 C150.521432,167.305592 140.957736,173.263865 131.216789,177.958333 C121.475842,182.652801 112.000699,185 102.791077,185 C98.5404816,185 94.6441612,184.368062 91.1019987,183.104167 C87.5598361,181.840271 85.7887814,178.680581 85.7887814,173.625 C85.7887814,168.569419 87.5598361,162.159761 91.1019987,154.395833 C94.6441612,146.631906 98.8061398,138.41671 103.588059,129.75 C108.369979,121.08329 113.328932,112.236156 118.465068,103.208333 C123.601203,94.1805104 127.763182,85.8750379 130.951128,78.2916667 C131.659561,76.4861021 131.748113,74.9513952 131.216789,73.6875 C130.685465,72.4236048 129.534279,72.3333279 127.763198,73.4166667 C123.866819,75.9444571 119.262077,79.3749783 113.948833,83.7083333 C108.635589,88.0416883 103.233872,92.645809 97.7435203,97.5208333 C92.2531683,102.395858 86.9400042,107.361086 81.8038684,112.416667 C76.6677327,117.472248 72.5057541,121.986091 69.3178078,125.958333 C63.6503477,134.986156 58.7799473,143.291629 54.7064603,150.875 C50.6329734,158.458371 45.5854675,166.944398 39.5637911,176.333333 C38.1469261,178.500011 37.0842932,179.583333 36.3758607,179.583333 C34.6047795,179.583333 33.0993829,177.597242 31.859626,173.625 C30.6198692,169.652758 30,167.125005 30,166.041667 C30,162.79165 32.2138184,158.368084 36.6415216,152.770833 C41.0692248,147.173583 45.9396253,140.944479 51.2528691,134.083333 C56.9203292,122.52772 62.7648098,110.340342 68.7864861,97.5208333 C74.8081625,84.7013248 79.9442211,73.2361617 84.1948162,63.125 C85.257465,61.3194354 86.8514142,60.4166667 88.9767118,60.4166667 C91.1020093,60.4166667 93.0501695,61.3194354 94.8212508,63.125 C96.5923321,64.9305646 97.4778594,66.9166558 97.4778594,69.0833333 C97.4778594,70.527785 94.9098301,75.4930131 89.7736944,83.9791667 C84.6375586,92.4653202 79.5900527,102.3055 74.6310251,113.5 C81.361134,107.36108 88.7110111,100.861145 96.6808768,94 C104.650743,87.1388546 112.266278,80.8194733 119.527711,75.0416667 C126.789144,69.26386 133.164941,64.4791856 138.655293,60.6875 C144.145645,56.8958144 147.953413,55 150.07871,55 C151.495575,55 152.823867,55.8124919 154.063623,57.4375 C155.30338,59.0625081 155.923249,60.597215 155.923249,62.0416667 C155.923249,63.4861183 155.037722,65.6527633 153.266641,68.5416667 C149.370262,74.3194733 144.588414,81.7221771 138.920954,90.75 C133.253494,99.7778229 127.851777,109.076341 122.715641,118.645833 C117.579506,128.215326 113.240422,137.33329 109.698259,146 C106.156097,154.66671 104.385042,161.527753 104.385042,166.583333 C104.385042,170.916688 105.270569,173.895825 107.041651,175.520833 C108.812732,177.145841 111.646419,177.958333 115.542798,177.958333 C121.564475,177.958333 128.648693,175.611135 136.795667,170.916667 C144.942641,166.222199 153.355151,160.354202 162.033449,153.3125 C170.711748,146.270798 178.947152,138.41671 186.73991,129.75 C194.532667,121.08329 200.908464,112.777818 205.867492,104.833333 C206.575924,103.749995 207.638557,103.479164 209.055422,104.020833 C210.472287,104.562503 210.295182,105.916656 208.5241,108.083333 Z"></path>
            </g>
          </svg>
        </div>
      );
    }

    return (
      <Router>
        <div className="app">
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact = {route.exact}
            />
          ))}
        </div>
      </Router>
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 500));
}

export default App;
