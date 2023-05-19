import React from 'react'
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants/NAV_LINKS';
import '../Styles/nav-bar.scss';

export const NavBar = () => {
    return (
      <nav className="nav-bar">
        <ul>
          {NAV_LINKS.map((link) => {
            return (
              <li key={link.path}>
                <NavLink to={link.path}>{link.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };