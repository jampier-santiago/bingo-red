// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Assets
import brush from "../../../assets/icons/brush.svg";
import closeAcount from "../../../assets/icons/cerrar-sesion.svg";
import profileUser from "../../../assets/icons/profile-user.svg";

// Style imports
import "./modal.scss";

// props
// seeModal: Debe llegar el estado de visualización del modal

export default function Modal({ seeModal }) {
  if (seeModal) {
    return (
      <section className="container-modal-nav">
        <header className="container-modal-nav__header">
          <h3>{localStorage.getItem("userName")}</h3>
        </header>
        <section className="container-modal-nav__info">
          <Link className="item-modal-nav" to="/perfil">
            <img
              src={profileUser}
              alt="Icono para entrar al perfil del usuario"
            />
            <span>Perfil</span>
          </Link>
          <div className="item-modal-nav">
            <img src={brush} alt="Icono de un pincel" />
            <span>Temas</span>
          </div>
          <div
            className="item-modal-nav"
            onClick={() => {
              window.location = "/";
            }}
          >
            <img src={closeAcount} alt="Icono para cerrar sesión" />
            <span>Cerrar sesión</span>
          </div>
        </section>
      </section>
    );
  } else {
    return null;
  }
}
