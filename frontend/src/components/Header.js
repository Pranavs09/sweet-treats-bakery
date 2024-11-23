import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src="/images/logo.png" alt="Sweet Treat Bakery"></img>
    </div>
    <nav className="header-menu">
      <a href="/">Home</a>
      <a href="/menu">Menu</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>
);

export default Header;
