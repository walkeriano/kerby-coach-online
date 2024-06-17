"use client";
import { useState } from "react";
import stylesServices from "./services.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const [showDetails, setShowDetails] = useState(true);
  const [showDetailsTwo, setShowDetailsTwo] = useState(true);

  return (
    <section className={stylesServices.firstSection}>
      <section className={stylesServices.secOne}>
        <h2>
          + plan de alimentación,
          <br />
          + rutinas personalizadas,
          <br />
          <span>+ mentoría & mindset</span>
        </h2>
        <p>
          Alcanza tu objetivo físico en <span>tiempo record</span>
        </p>
      </section>
      <section className={stylesServices.secTwo}>
        <section className={stylesServices.serviceItem}>
          {showDetails ? (
            <div className={stylesServices.contState}>
              <div className={stylesServices.detailsItem}>
                <div className={stylesServices.infoLeft}>
                  <h3>Asesoría regular</h3>
                  <p>Objetivo fitness, estilo de vido y/o vida saludable.</p>
                </div>
                
              </div>
              <div className={stylesServices.btnServiceLeft}>
                <button onClick={() => setShowDetails(false)}>
                  ver detalles
                  <div className={stylesServices.boxIcon}>
                    <FontAwesomeIcon
                      className={stylesServices.icon}
                      icon={faArrowRight}
                      size="2x"
                    />
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className={stylesServices.newState}>
              <div className={stylesServices.detailsItem}>
                <div className={stylesServices.infoLeftState}>
                  <h3>Asesoría regular</h3>
                  <p>Objetivo fitness, estilo de vido y/o vida saludable.</p>
                </div>
                <button
                  onClick={() => setShowDetails(true)}
                  className={stylesServices.btnCloseService}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="2x"
                    className={stylesServices.icon}
                  />
                </button>
              </div>
              <div className={stylesServices.btnServiceLeft}>
                <div className={stylesServices.detail}>
                  <Image
                    src="/images/heart.svg"
                    alt="icon-heart"
                    width={40}
                    height={40}
                  />
                  <p>Recomposición corporal</p>
                </div>
                <div className={stylesServices.detail}>
                  <Image
                    src="/images/muscle.svg"
                    alt="icon-muscle"
                    width={40}
                    height={40}
                  />
                  <p>Ganancia de masa muscular</p>
                </div>
                <div className={stylesServices.detail}>
                  <Image
                    src="/images/pesa.svg"
                    alt="icon-pesa"
                    width={40}
                    height={40}
                  />
                  <p>disminución de grasa corporal</p>
                </div>
              </div>
              <button className={stylesServices.buyBtn}>
                reservar
                <div className={stylesServices.boxIcon}>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    alt="Cart"
                    className={stylesServices.icon}
                  />
                </div>
              </button>
            </div>
          )}
          <Image
            src="/images/banner-one.jpg"
            alt="banner-servicio"
            fill={true}
            className={stylesServices.img}
          />
        </section>
        <section className={stylesServices.serviceItem}>
          {showDetailsTwo ? (
            <div className={stylesServices.contState}>
              <div className={stylesServices.detailsItem}>
                <div className={stylesServices.infoRight}>
                  <h3>Asesoría competitiva</h3>
                  <p>Múltiples categorías de fisicoculturismo y más.</p>
                </div>
              </div>
              <div className={stylesServices.btnServiceRight}>
                <button onClick={() => setShowDetailsTwo(false)}>
                  <div className={stylesServices.boxIcon}>
                    <FontAwesomeIcon
                      className={stylesServices.icon}
                      icon={faArrowRight}
                      size="2x"
                    />
                  </div>
                  ver detalles
                </button>
              </div>
            </div>
          ) : (
            <div className={stylesServices.newStateRight}>
              <div className={stylesServices.detailsItem}>
                <button
                  onClick={() => setShowDetailsTwo(true)}
                  className={stylesServices.btnCloseService}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="2x"
                    className={stylesServices.icon}
                  />
                </button>
                <div className={stylesServices.infoRightState}>
                  <h3>Asesoría competitiva</h3>
                  <p>Múltiples categorías de fisicoculturismo y más.</p>
                </div>
              </div>
              <div className={stylesServices.btnServiceRight}>
                <div className={stylesServices.detail}>
                  <p>Fase definición</p>
                  <Image
                    src="/images/definition.svg"
                    alt="icon-heart"
                    width={45}
                    height={45}
                  />
                </div>
                <div className={stylesServices.detail}>
                  <p>Fase volumen</p>
                  <Image
                    src="/images/person.svg"
                    alt="icon-muscle"
                    width={45}
                    height={45}
                  />
                </div>
              </div>
              <button className={stylesServices.buyBtnRight}>
                <div className={stylesServices.boxIcon}>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    alt="Cart"
                    className={stylesServices.icon}
                  />
                </div>
                adquirir
              </button>
            </div>
          )}
          <Image
            src="/images/banner-two.jpg"
            alt="banner-servicio"
            fill={true}
            className={stylesServices.img}
          />
        </section>
      </section>
    </section>
  );
}
