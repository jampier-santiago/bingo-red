// Dependencies
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Assets
import iconAdd from "../../assets/icons/add.svg";
import iconDelete from "../../assets/icons/delete.svg";
import iconEdit from "../../assets/icons/edit.svg";

// Style imports
import "./tableModalities.scss";

export default function TableModalities() {
  const MySwal = withReactContent(Swal);

  const [modalities, setModalities] = useState(null);

  // función para traer las modalidades
  function getModalities() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/groupfigure?&Authorization=${localStorage.getItem(
        "token"
      )}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const temporaryData = JSON.parse(result);
        setModalities(temporaryData.data);
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
    getModalities();
  }, []);

  return (
    <section className="container-table-modalities">
      <div className="container-table-modalities__add">
        <div className="container-add">
          <img src={iconAdd} alt="Icono del signno +" />
        </div>
      </div>
      <div className="container-table-modalities__table">
        <div className="header-table-modalities">
          <div className="header-table-modalities__item">
            <span>Nombre de la modalidad</span>
          </div>
          <div className="header-table-modalities__item">
            <span>Oportunidad</span>
          </div>
          <div className="header-table-modalities__item">
            <span>Cerrar al azar</span>
          </div>
          <div className="header-table-modalities__item">
            <span>Accciones</span>
          </div>
        </div>
        <div className="body-table-modalities">
          {modalities &&
            Object.values(modalities).map((modality, index) => {
              return (
                <div key={index} className="row-table-modalities">
                  <span>{modality.name}</span>
                  <span>{modality.opportunity}</span>
                  <span>{modality.closeAt}</span>

                  <div className="actions-table-modalities">
                    <Link to={`/modalidades/${modality.id}`}>
                      <img src={iconEdit} alt="Icono de un lápiz" />
                    </Link>
                    <img src={iconDelete} alt="Icono de una X" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
