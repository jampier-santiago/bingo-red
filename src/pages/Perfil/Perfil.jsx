// Dependencies
import { React, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Components
import Menu from "../../components/Menu/Menu";
import NavMenu from "../../components/NavMenu/NavMenu";

// Assets
import leftArrow from "../../assets/icons/left-arrow.svg";
import user from "../../assets/icons/user-dark.svg";
import users from "../../assets/icons/users-dark.svg";
import calendar from "../../assets/icons/calendar.svg";
import chair from "../../assets/icons/chair.svg";
import code from "../../assets/icons/code.svg";
import imgUser from "../../assets/images/imgUser.svg";

// Style imports
import "./perfil.scss";

export default function Perfil() {
  const MySwal = withReactContent(Swal);

  const [seeMenu, setSeeMenu] = useState(localStorage.getItem("seeMenu"));
  const [userName, setUserName] = useState(null);
  const [name, setName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [rolUser, setRolUser] = useState(null);
  const [date, setDate] = useState(null);

  // Función para traer los datos del localStorage
  function getData() {
    const token = localStorage.getItem("token");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://java.bocetos.co/userred-0.0.1-SNAPSHOT/myprofile",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const dataUser = JSON.parse(result);
        setUserName(dataUser.data.username);
        setUserLastName(dataUser.data.lastNames);
        setName(dataUser.data.names);
        setRolUser(dataUser.data.rolDTO.name);

        const temporaryDate = dataUser.data.createdAt;
        const date = temporaryDate.split("T")[0];
        const newDate = date.split("-");

        const year = newDate[0];
        newDate[0] = newDate[2];
        newDate[2] = year;

        let month = "";
        switch (newDate[1]) {
          case "01":
            month = "Enero";
            break;
          case "02":
            month = "Febrero";
            break;
          case "03":
            month = "Marzo";
            break;
          case "04":
            month = "Abril";
            break;
          case "05":
            month = "Mayo";
            break;
          case "06":
            month = "Junio";
            break;
          case "07":
            month = "Julio";
            break;
          case "08":
            month = "Agosto";
            break;
          case "09":
            month = "Septiembre";
            break;
          case "10":
            month = "Octubre";
            break;
          case "11":
            month = "Noviembre";
            break;
          case "12":
            month = "Diciembre";
            break;
        }

        setDate(newDate[0] + " " + month + " " + newDate[2]);
      })
      .catch(() =>
        MySwal.fire({
          icon: "error",
          title: "Error en el servidor",
          text: "Hemos tenido un problema para traer los datos, inténtelo en otra ocasión.",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location = "/";
          }
        })
      );
  }

  useEffect(() => {
    document.title = "Bingo RED - perfil";
    getData();
  }, []);

  return (
    <section className="container-perfil">
      <Menu seeMenu={seeMenu} />
      <section
        className="container-panel"
        style={
          seeMenu && window.screen.width > 766
            ? { width: "80%", marginLeft: "20%" }
            : { width: "100%" }
        }
      >
        <header className="container__header">
          <NavMenu setSeeMenu={setSeeMenu} seeMenu={seeMenu} />
        </header>
        <div className="container-panel__info">
          <div className="btn-back">
            <div className="container-btn-back">
              <img
                src={leftArrow}
                alt="Icono de una flecha apuntando al lado izquierdo"
              />
            </div>
          </div>
          <div className="panel">
            <div className="panel--left">
              <div className="item-panel">
                <div className="item-panel__image">
                  <img src={user} alt="Icono de un usuario" />
                </div>
                <div className="item-panel__info">
                  <span>
                    <small>Nombre</small>
                  </span>
                  <span>
                    <strong>{name}</strong>
                  </span>
                </div>
              </div>
              <div className="item-panel">
                <div className="item-panel__image">
                  <img src={users} alt="Icono de un grupo de usuarios" />
                </div>
                <div className="item-panel__info">
                  <span>
                    <small>Apellidos</small>
                  </span>
                  <span>
                    <strong>{userLastName}</strong>
                  </span>
                </div>
              </div>
              <div className="item-panel">
                <div className="item-panel__image">
                  <img src={code} alt="icono de programación" />
                </div>
                <div className="item-panel__info">
                  <span>
                    <small>Nombre del usuario</small>
                  </span>
                  <span>
                    <strong>{userName}</strong>
                  </span>
                </div>
              </div>
              <div className="item-panel">
                <div className="item-panel__image">
                  <img src={chair} alt="Icono de una silla" />
                </div>
                <div className="item-panel__info">
                  <span>
                    <small>Rol</small>
                  </span>
                  <span>
                    <strong>{rolUser}</strong>
                  </span>
                </div>
              </div>
              <div className="item-panel">
                <div className="item-panel__image">
                  <img src={calendar} alt="Icono de un calendario" />
                </div>
                <div className="item-panel__info">
                  <span>
                    <small>Fecha de creacion</small>
                  </span>
                  <span>
                    <strong>{date}</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="panel--right">
              <div className="container-image">
                <img src={imgUser} alt="Imagen del perfil del usuario" />
              </div>
            </div>
          </div>
          <footer className="footer">
            <span>
              Bingo RED. Hecho por
              <a href="https://progracol.com" target="_blank">
                prograCol
              </a>
            </span>
          </footer>
        </div>
      </section>
    </section>
  );
}
