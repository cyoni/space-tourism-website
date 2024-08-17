import React, { useState } from "react";

function MenuNav() {
  const [visibility, setVisibility] = useState(false);

  const toggleMenu = () => {
    setVisibility((prev) => !prev);
  };


  return (
    <header className="primary-header flex">
      <div>
        <img
          src="./assets/shared/logo.svg"
          alt="space tourism logo"
          className="logo"
        />
      </div>

      <button
        className="mobile-menu-toggle"
        aria-controls="primary-nav"
        data-visibility={visibility}
        aria-expanded={visibility}
        onClick={toggleMenu}
      ></button>
      <nav>
        <ul className="primary-nav flex" data-visibility={visibility}>
          <li className="active text-white">
            <a href="index.html">
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li className="text-white">
            <a href="destination.html">
              <span aria-hidden="true">01</span>Destination
            </a>
          </li>
          <li>
            <a href="crew.html">
              <span aria-hidden="true">02</span>Crew
            </a>
          </li>
          <li>
            <a href="technology.html">
              <span aria-hidden="true">03</span>Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MenuNav;
