import stylesCallToAction from "./call-to-action.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CallToAction() {
  return (
    <section className={stylesCallToAction.callToAction}>
      <h4>entrenamiento personalizado</h4>
      <button>
        comenzar
        <div className={stylesCallToAction.boxIcon}>
          <FontAwesomeIcon
            className={stylesCallToAction.icon}
            icon={faArrowRight}
            size="2x"
          />
        </div>
      </button>
      <span className={stylesCallToAction.blurYellowTwo}></span>
    </section>
  );
}
