/* eslint-disable jsx-a11y/anchor-is-valid */

import Nav from './Nav';

// Implicit return, Multi-Line
const Header = () => (
  <div>
    <div className="bar">
      <a href="">Sick Fits</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
