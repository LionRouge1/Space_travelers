/* eslint-disable jsx-quotes */
import React from 'react';
import { NavLink } from 'react-router-dom';
import planet1 from './planet1.png';
import '../../style/header.css';

const Header = () => {
  const data = [{
    id: 1,
    name: 'Rocket',
    url: '/',
  },
  {
    id: 2,
    name: 'Missions',
    url: '/missions',
  },
  {
   id: 3,
   name: 'Dragon',
   url: '/dragon',
 },
 {
  id: 4,
  name: 'My Profile',
  url: '/profile',
},
  ];
  return (
    <nav className='header'>
      <div className='title_container'>
        <img className='logo' src={planet1} alt="planet logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <ul className='navBar'>
        {
            data.map(({ id, name, url }) => (
        
              <li key={id} className='navlinks'>
                <NavLink to={url}>
                  { name }
                </NavLink>
              </li>
             
            ))
        }
      </ul>
    </nav>
  );
};

export default Header;
