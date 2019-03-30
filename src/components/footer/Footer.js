import React, { Component } from 'react';
import './Footer.scss';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom'

class Footer extends Component {

  render() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="is-row">
                    <div className="is-col-sm-12 is-col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                    </div>

                    <div className="is-col-xs-6 is-col-md-3"  style={{visibility:'hidden'}}>
                        <h6>Categories</h6>
                        <ul className="footer-links">
                        <li>
                            <NavLink to="/" activeClassName="is-active">
                                Home
                            </NavLink>  
                        </li>   
                        <li>
                            <NavLink to="/pricing" activeClassName="is-active">
                                Pricing
                            </NavLink>  
                        </li> 
                        </ul>
                    </div>

                    <div className="is-col-xs-6 is-col-md-3">
                        <h6>Company</h6>
                        <ul className="footer-links">
                        <li>
                            <NavLink to="/" activeClassName="is-active">
                                Home
                            </NavLink>  
                        </li>   
                        {/* <li>
                            <NavLink to="/pricing" activeClassName="is-active">
                                Pricing
                            </NavLink>  
                        </li>  */}
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="is-row">
                    <div className="is-col-md-8 is-col-sm-6 is-col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2019 </p>
                    </div>

                    <div className="is-col-md-4 is-col-sm-6 is-col-xs-12">
                        <ul className="social-icons">
                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
 }
}

export default Footer;
