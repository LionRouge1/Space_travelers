/* eslint-disable jsx-quotes */
import React from 'react';
import { NavLink } from 'react-router-dom';
import planet1 from './planet1.png';

const Header = () => {
  const data = [{
    id: 1,
    name: 'Rocket',
    url: '/rocket',
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
    <header className='header'>
    <div>
    <img className='logo' src={planet1} alt="planet logo" />
    </div>
      <h1>
        
        Space Travelers Hub
       
      </h1>
      
      <ul className='nav'>
        {
            data.map(({ id, name, url }) => (
              <NavLink
                key={id}
                to={url}
              >
                <li className='navlinks'>
                  { name }

                </li>
              </NavLink>
            ))
        }
      </ul>
    </header>
  );
};

export default Header;
