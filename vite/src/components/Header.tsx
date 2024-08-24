import { useState } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const [visibility, setVisibility] = useState(false);

  const { pathname } = useLocation();
  console.log(pathname);

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
        <ul
          className="tabs primary-nav flex underline-tab"
          data-visibility={visibility}
        >
          <li className={pathname === "/" ? "active" : ""}>
            <a href="/">
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li className={pathname === "/destination" ? "active" : ""}>
            <a href="/destination">
              <span aria-hidden="true">01</span>Destination
            </a>
          </li>
          <li className={pathname === "/crew" ? "active" : ""}>
            <a href="/crew">
              <span aria-hidden="true">02</span>Crew
            </a>
          </li>
          <li className={pathname === "/technology" ? "active" : ""}>
            <a href="/technology">
              <span aria-hidden="true">03</span>Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
