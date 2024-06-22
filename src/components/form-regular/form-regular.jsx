import { useState, useRef, useEffect } from "react";
import stylesAsesoria from "./form-regular.module.css";
import Link from "next/link";

export default function FormRegular() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const formRef = useRef(null);

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
            <p>Solicitud de Asesoría regular</p>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Cuátos años tienes?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Cuál es tu peso actual?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Cuál es tu objetivo físico?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Cuál es tu estatura?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Cuál es tu plan nutricional actual?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Utilizas suplementos actualmente?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Registro de solicitud</p>
            <h2>¿Has consumido algún fármaco deportivo alguna vez?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Entrenas frecuentemente?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Sueles hacer ejercicios cardiovasculares?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Prácticas algún deporte aparte del gym?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Cuántas horas sueles dormir al día?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Tienes algún antecendente médico?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Sufres de alergias?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Eres intelorable a algún alimento?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Qué alimento no te gusta?</h2>
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
        </div>
        <div className={stylesAsesoria.question}>
          <section className={stylesAsesoria.title}>
            <p>Solicitud de Asesoría regular</p>
            <h2>¿Tienes alguna lesión física?</h2>
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
        </div>
      </form>

      <section className={stylesAsesoria.contBtns}>
        <button type="button" onClick={handlePrev}>
          Volver
        </button>
        <div className={stylesAsesoria.progressContainer}>
          <div
            className={stylesAsesoria.progressBar}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {currentQuestion === formRef.current?.children.length - 1 ? (
          <Link href="/">
            <button type="button">Finalizar</button>
          </Link>
        ) : (
          <button type="button" onClick={handleNext}>
            Continuar
          </button>
        )}
      </section>
      <span className={stylesAsesoria.yellowBlur}></span>
      <span className={stylesAsesoria.yellowBlurTwo}></span>
    </section>
  );
}
