"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styleHeader from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Header({ goUp }) {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <header className={styleHeader.header} ref={goUp}>
      <Link href="/">
        <Image
          src="/images/logo-kerby-coach.svg"
          alt="logo-kerby-coach"
          className={styleHeader.logoKerby}
          width={100}
          height={70}
        />
        <Image
          src="/images/logo-kerby-coach-vertical.svg"
          alt="logo-kerby-coach"
          className={styleHeader.logoKerbyVr}
          width={70}
          height={100}
        />
      </Link>
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
          <Image
            src="/images/black-kerby-coach-vertical.svg"
            alt="logo-kerby-coach"
            className={styleHeader.logoKerbyNav}
            width={70}
            height={100}
          />
          <a href="/">Inicio</a>
          <a href="/seleccionar-asesoria">Asesorías</a>
          <a href="/reservar-cita">Reservar cita</a>
          <button onClick={() => setOpenMenu(true)}>
            <FontAwesomeIcon
              className={styleHeader.icon}
              icon={faXmark}
              size="2x"
            />
          </button>

          <section className={styleHeader.socialChannels}>
            <a href="/">
              <FontAwesomeIcon
                className={styleHeader.icon}
                icon={faFacebookF}
                size="2x"
              />
            </a>
            <a href="/">
              <FontAwesomeIcon
                className={styleHeader.icon}
                icon={faInstagram}
                size="2x"
              />
            </a>
            <a href="/">
              <FontAwesomeIcon
                className={styleHeader.icon}
                icon={faTiktok}
                size="2x"
              />
            </a>
          </section>
        </nav>
      )}
    </header>
  );
}
