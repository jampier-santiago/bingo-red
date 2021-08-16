// Dependencies
import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Assets
import back from "../../assets/icons/left-arrow.svg";

// Components
import Menu from "../../components/Menu/Menu";
import NavMenu from "../../components/NavMenu/NavMenu";

// Style import
import "./editModality.scss";

export default function EditModality() {
  const { id } = useParams();
  const MySwal = withReactContent(Swal);
  const [seeMenu, setSeeMenu] = useState(false);
  const [nameModality, setNameModality] = useState(null);
  const [closeModality, setCloseModality] = useState(null);
  const [opportunityModality, setOpportunityModality] = useState(null);
  const [idModality, setIdModality] = useState(null);

  // Función para traer los datos de la modalidad
  function getModality() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/groupfigure/${id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result).data;
        setNameModality(data.name);
        setCloseModality(data.closeAt);
        setOpportunityModality(data.opportunity);
        setIdModality(data.id);
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

  // Función para actualizar la modalidad
  function updateData() {
    const name = document.getElementById("nameModality").value;
    const close = document.getElementById("closeModality").value;
    const opportunity = document.getElementById("opportunityModality").value;

    if (name != "" && close != "" && opportunity != "") {
      if (name.trim() != "" && close.trim() != "" && opportunity.trim() != "") {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem("token"));

        var raw = JSON.stringify({
          name: "LINEAL Maloi",
          opportunity: 1,
          closeAt: 1,
          selectFigure: false,
        });

        var requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          `https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/groupfigure/${id}`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            if (JSON.parse(result).data) {
              MySwal.fire({
                icon: "success",
                title: "Exito",
                text: "Modalidad actualizada con exito.",
              });
            } else {
              MySwal.fire({
                icon: "error",
                title: "Error con el servidor",
                text: "No se pudo actualizar la información, inténtelo en otra ocasión.",
              }).then(() => {
                window.location = "/figuras";
              });
            }
          })
          .catch(() =>
            MySwal.fire({
              icon: "error",
              title: "Error con el servidor",
              text: "No se pudo actualizar la información, inténtelo en otra ocasión.",
            }).then(() => {
              window.location = "/figuras";
            })
          );
      } else {
        MySwal.fire({
          icon: "error",
          title: "Error con los datos",
          text: "Debe llenar toda la información antes de subir la actualización.",
        });
      }
    } else {
      MySwal.fire({
        icon: "error",
        title: "Error con los datos",
        text: "Debe llenar toda la información antes de subir la actualización.",
      });
    }
  }

  useEffect(() => {
    document.title = "Bingo Red - Editar modalidad";
    getModality();
  }, []);

  return (
    <section className="container">
      <Menu seeMenu={seeMenu} />
      <section
        className="container-panel-edit-modality"
        style={
          seeMenu && window.screen.width > 766
            ? { width: "80%", marginLeft: "20%" }
            : { width: "100%" }
        }
      >
        <header className="container__header">
          <NavMenu setSeeMenu={setSeeMenu} seeMenu={seeMenu} />
        </header>
        <section className="container-edit-modality">
          <div className="container-edit-modality__back">
            <Link className="container-btn-back" to="/figuras">
              <img
                src={back}
                alt="Icono de una flecha apuntando al lado izquierdo"
              />
            </Link>
          </div>
          <div className="container-edit-modality__title">
            <h2>Editar modalidad</h2>
          </div>
          <div className="container-edit-modality__board">
            <div className="item-modality-board">
              <label htmlFor="nameModality">Nombre de la modalidad</label>
              <input
                type="text"
                name="nameModality"
                id="nameModality"
                defaultValue={nameModality}
              />
            </div>
            <div className="item-modality-board">
              <label htmlFor="opportunityModality">Oportunidad</label>
              <input
                type="text"
                name="opportunityModality"
                id="opportunityModality"
                defaultValue={opportunityModality}
              />
            </div>
            <div className="item-modality-board">
              <label htmlFor="closeModality">Cerrar al azar</label>
              <input
                type="text"
                name="closeModality"
                id="closeModality"
                defaultValue={closeModality}
              />
            </div>
            <div className="btn-edit-modality">
              <button type="button" onClick={updateData}>
                Actualizar
              </button>
            </div>
          </div>
        </section>
        <footer className="footer">
          <span>
            Bingo RED. Hecho por
            <a href="https://progracol.com" target="_blank">
              prograCol
            </a>
          </span>
        </footer>
      </section>
    </section>
  );
}
