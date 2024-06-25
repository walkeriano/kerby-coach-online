"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
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

  const containerRef = useRef(null);
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    const leftDiv = leftDivRef.current;
    const rightDiv = rightDivRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(leftDiv, {
            opacity: 1,
            x: 0,
            duration: 7,
            ease: "power4.out",
          });
          gsap.to(rightDiv, {
            opacity: 1,
            x: 0,
            duration: 7,
            ease: "power4.out",
          });
        } else {
          gsap.to(leftDiv, {
            opacity: 0,
            x: -100,
            duration: 7,
            ease: "power4.out",
          });
          gsap.to(rightDiv, {
            opacity: 0,
            x: 100,
            duration: 7,
            ease: "power4.out",
          });
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, []);


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
      <section ref={containerRef} className={stylesServices.secTwo}>
        <section ref={leftDivRef} className={stylesServices.serviceItem}>
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
                  más detalles
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
                  <p>Objetivo fitness, estilo de vida y/o vida saludable.</p>
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
                comenzar
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
        <section ref={rightDivRef} className={stylesServices.serviceItem}>
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
                  más detalles
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
                comenzar
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
