import Image from "next/image";
import stylesBannerMeet from "./banner-meet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BannerMeet() {
  return (
    <section className={stylesBannerMeet.bannerSection}>
      <div className={stylesBannerMeet.infoBanner}>
        <h2>cita privada exclusiva</h2>
        <p>Resolvamos juntos dudas y consultas</p>
      </div>
      <button>
        Elegir fecha
        <div className={stylesBannerMeet.boxIcon}>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={stylesBannerMeet.icon}
            size="2x"
          />
        </div>
      </button>
      <div className={stylesBannerMeet.bgPerson}>
        <Image
          src="/images/ker-tre.png"
          alt="kerby-perfil"
          fill={true}
          className={stylesBannerMeet.img}
        />
      </div>
      <span className={stylesBannerMeet.degrad} ></span>
      <span className={stylesBannerMeet.degradTwo} ></span>
      <Image
        src="/images/bg-banner-call.jpg"
        alt="image-bg-gym"
        fill={true}
        className={stylesBannerMeet.bgImage}
      />
    </section>
  );
}
