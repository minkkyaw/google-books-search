import React from 'react';

import NavItems from './../nav-items/nav-items.component';

import './nav-bar.styles.scss';

const navItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Saved Books',
    href: '/saved-books'
  }
]

const NavBar = () => (
  <div className="nav-bar">
    <h1 className="book-search-logo">Google Books Search</h1>
    <NavItems navItems={navItems}/>
  </div>
)

export default NavBar;