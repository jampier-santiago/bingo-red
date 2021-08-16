// Dependencias
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Components
import Menu from "../../components/Menu/Menu";
import Nav from "../../components/NavMenu/NavMenu";

// Assets
import back from "../../assets/icons/left-arrow.svg";

// Style imports
import "./newFigure.scss";

export default function NewFigure() {
  const MySwal = withReactContent(Swal);

  const positions = 25;

  const [seeMenu, setSeeMenu] = useState(localStorage.getItem("seeMenu"));
  const [modalities, setModalities] = useState([]);
  const [seeBodyPanel, setSeeBodypanel] = useState(false);
  const [boardPositions, setBoardPositions] = useState([]);
  const [nameFigure, setNameFigure] = useState(true);

  // Función para traer todas las modalidades
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
        const temporaryModalities = [];
        const temporaryData = JSON.parse(result);
        Object.values(temporaryData.data).forEach((modality) => {
          temporaryModalities.push({ name: modality.name, id: modality.id });
        });

        setModalities(temporaryModalities);
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

  // Función para detectar el focus dentro de los inputs del modal
  function activeInput(e) {
    const input = document.getElementById(`${e.target.id}`);
    const borderInput = document.getElementById(
      `border${e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)}`
    );
    const labelInput = document.getElementById(
      `label${e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)}`
    );
    const deleteElement = document.getElementById("deleteElement");

    labelInput.classList.add("active");
    input.classList.add("active");
    borderInput.classList.add("active");

    deleteElement.style.display = "none";
  }

  // Función para detectar cuando se deja de tener el focus sobre alguno de los inputs
  function onBlurInput(e) {
    const input = document.getElementById(`${e.target.id}`);
    const borderInput = document.getElementById(
      `border${e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)}`
    );
    const labelInput = document.getElementById(
      `label${e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)}`
    );

    labelInput.classList.remove("active");
    borderInput.classList.remove("active");

    if (input.value == "0" || input.value == "") {
      input.classList.remove("active");
    } else {
      labelInput.style.top = "-16px";
    }
  }

  // Función para revisar el estado del dropdown de modalidades
  function changeInInputSelect() {
    const input = document.getElementById("modalities");

    if (input.value != "0") {
      setSeeBodypanel(true);
    }
  }

  // Función para inicializar las posiciones del tablero
  function initPositions() {
    const board = [];

    for (let index = 0; index < positions; index++) {
      board.push(false);
    }

    setBoardPositions(board);
  }

  // Función para validar el campo del nombre de la figura
  function validateNameFigure() {
    const input = document.getElementById("nameNewFigure");
    if (input.value !== "" && input.value.trim() !== "") {
      setNameFigure(false);
    } else {
      setNameFigure(true);
    }
  }

  // Función para crear una nueva figura
  function createFigure() {
    const valueNameFigure = document.getElementById("nameNewFigure").value;
    const idGroup = document.getElementById("modalities").value;

    if (idGroup != 0) {
      const data = {
        figureName: valueNameFigure,
        idFigureGroup: idGroup,
        positions: boardPositions,
      };

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", localStorage.getItem("token"));

      var raw = JSON.stringify(data);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/figure",
        requestOptions
      )
        .then((response) => response.text())
        .then(() =>
          MySwal.fire({
            icon: "success",
            title: "Exito",
            text: "Figura creada con exito.",
          }).then(() => {
            window.location = "/figuras";
          })
        )
        .catch(() => {
          MySwal.fire({
            icon: "error",
            title: "Error en envio de datos",
            text: "ocurrio un error subiendo los datos, vuelvalo a intentar.",
          });
        });
    } else {
      MySwal.fire({
        icon: "error",
        title: "Datos incompletos",
        text: "Falta seleccionar la modalidad de la figura.",
      });
    }
  }

  useEffect(() => {
    document.title = "Bingo Red - Nueva Figura";

    getModalities();
    initPositions();
  }, []);

  return (
    <section className="container">
      <Menu seeMenu={seeMenu} />
      <section
        className="container-panel-new-figure"
        style={
          seeMenu && window.screen.width > 766
            ? { width: "80%", marginLeft: "20%" }
            : { width: "100%" }
        }
      >
        <header className="container__header">
          <Nav setSeeMenu={setSeeMenu} seeMenu={seeMenu} />
        </header>
        <div className="container-panel-new-figure__info">
          <div className="header-panel-new-figure">
            <Link className="header-panel-new-figure__back" to="/figuras">
              <img
                src={back}
                alt="Icono de una flecha apuntando al lado izquierdo"
              />
            </Link>
            <div className="header-panel-new-figure__options">
              <span htmlFor="modalities" id="labelModalities">
                Elegir modalidad
              </span>
              <select
                name="modalities"
                id="modalities"
                onFocus={activeInput}
                onBlur={onBlurInput}
                onChange={changeInInputSelect}
              >
                <option value="0" id="deleteElement"></option>
                {Object.values(modalities).map((modality, index) => {
                  return (
                    <option value={modality.id} key={index}>
                      {modality.name}
                    </option>
                  );
                })}
              </select>
              <span
                className="border-input-modalities"
                id="borderModalities"
              ></span>
            </div>
          </div>

          {seeBodyPanel && (
            <section className="body-panel-new-figure">
              <div className="body-panel-new-figure__header">
                <h2>Añadir nueva figura</h2>
              </div>
              <div className="body-panel-new-figure__info">
                <div className="name-new-figure">
                  <label htmlFor="nameNewFigure" id="labelNameNewFigure">
                    Nombre de figura
                  </label>
                  <input
                    type="text"
                    name="nameNewFigure"
                    id="nameNewFigure"
                    onFocus={activeInput}
                    onBlur={onBlurInput}
                    onChange={validateNameFigure}
                  />
                  <span
                    className="border-input-name"
                    id="borderNameNewFigure"
                  ></span>
                </div>
                <div className="board-new-figure">
                  {Object.values(boardPositions).map((position, i) => {
                    return (
                      <div
                        key={i}
                        className={
                          position ? "position-card active" : "position-card"
                        }
                        style={
                          i == Math.floor(positions / 2)
                            ? {
                                backgroundColor: "rgb(83, 83, 83)",
                                borderColor: "rgb(170, 58, 58)",
                              }
                            : {}
                        }
                        onClick={() => {
                          if (i != Math.floor(positions / 2)) {
                            const temporyPositions = [...boardPositions];
                            temporyPositions[i] = !temporyPositions[i];
                            setBoardPositions(temporyPositions);
                          }
                        }}
                      ></div>
                    );
                  })}
                </div>
                <div className="container-btn-new-figure">
                  <button
                    disabled={nameFigure}
                    type="button"
                    onClick={createFigure}
                  >
                    Guardar
                  </button>
                </div>
                <footer className="footer">
                  <span>
                    Bingo RED. Hecho por{" "}
                    <a href="https://progracol.com" target="_blank">
                      prograCol
                    </a>
                  </span>
                </footer>
              </div>
            </section>
          )}
        </div>
      </section>
    </section>
  );
}
