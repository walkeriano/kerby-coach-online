import stylesServices from "./services.module.css";
import ItemServices from "./i-services";


export default function Services() {
 

  
  return (
    <section className={stylesServices.firstSection}>
      <section className={stylesServices.secOne}>
        <h2>
          + plan de alimentación
          <br />
          + rutinas personalizadas
          <br />
          <span>+ mentoría & mindset</span>
        </h2>
        <p>
          Alcanza tu objetivo físico en <span>tiempo record</span>
        </p>
      </section>
      <ItemServices/>
    </section>
  );
}
