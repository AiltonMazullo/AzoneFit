import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
