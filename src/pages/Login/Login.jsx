//Dependencies
import { React } from "react";
import Swal from "sweetalert2";

// Style imports
import "./login.scss";

// Assets
import logo from "../../assets/images/logo.png";

export default function Login() {
  // Función para detectar el focus dentro de los inputs del modal
  function activeInput(e) {
    const input = document.getElementById(`${e.target.id}`);
    const borderInput = document.getElementById(
      `border${e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)}`
    );
    const labelInput = document.getElementById(
      `label${e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)}`
    );

    if (input.value !== "" && input.value.trim() !== "") {
      if (borderInput.classList.contains("warning")) {
        borderInput.classList.remove("warning");
      }

      if (labelInput.classList.contains("warning")) {
        labelInput.classList.remove("warning");
      }

      borderInput.classList.add("on");
      labelInput.classList.add("on");
    } else {
      if (borderInput.classList.contains("on")) {
        borderInput.classList.remove("on");
      }

      if (labelInput.classList.contains("on")) {
        labelInput.classList.remove("on");
      }

      borderInput.classList.add("warning");
      labelInput.classList.add("warning");
    }
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

    if (input.value !== "" && input.value.trim() !== "") {
      input.style.height = "20px";
    } else {
      input.style.height = "0px";
      labelInput.style.fontSize = "14px";
    }

    if (borderInput.classList.contains("on")) {
      borderInput.classList.remove("on");
    }

    if (labelInput.classList.remove("on")) {
      labelInput.classList.remove("on");
    }
  }

  // Función para validar los datos
  function validateData() {
    const inputEmail = document.getElementById("inputEmail");
    const inputPassword = document.getElementById("inputPassword");

    if (inputEmail.value !== "" && inputPassword.value !== "") {
      if (inputEmail.value.trim() !== "" && inputPassword.value.trim() !== "") {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        //   username: "superadmin",
        //   password: "bingola22",
        // });
        var raw = JSON.stringify({
          username: inputEmail.value.trim(),
          password: inputPassword.value.trim(),
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://java.bocetos.co/userred-0.0.1-SNAPSHOT/auth",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            if (JSON.parse(result)) {
              const data = JSON.parse(result);
              const token = data.Authorization;

              localStorage.setItem("token", token);
              localStorage.setItem("userName", data.name);
              window.location = "/dashboard";
            }
          })
          .catch(() =>
            Swal.fire({
              icon: "error",
              title: "Error en inicio de sesion",
              text: "Los datos son incorrectos, inténtelo nuevamente.",
            })
          );
      } else {
        Swal.fire({
          icon: "error",
          title: "Datos incompletos",
          text: "Uno de los campos esta vacío",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Datos incompletos",
        text: "Uno de los campos esta vacío",
      });
    }
  }

  return (
    <section className="container-login">
      <div className="modal-login">
        <form>
          <div className="modal-login__image">
            <img src={logo} alt="Logo de Bingo Red" />
          </div>

          <div className="modal-login__container-input">
            <div className="container-input-form">
              <label
                htmlFor="inputEmail"
                id="labelInputEmail"
                className="label-input-form"
              >
                Correo
              </label>
              <input
                type="email"
                name="inputEmail"
                id="inputEmail"
                onChange={activeInput}
                onFocus={activeInput}
                onBlur={onBlurInput}
              />
              <span className="line-input-form" id="borderInputEmail"></span>
            </div>
            <div className="container-input-form">
              <label
                htmlFor="inputPassword"
                id="labelInputPassword"
                className="label-input-form"
              >
                Contraseña
              </label>
              <input
                type="password"
                name="inputPassword"
                id="inputPassword"
                onChange={activeInput}
                onFocus={activeInput}
                onBlur={onBlurInput}
              />
              <span className="line-input-form" id="borderInputPassword"></span>
            </div>
          </div>

          <div className="modal-login__btn">
            <button type="button" onClick={validateData}>
              <span className="text-button">iniciar sesión</span>
              <span className="border-button"></span>
            </button>
            <span>Version: 23 de Febrero 2020</span>
          </div>
        </form>
      </div>
    </section>
  );
}
