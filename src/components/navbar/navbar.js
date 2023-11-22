//Navlink из react-router-dom отвечает за переключение компонентов по ссылкам через to='...'
import { NavLink } from "react-router-dom";
import "./style.css";
import BtnDarkMode from "../btnDarkMode/btnDarkMode";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const passiveLink = "nav-list__link";
  const checkActiveLink = ({ isActive }) =>
    isActive ? activeLink : passiveLink;
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Портфолио</strong>
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={checkActiveLink}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/projects" className={checkActiveLink}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/Contacts" className={checkActiveLink}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
