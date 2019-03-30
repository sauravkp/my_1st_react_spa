import React, { Component } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/images/logo.svg';

class Header extends Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  render() {

    const { anchorEl } = this.state;

    return (
      <div className="navigation">
        <div>
           <img style={{height: 80}} src={Logo}/>
        </div>
        <div className="navTabsBar">
            <nav className="navTabs">
                <ul className="navTabs-list list-inline">
                    <li className="navTabs-item">
                        <NavLink to="/" activeClassName="is-active">
                          Home
                        </NavLink>
                    </li>

                    {/* 
   
                    <li className="navTabs-item">
                      <Button
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        style={{
                          color: '#682F92'
                        }}
                      >
                        Features
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                      >
                        <MenuItem onClick={this.handleClose}>Featire A</MenuItem>
                      </Menu>
                    </li>

                    <li className="navTabs-item">
                      <NavLink to="/pricing" activeClassName="is-active">
                          Pricing
                      </NavLink> 
                    </li>
                  */}
                </ul>
            </nav>
        </div>

    </div>
    );
 }
}

export default Header;
