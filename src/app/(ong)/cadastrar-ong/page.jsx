"use client";
import { useLogin } from "@/hooks/useLogin";
import CadastrarOngView from "./view";
import { useState } from "react";

export default function CadastrarOng() {
  const { RegisterOng } = useLogin();
  const [ong, setOng] = useState({
    name: "",
    nameReponsible: "",
    cpfResponsible: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    const newOng = {
      name: ong.name,
      nameReponsible: ong.nameReponsible,
      cpfResponsible: ong.cpfResponsible,
      email: ong.email,
      password: ong.password,
    };

    const wasRegistered = RegisterOng(newOng);
    if (wasRegistered) {
      alert("Cadastrado com sucesso");
      window.location.href = "/login-ong";
    }
  };
  return (
    <CadastrarOngView
      handleRegister={handleRegister}
      ong={ong}
      setOng={setOng}
    />
  );
}
