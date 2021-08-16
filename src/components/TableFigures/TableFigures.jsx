// Dependencies
import { useEffect, React, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Assets
import iconAdd from "../../assets/icons/add.svg";
import iconEdit from "../../assets/icons/edit.svg";
import close from "../../assets/icons/cancel.svg";

// Style imports
import "./tableFigures.scss";

export default function TableFigures() {
  const MySwal = withReactContent(Swal);

  const [figures, setFigures] = useState(null);

  // Función para traer la información de las figuras
  function getFigures() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/figure",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const temporaryData = JSON.parse(result);
        console.log(temporaryData.data);
        setFigures(temporaryData.data);
      })
      .catch(() => {
        MySwal.fire({
          icon: "error",
          title: "Error en el servidor",
          text: "Hemos tenido un problema para traer los datos, inténtelo en otra ocasión.",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location = "/";
          }
        });
      });
  }

  useEffect(() => {
    getFigures();
  }, []);

  return (
    <section className="container-table-figures">
      <div className="container-table-figures__add">
        <Link className="container-add" to="nueva-figura">
          <img src={iconAdd} alt="Icono del signo +" />
        </Link>
      </div>

      <div className="container-table-figures__body">
        {figures &&
          figures.map((figure, index) => {
            if (!figure.deleteAt) {
              return (
                <div key={index} className="card-figure">
                  <div className="card-figure__header">
                    <span>{figure.name}</span>
                    <div>
                      <Link to={`/figuras/${figure.id}`}>
                        <img src={iconEdit} alt="Icono de un lápiz" />
                      </Link>

                      <img src={close} alt="Icono de una X" />
                    </div>
                  </div>
                  <div className="card-figure__body">
                    {Object.values(figure.positionsWinner).map(
                      (position, i) => {
                        return (
                          <div
                            key={i}
                            className={
                              position
                                ? "position-card active"
                                : "position-card"
                            }
                          ></div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            }
          })}
        {!figures && (
          <section className="container-icon-loader">
            <div className="icon-loader"></div>
          </section>
        )}
      </div>
    </section>
  );
}
