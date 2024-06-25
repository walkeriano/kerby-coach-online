"use client";
import React, { useRef } from "react";
import styles from "./page.module.css";
import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import FormCompeticion from "@/components/form-regular/form-competicion";

export default function AsesoriaCompeticion() {
  const goUp = useRef(null);

  return (
    <>
      <Head>
      <meta charSet="UTF-8" />
        <title>Asesoria para Competición - Kerby Coach</title>
        <meta
          name="description"
          content="kerby coach online - fisicoculturismo, fitness & vida saludable"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header goUp={goUp} />
        <FormCompeticion />
        <Footer goUp={goUp} />
      </main>
    </>
  );
}
