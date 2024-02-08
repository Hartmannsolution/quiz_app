import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginContainer from '../login/LoginContainer';
import './header.css';

const Header = ({facade, setUserContext}) => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav-menu">
        <NavLink to="/" exact="true" className={({isActive}) => (isActive ? "active" : 'none')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive ? "active" : 'none')}>
        About
        </NavLink>
        <NavLink to="/quizzes" className={({isActive}) => (isActive ? "active" : 'none')}>
          Quizzes
        </NavLink>
        <NavLink to="/group" className={({isActive}) => (isActive ? "active" : 'none')}>
        Group generator
        </NavLink>
        {/* <LoginContainer facade={facade} setUserContext={setUserContext} /> */}
      </nav>
    </header>
  );
};

export default Header;
