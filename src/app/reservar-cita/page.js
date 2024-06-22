"use client";
import React, { useRef } from "react";
import styles from "./page.module.css";
import Head from "next/head";
import Header from "@/components/header/header";
import AgendarCita from "@/components/agendar-cita/agendar-cita";
import Footer from "@/components/footer/footer";
export default function ReservarCita() {
  const goUp = useRef(null);

  return (
    <>
      <Head>
        <title>Reservar Cita Online - Kerby Coach</title>
        <meta name="description" content="kerby coach online - fisicoculturismo, fitness & vida saludable" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header goUp={goUp} />
        <AgendarCita />
        <Footer goUp={goUp} />
      </main>
    </>
  );
}
