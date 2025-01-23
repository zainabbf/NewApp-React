/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from "react-router-dom";
import "./headline.css";
const Header = () => {
  return (
    <div>
      <div>

  <div className="wrapper row1">
    <header id="header" className="hoc clear">
      <section>
        <div>
          <i className="fa fa-phone" /> +00 (123) 456 7890
        </div>
        <div>
          <h1 id="logo">
            <Link to="/home">Nalpure</Link>
          </h1>
        </div>
        
      </section>
      <nav id="mainav">
        <ul className="clear">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a className="drop" href="#">
              Pages
            </a>
            <ul>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
              <li>
                <a href="pages/full-width.html">Full Width</a>
              </li>
              <li>
                <a href="pages/sidebar-left.html">Sidebar Left</a>
              </li>
              <li>
                <a href="pages/sidebar-right.html">Sidebar Right</a>
              </li>
              <li>
                <a href="pages/basic-grid.html">Basic Grid</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="drop" href="#">
              Dropdown
            </a>
            <ul>
              <li>
                <a href="#">Level 2</a>
              </li>
              <li>
                <a className="drop" href="#">
                  Level 2 + Drop
                </a>
                <ul>
                  <li>
                    <a href="#">Level 3</a>
                  </li>
                  <li>
                    <a href="#">Level 3</a>
                  </li>
                  <li>
                    <a href="#">Level 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Level 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Link Text</a>
          </li>
          <li>
            <a href="#">Link Text</a>
          </li>
          <li>
            <a href="#">Link Text</a>
          </li>
          <li>
            <NavLink to="/linktext">Long Link Text</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  </div>
  </div>
  );
}
export default Header;
