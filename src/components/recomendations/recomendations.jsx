import stylesRecomendations from "./recomendations.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Recomendations() {
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
      <div className={stylesRecomendations.itemRecomend}>
        <div className={stylesRecomendations.imgItem}>
          <div className={stylesRecomendations.boxMore}>
            <FontAwesomeIcon
              icon={faMagnifyingGlassPlus}
              className={stylesRecomendations.icon}
              size="2x"
            />
          </div>
          <Image src="/images/recomend.jpg" alt="campeones-fisicoculturismo" fill={true} className={stylesRecomendations.img} />
        </div>
        <div className={stylesRecomendations.textPerson}>
          <h4>"Todo esto no hubiera sido posible, sin tu guía"</h4>
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
      <div className={stylesRecomendations.itemRecomend}>
        <div className={stylesRecomendations.textPerson}>
          <h4>"Todo esto no hubiera sido posible, sin tu guía"</h4>
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
        <div className={stylesRecomendations.imgItem}>
          <div className={stylesRecomendations.boxMoreTwo}>
            <FontAwesomeIcon
              icon={faMagnifyingGlassPlus}
              className={stylesRecomendations.icon}
              size="2x"
            />
          </div>
          <Image src="/images/recomend.jpg" alt="campeones-fisicoculturismo" fill={true} className={stylesRecomendations.img} />
        </div>
      </div>
      <div className={stylesRecomendations.itemRecomend}>
        <div className={stylesRecomendations.imgItem}>
          <div className={stylesRecomendations.boxMore}>
            <FontAwesomeIcon
              icon={faMagnifyingGlassPlus}
              className={stylesRecomendations.icon}
              size="2x"
            />
          </div>
          <Image src="/images/recomend.jpg" alt="campeones-fisicoculturismo" fill={true} className={stylesRecomendations.img} />
        </div>
        <div className={stylesRecomendations.textPerson}>
          <h4>"Todo esto no hubiera sido posible, sin tu guía"</h4>
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
