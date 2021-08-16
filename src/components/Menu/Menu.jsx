// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Assets
import logo from "../../assets/images/logo.png";
import users from "../../assets/icons/users-dark.svg";
import dado from "../../assets/icons/dado.svg";
import shoppingCart from "../../assets/icons/shopping-cart.svg";
import clipboard from "../../assets/icons/clipboard.svg";
import tablero from "../../assets/icons/tablero.svg";
import list from "../../assets/icons/list.svg";
import tablet from "../../assets/icons/tablet.svg";
import shoppingBag from "../../assets/icons/shopping-bag.svg";

// Style imports
import "./menu.scss";

// props
// seeMenu: Debe llegar el estado en el que se encuentra la visualización del menú

export default function Menu({ seeMenu }) {
  return (
    <section
      className="container-menu"
      style={seeMenu ? { display: "flex" } : { display: "none" }}
    >
      <div className="container-menu__img">
        <img src={logo} alt="Logo de Bingo Red" />
      </div>
      <div className="container-menu__user-name">
        <span>{localStorage.getItem("userName")}</span>
      </div>
      <div className="container-menu__routes">
        <Link className="item-menu" to="/dashboard">
          <img src={clipboard} alt="Icono de una tabla de tareas" />
          <span>Dashboard</span>
        </Link>
        <div className="item-menu">
          <img src={users} alt="Icono de un grupo de usuarios" />
          <span>Usuarios</span>
        </div>
        <div className="item-menu">
          <img src={dado} alt="Icono de un dado" />
          <span>Reyes</span>
        </div>
        <div className="item-menu">
          <img src={shoppingBag} alt="icono de una bolsa de compras" />
          <span>Acumulados</span>
        </div>
        <div className="item-menu">
          <img src={list} alt="Icono de una lista" />
          <span>Cartones y modulos</span>
        </div>
        <Link className="item-menu" to="/figuras">
          <img src={tablero} alt="Icono de un tablero de bingo" />
          <span>Figuras y modalidades</span>
        </Link>
        <div className="item-menu">
          <img src={shoppingCart} alt="icono de un carrito de compras" />
          <span>Valores unitarios</span>
        </div>
        <div className="item-menu">
          <img src={tablet} alt="Icono de una tablet" />
          <span>Tablets</span>
        </div>
      </div>
    </section>
  );
}
