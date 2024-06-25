import { useState, useRef, useEffect } from "react";
import stylesAsesoria from "./form-regular.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function FormCompeticion() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const formRef = useRef(null);
  const [competicion, setCompeticion] = useState(false);
  const [fecha, setFecha] = useState(false);
  const [farmacologia, setFarmacologia] = useState(false);
  const [suplement, setSuplement] = useState(false);
  const [farmaco, setFarmaco] = useState(false);
  const [cardio, setCardio] = useState(false);
  const [medico, setMedico] = useState(false);
  const [alergia, setAlergia] = useState(false);
  const [lesion, setLesion] = useState(false);

  const scrollToQuestion = (index) => {
    const questionElement = formRef.current.children[index];
    questionElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNext = () => {
    if (currentQuestion < formRef.current.children.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      scrollToQuestion(currentQuestion + 1);
    }
    console.log("next");
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      scrollToQuestion(currentQuestion - 1);
    }
    console.log("prev");
  };

  useEffect(() => {
    const calculateProgress = () => {
      const totalQuestions = formRef.current?.children.length || 1;
      return (currentQuestion / (totalQuestions - 1)) * 100;
    };

    setProgress(calculateProgress());
  }, [currentQuestion]);

  return (
    <section className={stylesAsesoria.containerRegular}>
      <form ref={formRef} className={stylesAsesoria.formContainer}>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría para competición</p>
            <h2>Datos personales</h2>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div className={stylesAsesoria.boxInput}>
              <label htmlFor="">Nombres:</label>
              <input
                type="text"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </div>
            <div className={stylesAsesoria.boxInput}>
              <label htmlFor="">Apellidos:</label>
              <input
                type="text"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </div>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div className={stylesAsesoria.boxInput}>
              <label htmlFor="">Nº de celular:</label>
              <input
                type="text"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </div>
            <div className={stylesAsesoria.boxInput}>
              <label htmlFor="">Email:</label>
              <input
                type="text"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </div>
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
          <p>Solicitud de Asesoría para competición</p>
            <h2>¿Cuál es tu edad?</h2>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div className={stylesAsesoria.boxInputSelect}>
              <Image
                src="/images/sujeto-4.png"
                width={95}
                height={120}
                alt="icon-select"
              />
              <p>18-25 Años</p>
            </div>
            <div className={stylesAsesoria.boxInputSelect}>
              <p>25-35 Años</p>
              <Image
                src="/images/sujeto-2.png"
                width={95}
                height={120}
                alt="icon-select"
              />
            </div>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div className={stylesAsesoria.boxInputSelect}>
              <Image
                src="/images/sujeto-3.png"
                width={95}
                height={120}
                alt="icon-select"
              />
              <p>35-48 Años</p>
            </div>
            <div className={stylesAsesoria.boxInputSelect}>
              <p>48-65 Años</p>
              <Image
                src="/images/sujeto-1.png"
                width={95}
                height={120}
                alt="icon-select"
              />
            </div>
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
          <p>Solicitud de Asesoría para competición</p>
            <h2>Especifica tu peso y altura</h2>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div className={stylesAsesoria.boxInput}>
              <label htmlFor="">Peso - kg:</label>
              <input
                type="text"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </div>
            <div className={stylesAsesoria.boxInput}>
              <label htmlFor="">Altura - mts:</label>
              <input
                type="text"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </div>
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
          <p>Solicitud de Asesoría para competición</p>
            <h2>¿Has competido anteriormente?</h2>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div
              onClick={() => setCompeticion(true)}
              className={stylesAsesoria.boxConditional}
            >
              <p>Claro que si! &#128077;</p>
            </div>
            <div className={stylesAsesoria.boxConditional}>
              <p>No, nunca &#128683;</p>
            </div>
            {competicion && (
              <section className={stylesAsesoria.allExtras}>
                <div className={stylesAsesoria.inputExtraTwo}>
                  <p>¿En qué categoría?</p>
                  <input
                    type="text"
                    placeholder="Escribir aquí..."
                    className={stylesAsesoria.input}
                  />
                  <button onClick={() => setCompeticion(false)}>
                    <FontAwesomeIcon icon={faXmark} size="1x" />
                  </button>
                </div>
                <div className={stylesAsesoria.inputExtraTwo}>
                  <p>¿Cuántas veces?</p>
                  <input
                    type="text"
                    placeholder="Escribir aquí..."
                    className={stylesAsesoria.input}
                  />
                  <button onClick={() => setCompeticion(false)}>
                    <FontAwesomeIcon icon={faXmark} size="1x" />
                  </button>
                </div>
              </section>
            )}
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
          <p>Solicitud de Asesoría para competición</p>
            <h2>¿Piensas competir pronto?</h2>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div
              onClick={() => setFecha(true)}
              className={stylesAsesoria.boxConditional}
            >
              <p>Claro que si! &#128077;</p>
            </div>
            <div className={stylesAsesoria.boxConditional}>
              <p>En el futuro &#128170;</p>
            </div>
            {fecha && (
              <div className={stylesAsesoria.inputExtra}>
                <p>¿Cuándo?</p>
                <input
                  type="text"
                  placeholder="Escribir aquí..."
                  className={stylesAsesoria.input}
                />
                <button onClick={() => setFecha(false)}>
                  <FontAwesomeIcon icon={faXmark} size="1x" />
                </button>
              </div>
            )}
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
          <p>Solicitud de Asesoría para competición</p>
            <h2>¿Cuántas veces al día comes? plan nutricional</h2>
          </section>
          <section className={stylesAsesoria.contInputsVcl}>
            <label htmlFor="inpComida" className={stylesAsesoria.boxInputHzl}>
              <p>2 - 3 veces al día &#9996;</p>
              <input
                type="radio"
                id="inpComida"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </label>
            <label htmlFor="inpComida" className={stylesAsesoria.boxInputHzl}>
              <p>3 - 5 veces al día &#128588;</p>
              <input
                type="radio"
                id="inpComida"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </label>
            <label htmlFor="inpComida" className={stylesAsesoria.boxInputHzl}>
              <p>5+ veces al día &#128170;</p>
              <input
                type="radio"
                id="inpComida"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </label>
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
          <p>Solicitud de Asesoría para competición</p>
            <h2>¿Utilizas suplementos?</h2>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div
              onClick={() => setSuplement(true)}
              className={stylesAsesoria.boxConditional}
            >
              <p>Claro que si! &#128077;</p>
            </div>
            <div className={stylesAsesoria.boxConditional}>
              <p>No, nunca &#128683;</p>
            </div>
            {suplement && (
              <div className={stylesAsesoria.inputExtra}>
                <p>¿Cuáles?</p>
                <input
                  type="text"
                  placeholder="Escribir aquí..."
                  className={stylesAsesoria.input}
                />
                <button onClick={() => setSuplement(false)}>
                  <FontAwesomeIcon icon={faXmark} size="1x" />
                </button>
              </div>
            )}
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría para competición</p>
            <h2>¿Has consumido fármacos deportivos?</h2>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div
              onClick={() => setFarmaco(true)}
              className={stylesAsesoria.boxConditional}
            >
              <p>Claro que si! &#128077;</p>
            </div>
            <div className={stylesAsesoria.boxConditional}>
              <p>No, nunca &#128683;</p>
            </div>
            {farmaco && (
              <div className={stylesAsesoria.inputExtra}>
                <p>¿Cuáles?</p>
                <input
                  type="text"
                  placeholder="Escribir aquí..."
                  className={stylesAsesoria.input}
                />
                <button onClick={() => setFarmaco(false)}>
                  <FontAwesomeIcon icon={faXmark} size="1x" />
                </button>
              </div>
            )}
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
          <p>Solicitud de Asesoría para competición</p>
            <h2>¿Actualmente utilizas framacología?</h2>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div
              onClick={() => setFarmacologia(true)}
              className={stylesAsesoria.boxConditional}
            >
              <p>Claro que si! &#128077;</p>
            </div>
            <div className={stylesAsesoria.boxConditional}>
              <p>No, nunca &#128683;</p>
            </div>
            {farmacologia && (
              <div className={stylesAsesoria.inputExtra}>
                <p>¿Cuáles?</p>
                <input
                  type="text"
                  placeholder="Escribir aquí..."
                  className={stylesAsesoria.input}
                />
                <button onClick={() => setFarmacologia(false)}>
                  <FontAwesomeIcon icon={faXmark} size="1x" />
                </button>
              </div>
            )}
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
          <p>Solicitud de Asesoría para competición</p>
            <h2>¿Entrenas frecuentemente?</h2>
          </section>
          <section className={stylesAsesoria.contInputsVcl}>
            <label htmlFor="inpComida" className={stylesAsesoria.boxInputHzl}>
              <p>1 - 3 veces por semana &#128517;</p>
              <input
                type="radio"
                id="inpComida"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </label>
            <label htmlFor="inpComida" className={stylesAsesoria.boxInputHzl}>
              <p>3 - 5 veces por semana &#128523;</p>
              <input
                type="radio"
                id="inpComida"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </label>
            <label htmlFor="inpComida" className={stylesAsesoria.boxInputHzl}>
              <p>5+ veces por semana &#128526;</p>
              <input
                type="radio"
                id="inpComida"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </label>
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
          <p>Solicitud de Asesoría para competición</p>
            <h2>¿Sueles hacer ejercicios cardiovasculares?</h2>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div
              onClick={() => setCardio(true)}
              className={stylesAsesoria.boxConditional}
            >
              <p>Claro que si! &#128077;</p>
            </div>
            <div className={stylesAsesoria.boxConditional}>
              <p>No, nunca &#128683;</p>
            </div>
            {cardio && (
              <div className={stylesAsesoria.inputExtra}>
                <p>¿Cuáles?</p>
                <input
                  type="text"
                  placeholder="Escribir aquí..."
                  className={stylesAsesoria.input}
                />
                <button onClick={() => setCardio(false)}>
                  <FontAwesomeIcon icon={faXmark} size="1x" />
                </button>
              </div>
            )}
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
          <p>Solicitud de Asesoría para competición</p>
            <h2>¿Cuántas horas sueles dormir al día?</h2>
          </section>
          <section className={stylesAsesoria.contInputsVcl}>
            <label htmlFor="inpComida" className={stylesAsesoria.boxInputHzl}>
              <p>3 - 5 horas &#127772;</p>
              <input
                type="radio"
                id="inpComida"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </label>
            <label htmlFor="inpComida" className={stylesAsesoria.boxInputHzl}>
              <p>5 - 8 horas &#127773;</p>
              <input
                type="radio"
                id="inpComida"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </label>
            <label htmlFor="inpComida" className={stylesAsesoria.boxInputHzl}>
              <p>8+ horas &#127775;</p>
              <input
                type="radio"
                id="inpComida"
                placeholder="Escribir aqui..."
                className={stylesAsesoria.input}
              />
            </label>
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
          <p>Solicitud de Asesoría para competición</p>
            <h2>¿Tienes algún antecendente médico?</h2>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div
              onClick={() => setMedico(true)}
              className={stylesAsesoria.boxConditional}
            >
              <p>Claro que si! &#128077;</p>
            </div>
            <div className={stylesAsesoria.boxConditional}>
              <p>No, nunca &#128683;</p>
            </div>
            {medico && (
              <div className={stylesAsesoria.inputExtra}>
                <p>¿Cuáles?</p>
                <input
                  type="text"
                  placeholder="Escribir aquí..."
                  className={stylesAsesoria.input}
                />
                <button onClick={() => setMedico(false)}>
                  <FontAwesomeIcon icon={faXmark} size="1x" />
                </button>
              </div>
            )}
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
          <p>Solicitud de Asesoría para competición</p>
            <h2>¿Sufres de alergias?</h2>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div
              onClick={() => setAlergia(true)}
              className={stylesAsesoria.boxConditional}
            >
              <p>Claro que si! &#128077;</p>
            </div>
            <div className={stylesAsesoria.boxConditional}>
              <p>No, nunca &#128683;</p>
            </div>
            {alergia && (
              <div className={stylesAsesoria.inputExtra}>
                <p>¿Cuáles?</p>
                <input
                  type="text"
                  placeholder="Escribir aquí..."
                  className={stylesAsesoria.input}
                />
                <button onClick={() => setAlergia(false)}>
                  <FontAwesomeIcon icon={faXmark} size="1x" />
                </button>
              </div>
            )}
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
          <p>Solicitud de Asesoría para competición</p>
            <h2>¿Tienes alguna lesión física?</h2>
          </section>
          <section className={stylesAsesoria.contInputs}>
            <div
              onClick={() => setLesion(true)}
              className={stylesAsesoria.boxConditional}
            >
              <p>Claro que si! &#128077;</p>
            </div>
            <div className={stylesAsesoria.boxConditional}>
              <p>No, nunca &#128683;</p>
            </div>
            {lesion && (
              <div className={stylesAsesoria.inputExtra}>
                <p>¿Cuáles?</p>
                <input
                  type="text"
                  placeholder="Escribir aquí..."
                  className={stylesAsesoria.input}
                />
                <button onClick={() => seLesion(false)}>
                  <FontAwesomeIcon icon={faXmark} size="1x" />
                </button>
              </div>
            )}
          </section>
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría para competición</p>
            <h2>Selecciona tu membresía ideal</h2>
          </section>
          <section className={stylesAsesoria.contPrices}>
            <div className={stylesAsesoria.boxPrice}>
              <div className={stylesAsesoria.boxIcon}>
                <Image
                  src="/images/mes-one.svg"
                  alt="image-person"
                  width={75}
                  height={50}
                  className={stylesAsesoria.icon}
                />
              </div>
              <div className={stylesAsesoria.titlePlan}>
                <h2>
                  Plan <span>mensual</span>
                </h2>
                <h3>
                  53<span>$</span>
                </h3>
                <input type="radio" className={stylesAsesoria.inputPlan} />
              </div>
            </div>
            <div className={stylesAsesoria.boxPrice}>
              <div className={stylesAsesoria.boxIcon}>
                <Image
                  src="/images/mes-two.svg"
                  alt="image-person"
                  width={75}
                  height={50}
                  className={stylesAsesoria.icon}
                />
              </div>

              <div className={stylesAsesoria.titlePlan}>
                <h2>
                  Plan <span>bimensual</span>
                </h2>
                <h3>
                  53<span>$</span>
                </h3>
                <input type="radio" className={stylesAsesoria.inputPlan} />
              </div>
            </div>
            <div className={stylesAsesoria.boxPrice}>
              <div className={stylesAsesoria.boxIcon}>
                <Image
                  src="/images/mes-tre.svg"
                  alt="image-person"
                  width={75}
                  height={50}
                  className={stylesAsesoria.icon}
                />
              </div>
              <div className={stylesAsesoria.titlePlan}>
                <h2>
                  Plan <span>trimestral</span>
                </h2>
                <h3>
                  53<span>$</span>
                </h3>
                <input type="radio" className={stylesAsesoria.inputPlan} />
              </div>
            </div>
          </section>
        </div>
      </form>
      <section className={stylesAsesoria.contBtns}>
        <button
          type="button"
          onClick={handlePrev}
          className={stylesAsesoria.btnLeft}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            size="2x"
            className={stylesAsesoria.icon}
          />
        </button>
        <div className={stylesAsesoria.progressContainer}>
          <div
            className={stylesAsesoria.progressBar}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {currentQuestion === formRef.current?.children.length - 1 ? (
          <Link href="/">
            <button type="button" className={stylesAsesoria.btnFin}>
              Finalizar
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="2x"
                className={stylesAsesoria.icon}
              />
            </button>
          </Link>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className={stylesAsesoria.btnRight}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              size="2x"
              className={stylesAsesoria.icon}
            />
          </button>
        )}
      </section>
      <span className={stylesAsesoria.yellowBlur}></span>
      <span className={stylesAsesoria.yellowBlurTwo}></span>
    </section>
  );
}
