// Dependencias;
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import Menu from "../../components/Menu/Menu";
import NavMenu from "../../components/NavMenu/NavMenu";

// Assets
import users from "../../assets/icons/users-dark.svg";
import dado from "../../assets/icons/dado.svg";
import clipboard from "../../assets/icons/clipboard.svg";
import tablero from "../../assets/icons/tablero.svg";
import tablet from "../../assets/icons/tablet.svg";
import shoppingBag from "../../assets/icons/shopping-bag.svg";

// Style imports
import "./dashboard.scss";

export default function Dashboard() {
  const [seeMenu, setSeeMenu] = useState(false);

  useEffect(() => {
    document.title = "Bingo Red - Dashboard";
  }, []);

  return (
    <section className="container-dashboard">
      <Menu seeMenu={seeMenu} />
      <section
        className="container-panel-dashboard"
        style={
          seeMenu && window.screen.width > 766
            ? { width: "80%", marginLeft: "20%" }
            : { width: "100%" }
        }
      >
        <header className="container__header">
          <NavMenu setSeeMenu={setSeeMenu} seeMenu={seeMenu} />
        </header>

        <section className="container-panel-dashboard__body">
          <div className="item-dashboard">
            <img src={users} alt="Icono de un grupo de usuarios" />
            <h2>usuarios</h2>
          </div>
          <div className="item-dashboard">
            <img src={dado} alt="Icono de un dado" />
            <h2>reyes</h2>
          </div>
          <div className="item-dashboard">
            <img src={shoppingBag} alt="Icono de una bolsa de compras" />
            <h2>acumulados</h2>
          </div>
          <div className="item-dashboard">
            <img src={clipboard} alt="Icono de un tablero de tareas" />
            <h2>cartones y modulos</h2>
          </div>
          <Link className="item-dashboard" to="/figuras">
            <img src={tablero} alt="Icono de una grilla" />
            <h2>figuras y modalidades</h2>
          </Link>
          <div className="item-dashboard">
            <img src={tablet} alt="Icono de una tablet" />
            <h2>valores unitarios</h2>
          </div>
        </section>
        <footer className="footer">
          <span>
            Bingo RED. Hecho por{" "}
            <a href="https://progracol.com" target="_blank">
              prograCol
            </a>
          </span>
        </footer>
      </section>
    </section>
  );
}
