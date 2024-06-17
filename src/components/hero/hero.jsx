import stylesHero from "./hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section className={stylesHero.sectionHero}>
      <div className={stylesHero.info}>
        <div className={stylesHero.infoTitle}>
          <h1>
            <span>Coach online</span>
            <br />
            fisicoculturismo, fitness
            <br />& vida saludable
          </h1>
          <h2>
            Plan completo de nutrición, suplementación, entrenamiento
            personalizado y más ...
          </h2>
        </div>
        <div className={stylesHero.btnsHero} >
          <button className={stylesHero.btnFirst} type="button">
            cotiza aquí
            <div className={stylesHero.iBtn}>
              <FontAwesomeIcon
                className={stylesHero.icon}
                icon={faArrowRight}
                size="2x"
              />
            </div>
          </button>
          <button  className={stylesHero.btnTwo} type="button">
            agendar cita
            <div className={stylesHero.iBtn}>
              <FontAwesomeIcon
                className={stylesHero.icon}
                icon={faArrowRight}
                size="2x"
              />
            </div>
          </button>
        </div>
      </div>
      <section className={stylesHero.socialChannels}>
        <a href="/">
          <FontAwesomeIcon
            className={stylesHero.icon}
            icon={faFacebookF}
            size="2x"
          />
        </a>
        <a href="/">
          <FontAwesomeIcon
            className={stylesHero.icon}
            icon={faInstagram}
            size="2x"
          />
        </a>
        <a href="/">
          <FontAwesomeIcon
            className={stylesHero.icon}
            icon={faTiktok}
            size="2x"
          />
        </a>
      </section>
      <section className={stylesHero.bgImage}>
        <span></span>
        <img
          src="/images/ker-pic.png"
          className={stylesHero.bg}
          alt="kerby-coach"
        />
      </section>
      <div className={stylesHero.blurYellow}></div>
    </section>
  );
}
