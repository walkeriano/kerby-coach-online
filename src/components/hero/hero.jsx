import stylesHero from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";
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
          <Link href="/asesoria-regular" className={stylesHero.btnFirst}>
            Personalizar plan
            <div className={stylesHero.iBtn}>
              <FontAwesomeIcon
                className={stylesHero.icon}
                icon={faArrowRight}
                size="2x"
              />
            </div>
          </Link>
          <Link href="/reservar-cita"  className={stylesHero.btnTwo}>
            agendar cita
            <div className={stylesHero.iBtn}>
              <FontAwesomeIcon
                className={stylesHero.icon}
                icon={faArrowRight}
                size="2x"
              />
            </div>
          </Link>
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
        <Image
          src="/images/ker-pic.png"
          className={stylesHero.bg}
          alt="kerby-coach"
          fill={true}
          priority={true}
        />
      </section>
      <div className={stylesHero.blurYellow}></div>
    </section>
  );
}
