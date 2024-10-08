import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">BookStore</div>
      <ul className="nav-items">
        <li><a href="#">Home</a></li>
        <li><a href="#">Fiction</a></li>
        <li><a href="#">Non-fiction</a></li>
        <li><a href="#">Children's Books</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
