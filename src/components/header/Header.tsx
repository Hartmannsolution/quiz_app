import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginContainer from '../login/LoginContainer';
import './header.css';
import logo from '../../assets/logo.svg';

const Header = ({facade, setUserContext}) => {
  return (
    <header className="header">
      <div className="logo"><img src={logo} width="200"/>
</div>
      <nav className="nav-menu">
        {/* <NavLink to="/" exact="true" className={({isActive}) => (isActive ? "active" : 'none')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive ? "active" : 'none')}>
        About
        </NavLink> */}
        <NavLink to="/designpatterns" className={({isActive}) => (isActive ? "active" : 'none')}>
          Design Patterns
        </NavLink>
        {/* <LoginContainer facade={facade} setUserContext={setUserContext} /> */}
      </nav>
    </header>
  );
};

export default Header;
