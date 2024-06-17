import stylesFooter from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer({goUp}) {
  const scrollUp = () => {
    goUp.current.scrollIntoView({behavior: 'smooth'  });
  };

  return (
    <section className={stylesFooter.footer}>
        <button onClick={scrollUp}>
            <FontAwesomeIcon icon={faChevronUp} size="2x" className={stylesFooter.icon} />
        </button>
      <section className={stylesFooter.leftFooter}>
        <img
          src="/images/logo-kerby-coach.svg"
          alt="logo-kb"
          className={stylesFooter.img}
        />
        <p>
          Copyright 2024
          <br />
          Todos los derechos reservados.
        </p>
      </section>
      <section className={stylesFooter.rightFooter}>
        <ul>
          <li>993 485 547</li>
          <li>contacto@kerbycoach.com</li>
          <li>kerbycoach.com</li>
        </ul>
        <div className={stylesFooter.chanelsContact}>
          <a href="/">
            <FontAwesomeIcon
              icon={faFacebookF}
              className={stylesFooter.icon}
              size="2x"
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              icon={faInstagram}
              className={stylesFooter.icon}
              size="2x"
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              icon={faTiktok}
              className={stylesFooter.icon}
              size="2x"
            />
          </a>
        </div>
      </section>
    </section>
  );
}
