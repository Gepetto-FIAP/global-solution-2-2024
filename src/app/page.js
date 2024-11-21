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
    <div className="h-screen w-screen overflow-y-auto flex flex-col justify-between relative">
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

      <main className="flex-1 flex justify-center items-center relative z-10 h-[700px] pt-16 pb-20">
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

      {/* <section className="bg-[#FF9800] text-white py-12 relative z-10">
        <div className="bg-white rounded-full w-[48px] h-[48px] flex justify-center items-center absolute -top-6 left-1/2 transform -translate-x-1/2 shadow">
          <Image
            src="/assets/images/garfo.svg"
            width={30}
            height={24}
            alt="Fome Zero"
          />
        </div>
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12 uppercase">Nossos Números</h3>
          <div className="flex justify-center gap-10 flex-wrap">
            <div className="text-center flex flex-col items-center gap-4 p-4 border-2 w-56 rounded-3xl border-[#C26100]">
              <Image
                src="/assets/images/restaurante.svg"
                width={72}
                height={62}
                alt="Restaurantes"
              />
              <p className="text-5xl font-bold">
                <CountUp end={666} duration={2} />
              </p>
              <p className="text-[#191919]">
                Restaurantes <br />
                cadastrados
              </p>
            </div>
            <div className="text-center flex flex-col items-center gap-4 p-4 border-2 w-56 rounded-3xl border-[#C26100]">
              <Image
                src="/assets/images/supermercado.svg"
                width={67}
                height={62}
                alt="Supermercado"
              />
              <p className="text-5xl font-bold">
                <CountUp end={153} duration={2.5} />
              </p>
              <p className="text-[#191919]">
                Supermercados <br />
                cadastrados
              </p>
            </div>
            <div className="text-center flex flex-col items-center gap-4 p-4 border-2 w-56 rounded-3xl border-[#C26100]">
              <Image
                src="/assets/images/ong.svg"
                width={75}
                height={62}
                alt="Ong"
              />
              <p className="text-5xl font-bold">
                <CountUp end={181} duration={3} />
              </p>
              <p className="text-[#191919]">
                ONGs <br />
                cadastradas
              </p>
            </div>
            <div className="text-center flex flex-col items-center gap-4 p-4 border-2 w-56 rounded-3xl border-[#C26100]">
              <Image
                src="/assets/images/alimento.svg"
                width={57}
                height={62}
                alt="Alimento"
              />
              <p className="text-5xl font-bold">
                <CountUp end={12740} duration={3.5} />
                <span className="text-lg">kg</span>
              </p>
              <p className="text-[#191919]">
                Alimentos <br />
                doados
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <footer className="bg-[#008E28] text-white py-4 text-center relative z-10 font-nunito-sans">
        <p>&copy; 2024. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
