import { CiSettings } from "react-icons/ci";
import "./navbar.css";
import logo from "../../assets/img/logo.svg";
import data from "./data";
import { useEffect, useState } from "react";

const getStorageTheme = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
};

const NavBar = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav id="navbar">
      <div className="container nav__container">
        <a href="/" className="nav__logo">
          <img src={logo} alt="logo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>

        <button id="theme__icon" onClick={toggleTheme}>
          <CiSettings />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
