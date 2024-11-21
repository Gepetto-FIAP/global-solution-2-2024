"use client";

import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { Button } from "@/components/Button";
import Link from "next/link";
import { useLogin } from "@/hooks/useLogin";

export default function LandingPage() {
  const { isBusinessLoggedIn, isOngLoggedIn } = useLogin();
  const doarRef = isBusinessLoggedIn
    ? "/dashboard-descartante"
    : "/login-descartante";
  const ongRef = isOngLoggedIn
    ? "/dashboard-estabelecimento"
    : "/login-estabelecimento";

  return (
    <div className="h-screen w-screen overflow-y-auto relative">
      <header className="absolute top-0 left-0 w-full bg-white/10 backdrop-blur-sm z-20 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            src="/assets/images/logo.png"
            width={53}
            height={58}
            alt="Logo"
          />
          <div>
            <Link href={doarRef}>
              <Button text="Login" variant="primary" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex justify-center items-center relative z-10 h-screen pt-16 pb-20">
        <div
          className="absolute inset-0 bg-cover z-0"
          style={{
            backgroundImage: "url('/assets/images/home-landing-page.jpg')",
          }}
        />
        <div className="container mx-auto text-left py-20 text-white relative z-10">
          <h2 className="text-6xl font-bold mb-4 max-w-[728px]">
            Ache o local certo!{" "}
            <span className="text-[#00DF3F]">Descarte baterias:</span> Poupe o
            meio ambiente
          </h2>
          <p className="text-lg mb-8 max-w-[728px]">
            Encontramos o local ideal para você descartar ou vender suas
            baterias, desde uma simples pilha até baterias de carros elétricos.
          </p>
          <div className="flex flex-row gap-4">
            <Link href={doarRef}>
              <Button text="Descartar" variant="primary" />
            </Link>

            <Link href={ongRef}>
              <Button text="Receber" variant="outline" />
            </Link>
          </div>
        </div>
      </main>

      <section className="flex flex-col justify-center items-center bg-[#122417] text-white py-16 relative z-10">
        <h2 className="text-4xl font-bold mb-8">Conheça o nosso propósito</h2>
        <iframe
          className="rounded-lg border-0"
          width="800"
          height="533.33"
          src="https://www.youtube.com/embed/hTySFNbMiZo?si=wn_3Vz5vQj_ZqS5C"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
      <section className="flex flex-col justify-center items-center bg-[#191919] text-white py-36 relative z-10">
        <h2 className="text-4xl font-bold mb-8">Conheça o nosso time</h2>
        <div id="integrantes" className="flex flex-row gap-8">
          <div id="integrante" className="text-center">
            <Image
              src="/assets/images/integrantes/antonio.png"
              width={180}
              height={180}
              alt="Antonio"
            />
            <p className="text-green-500 mt-2">Antônio Schappo</p>
            <p>RM: 556429</p>
          </div>
          <div id="integrante" className="text-center">
            <Image
              src="/assets/images/integrantes/ezequiel.png"
              width={180}
              height={180}
              alt="Logo"
            />
            <p className="text-green-500 mt-2">Ezequiel Hellwig</p>
            <p>RM: 555455</p>
          </div>
          <div id="integrante" className="text-center">
            <Image
              src="/assets/images/integrantes/guilherme.png"
              width={180}
              height={180}
              alt="Logo"
            />
            <p className="text-green-500 mt-2">Guilherme Carneiro</p>
            <p>RM: 557517</p>
          </div>
          <div id="integrante" className="text-center">
            <Image
              src="/assets/images/integrantes/kevin.png"
              width={180}
              height={180}
              alt="Logo"
            />
            <p className="text-green-500 mt-2">Kevin Benevides</p>
            <p>RM: 557898</p>
          </div>
          <div id="integrante" className="text-center">
            <Image
              src="/assets/images/integrantes/pedro.png"
              width={180}
              height={180}
              alt="Logo"
            />
            <p className="text-green-500 mt-2">Pedro de Freitas</p>
            <p>RM: 555907</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#008E28] text-white py-4 text-center relative z-10 font-nunito-sans">
        <p>&copy; 2024. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
