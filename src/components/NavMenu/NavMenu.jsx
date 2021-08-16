// Dependencies
import { React, useState } from "react";

// Assets
import iconMenu from "../../assets/icons/menu.svg";
import iconUser from "../../assets/icons/user.svg";

// Components
import Modal from "./Modal/Modal";

// Style imports
import "./navMenu.scss";

// props
// setSeeModal: Debe llegar la función con la cual se cambiará el estado de visualización del menú
// seeMenu: Debe llegar el estado de visualización del menú

export default function NavMenu({ setSeeMenu, seeMenu }) {
  const [seeModal, setSeeModal] = useState(false);

  return (
    <>
      <Modal seeModal={seeModal} />

      <nav className="nav-menu">
        <div className="nav-left">
          <div className="nav-menu__btn-menu">
            <img
              src={iconMenu}
              alt="Icono de menu"
              onClick={() => {
                setSeeMenu(!seeMenu);
              }}
            />
          </div>
          <div className="nav-menu__title">
            <h2>SALA Verano 22</h2>
          </div>
        </div>
        <div className="nav-right">
          <img
            src={iconUser}
            alt="Icono de usuario"
            onClick={() => setSeeModal(!seeModal)}
          />
        </div>
      </nav>
    </>
  );
}
