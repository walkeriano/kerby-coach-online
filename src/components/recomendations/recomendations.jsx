"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import stylesRecomendations from "./recomendations.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Recomendations() {
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const container3Ref = useRef(null);

  useEffect(() => {
    const container1 = container1Ref.current;
    const container2 = container2Ref.current;
    const container3 = container3Ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target } = entry;
          if (entry.isIntersecting) {
            gsap.to(target.children[0], {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power4.out",
            });
            gsap.to(target.children[1], {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power4.out",
            });
          } else {
            gsap.to(target.children[0], {
              opacity: 0,
              x: -100,
              duration: 1,
              ease: "power4.out",
            });
            gsap.to(target.children[1], {
              opacity: 0,
              x: 100,
              duration: 1,
              ease: "power4.out",
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (container1 && container2 && container3) {
      observer.observe(container1);
      observer.observe(container2);
      observer.observe(container3);
    }

    return () => {
      if (container1 && container2 && container3) {
        observer.unobserve(container1);
        observer.unobserve(container2);
        observer.unobserve(container3);
      }
    };
  }, []);

  return (
    <section className={stylesRecomendations.secRecomendations}>
      <div className={stylesRecomendations.titleSection}>
        <h2>
          ellos lo lograron
          <br />
          <span>ahora te toca a ti</span>
        </h2>
        <div className={stylesRecomendations.infoSection}>
          <p>
            <span>+125mil </span>interacciones
          </p>
          <p>
            <span>+12mil </span>seguidores
          </p>
        </div>
      </div>
      <div  ref={container1Ref} className={stylesRecomendations.itemRecomend}>
        <div className={stylesRecomendations.imgItem}>
          <div className={stylesRecomendations.boxMore}>
            <FontAwesomeIcon
              icon={faMagnifyingGlassPlus}
              className={stylesRecomendations.icon}
              size="2x"
            />
          </div>
          <Image
            src="/images/recomend.jpg"
            alt="campeones-fisicoculturismo"
            fill={true}
            className={stylesRecomendations.img}
          />
        </div>
        <div className={stylesRecomendations.textPerson}>
          <h4>{"\""}Todo esto no hubiera sido posible, sin tu guía{"\""}</h4>
          <div className={stylesRecomendations.namePerson}>
            <p>Patricia Pizarro</p>
            <FontAwesomeIcon
              icon={faFacebookF}
              className={stylesRecomendations.icon}
              size="2x"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className={stylesRecomendations.icon}
              size="2x"
            />
          </div>
        </div>
      </div>
      <div  ref={container2Ref} className={stylesRecomendations.itemRecomend}>
        <div className={stylesRecomendations.textPerson}>
          <h4>{"\""}Todo esto no hubiera sido posible, sin tu guía{"\""}</h4>
          <div className={stylesRecomendations.namePerson}>
            <p>Patricia Pizarro</p>
            <FontAwesomeIcon
              icon={faFacebookF}
              className={stylesRecomendations.icon}
              size="2x"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className={stylesRecomendations.icon}
              size="2x"
            />
          </div>
        </div>
        <div  className={stylesRecomendations.imgItem}>
          <div className={stylesRecomendations.boxMoreTwo}>
            <FontAwesomeIcon
              icon={faMagnifyingGlassPlus}
              className={stylesRecomendations.icon}
              size="2x"
            />
          </div>
          <Image
            src="/images/recomend.jpg"
            alt="campeones-fisicoculturismo"
            fill={true}
            className={stylesRecomendations.img}
          />
        </div>
      </div>
      <div  ref={container3Ref} className={stylesRecomendations.itemRecomend}>
        <div className={stylesRecomendations.imgItem}>
          <div className={stylesRecomendations.boxMore}>
            <FontAwesomeIcon
              icon={faMagnifyingGlassPlus}
              className={stylesRecomendations.icon}
              size="2x"
            />
          </div>
          <Image
            src="/images/recomend.jpg"
            alt="campeones-fisicoculturismo"
            fill={true}
            className={stylesRecomendations.img}
          />
        </div>
        <div className={stylesRecomendations.textPerson}>
          <h4>{"\""}Todo esto no hubiera sido posible, sin tu guía{"\""}</h4>
          <div className={stylesRecomendations.namePerson}>
            <p>Patricia Pizarro</p>
            <FontAwesomeIcon
              icon={faFacebookF}
              className={stylesRecomendations.icon}
              size="2x"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className={stylesRecomendations.icon}
              size="2x"
            />
          </div>
        </div>
      </div>
      <span className={stylesRecomendations.blurYellow}></span>
      <span className={stylesRecomendations.blurYellowTwo}></span>
    </section>
  );
}
