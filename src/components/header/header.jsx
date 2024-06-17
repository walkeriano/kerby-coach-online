"use client";
import { useState } from "react";
import styleHeader from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header({goUp}) {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <header className={styleHeader.header} ref={goUp}>
      <img
        src="/images/logo-kerby-coach.svg"
        alt="logo-kerby-coach"
        className={styleHeader.logoKerby}
      />
      {openMenu ? (
        <button
          className={styleHeader.btnMenuOn}
          onClick={() => setOpenMenu(false)}
        >
          <FontAwesomeIcon
            className={styleHeader.icon}
            icon={faBars}
            size="2x"
          />
        </button>
      ) : (
        <nav className={styleHeader.nav}>
          <a href="/">Asesorías</a>
          <a href="/">Recomendaciones</a>
          <a href="/">Preguntas</a>
          <button onClick={() => setOpenMenu(true)}>
            <FontAwesomeIcon
              className={styleHeader.icon}
              icon={faXmark}
              size="2x"
            />
          </button>
        </nav>
      )}
    </header>
  );
}
