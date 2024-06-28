import Image from "next/image";
import Link from "next/link";
import stylesBannerMeet from "./banner-meet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BannerMeet() {
  return (
    <section className={stylesBannerMeet.bannerSection}>
      <div className={stylesBannerMeet.infoBanner}>
        <h2>asesoría exclusiva</h2>
        <p>Cita privada con el coach</p>
      </div>
      <Link href="/reservar-cita" className={stylesBannerMeet.button}>
        Elegir fecha
        <div className={stylesBannerMeet.boxIcon}>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={stylesBannerMeet.icon}
            size="2x"
          />
        </div>
      </Link>
      <div className={stylesBannerMeet.bgPerson}>
        <Image
          src="/images/ker-tre.png"
          alt="kerby-perfil"
          fill={true}
          className={stylesBannerMeet.img}
        />
      </div>
      <span className={stylesBannerMeet.degrad}></span>
      <span className={stylesBannerMeet.degradTwo}></span>
      <span className={stylesBannerMeet.whiteLight}></span>
      <span className={stylesBannerMeet.whiteLightTwo}></span>
      <Image
        src="/images/bg-banner-call.jpg"
        alt="image-bg-gym"
        fill={true}
        className={stylesBannerMeet.bgImage}
      />
      <span className={stylesBannerMeet.yellowLight}></span>
    </section>
  );
}
