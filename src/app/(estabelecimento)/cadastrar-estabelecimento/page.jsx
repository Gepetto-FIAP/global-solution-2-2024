"use client";
import React, { useState } from "react";
import CadastrarEstabelecimentoView from "./view";
import { useLogin } from "@/hooks/useLogin";

export default function CadastrarEstabelecimento() {
  const { RegisterOng } = useLogin();
  const [institution, setInstitution] = useState({
    // fantasyName: "",
    // cnpj: "",
    // type: "",
    // address: "",
    // phone: "",
    // email: "",
    // password: "",
    name: "",
    nameReponsible: "",
    cnpj: "",
    type: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    const newInstitution = {
      name: institution.name,
      nameReponsible: institution.nameReponsible,
      cnpj: institution.cnpj,
      type: institution.cnpj,
      email: institution.email,
      password: institution.password,
    };

    const wasRegistered = RegisterOng(newInstitution);

    if (wasRegistered) {
      alert("Cadastrado com sucesso");
      window.location.href = "/login-estabelecimento";
    }
  };
  return (
    <CadastrarEstabelecimentoView
      handleRegister={handleRegister}
      institution={institution}
      setInstitution={setInstitution}
    />
  );
}
