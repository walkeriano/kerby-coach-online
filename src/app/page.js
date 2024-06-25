"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./page.module.css";
import Head from "next/head";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import Recomendations from "@/components/recomendations/recomendations";
import BannerMeet from "@/components/banner-meet/banner-meet";
import FrecuentQuestions from "@/components/frecuent-questions/frecuent-questions";
import CallToAction from "@/components/call-to-action/call-to-action";
import Footer from "@/components/footer/footer";
import Loading from "@/components/loading/loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const goUp = useRef(null);

  useEffect(() => {
    // Simula una carga artificial, por ejemplo, con un temporizador
    const timer = setTimeout(() => {
      setLoading(false); // Oculta la sección de carga después de 2 segundos (puedes ajustar el tiempo según tus necesidades)
    }, 2500);

    return () => clearTimeout(timer); // Limpia el temporizador en caso de que el componente se desmonte antes de que se complete la carga
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Kerby - Coach Online</title>
        <meta
          name="description"
          content="kerby coach online - fisicoculturismo, fitness & vida saludable"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <Loading />
      ) : (
        <main className={styles.main}>
          <Header goUp={goUp} />
          <Hero />
          <Services />
          <BannerMeet />
          <Recomendations />
          <FrecuentQuestions />
          <CallToAction />
          <Footer goUp={goUp} />
        </main>
      )}
    </>
  );
}
