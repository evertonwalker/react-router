import React from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/param/01">Param # 01</Link>
          </li>
          <li>
            <Link to="/param/02">Param # 02</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
