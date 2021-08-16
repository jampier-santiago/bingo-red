// Dependencies
import { React, useEffect, useState } from "react";

// Components
import Menu from "../../components/Menu/Menu";
import NavMenu from "../../components/NavMenu/NavMenu";
import TableFigures from "../../components/TableFigures/TableFigures";
import TableModalities from "../../components/TableModalities/TableModalities";

// Style imports
import "./listOfFigures.scss";

export default function ListOfFigures() {
  const [seeMenu, setSeeMenu] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    document.title = "Bingo RED - Figuras";
  }, []);

  return (
    <section className="container small">
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
          <div className="container-figures">
            <div className="container-figures__groups">
              <div
                className={
                  activeTab == 1
                    ? "item-figures-group active"
                    : "item-figures-group"
                }
                onClick={() => {
                  setActiveTab(1);
                }}
              >
                <h2>lista con figuras</h2>
              </div>
              <div
                className={
                  activeTab == 2
                    ? "item-figures-group active"
                    : "item-figures-group"
                }
                onClick={() => {
                  setActiveTab(2);
                }}
              >
                <h2>Lista con modalidades</h2>
              </div>
            </div>
            {activeTab == 1 && <TableFigures seeMenu={seeMenu} />}
            {activeTab == 2 && <TableModalities />}
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
    </section>
  );
}
