import React, { useState } from "react";
import Image from "next/image";
import stylesCita from "./agendar-cita.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleExclamation,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { Calendar } from "@/components/ui/calendar";
import { isBefore, startOfToday } from "date-fns";

export default function AgendarCita() {
  const today = startOfToday();
  const [date, setDate] = useState(null);
  const [payment, setPayment] = useState(true);

  const handleDateSelect = (date) => {
    if (!isBefore(date, today)) {
      setDate(date);
    }
  };

  return (
    <form
      className={stylesCita.containCalendar}
      onSubmit={(e) => e.preventDefault()}
    >
      <section className={stylesCita.title}>
        <h2>
          consultas con <span>el coach</span>
        </h2>
        <p>Reserva tu cita online y soluciona cualquier duda</p>
      </section>
      <section className={stylesCita.contForm}>
        <section className={stylesCita.leftSection}>
          <input
            className={stylesCita.input}
            type="text"
            placeholder="Nombres"
            required
            pattern="^[a-zA-Z\s]+$"
          />
          <input
            className={stylesCita.input}
            type="text"
            placeholder="Apellidos"
            required
            pattern="^[a-zA-Z\s]+$"
          />
          <input
            className={stylesCita.input}
            type="email"
            placeholder="Email"
            required
          />
          <input
            className={stylesCita.input}
            type="number"
            placeholder="Número de móvil"
            pattern="[0-9]{10}"
            required
          />
          <div className={stylesCita.boxInput}>
            <p>Elegir hora de cita:</p>
            <input
              type="time"
              required
              min="09:00"
              max="17:00"
              step="1800"
              className={stylesCita.inputTime}
            />
          </div>
        </section>
        <Calendar
          mode="single"
          fromMonth={today}
          selected={date}
          onSelect={handleDateSelect}
          disabled={(date) => isBefore(date, today)}
          className="rounded-md border border-slate-600"
        />
      </section>
      <section className={stylesCita.contPayment}>
        <h3>
          información <span>de pago</span>
        </h3>
        <div className={stylesCita.infoExtra}>
          <span></span>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            size="2x"
            className={stylesCita.icon}
          />
          <p>Recuerda confirmar el pago para reservar la cita.</p>
        </div>
        <section className={stylesCita.containerPay}>
          <div className={stylesCita.btnPayFlex}>
            <button
              type="button"
              className={`${stylesCita.btnPayOn} ${
                payment ? stylesCita.active : stylesCita.inactive
              }`}
              onClick={() => setPayment(true)}
            >
              Pagos Nacionales
            </button>
            <button
              type="button"
              className={`${stylesCita.btnPayOn} ${
                payment ? stylesCita.inactive : stylesCita.active
              }`}
              onClick={() => setPayment(false)}
            >
              Pagos Internacionales
            </button>
          </div>
          {payment ? (
            <section className={stylesCita.showInfo}>
              <h4>Banco de Crédito del Perú</h4>
              <section className={stylesCita.generalData}>
                <div className={stylesCita.boxBanco}>
                  <Image
                    src="/images/bcp.png"
                    alt="logo-bcp"
                    width={90}
                    height={50}
                  />
                </div>
                <section className={stylesCita.infoCuenta}>
                  <div className={stylesCita.datoCuenta}>
                    <p>Cuenta directa:</p>
                    <div className={stylesCita.item}>
                      312321321321321321321321
                      <div className={stylesCita.box}>
                        <FontAwesomeIcon
                          icon={faCopy}
                          size="2x"
                          className={stylesCita.icon}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={stylesCita.datoCuenta}>
                    <p>Cuenta Interbancaria:</p>
                    <div className={stylesCita.item}>
                      312321321321321321321321
                      <div className={stylesCita.box}>
                        <FontAwesomeIcon
                          icon={faCopy}
                          size="2x"
                          className={stylesCita.icon}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </section>
          ) : (
            <section className={stylesCita.showInfo}>
              <h4>Pay Pal</h4>
              <section className={stylesCita.generalData}>
                <div className={stylesCita.boxBanco}>
                  <Image
                    src="/images/paypal.png"
                    alt="logo-paypal"
                    width={75}
                    height={75}
                  />
                </div>
                <section className={stylesCita.infoCuenta}>
                  <div className={stylesCita.datoCuenta}>
                    <p>Titular: Kerby Cock</p>
                  </div>
                  <div className={stylesCita.datoCuenta}>
                    <p>Cuenta Directa:</p>
                    <div className={stylesCita.item}>
                      312321321321321321321321
                      <div className={stylesCita.box}>
                        <FontAwesomeIcon
                          icon={faCopy}
                          size="2x"
                          className={stylesCita.icon}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </section>
          )}
        </section>
      </section>
      <button className={stylesCita.buttonSubmit} type="submit">
        reservar cita
        <div className={stylesCita.boxIcon}>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="2x"
            className={stylesCita.icon}
          />
        </div>
      </button>
    </form>
  );
}
