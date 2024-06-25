"use client";
import React, { useRef } from "react";
import styles from "./page.module.css";
import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import FormRegular from "@/components/form-regular/form-regular";

export default function AsesoriaRegular() {
  const goUp = useRef(null);

  return (
    <>
      <Head>
      <meta charSet="UTF-8" />
        <title>Asesoria Regular - Kerby Coach</title>
        <meta
          name="description"
          content="kerby coach online - fisicoculturismo, fitness & vida saludable"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header goUp={goUp} />
        <FormRegular />
        <Footer goUp={goUp} />
      </main>
    </>
  );
}
