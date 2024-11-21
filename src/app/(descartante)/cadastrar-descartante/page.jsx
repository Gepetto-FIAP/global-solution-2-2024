"use client";
import React, { useState } from "react";
import CadastrarDescartanteView from "./view";
import { useLogin } from "@/hooks/useLogin";

export default function CadastrarEstabelecimento() {
  const { RegisterBusiness } = useLogin();
  const [institution, setInstitution] = useState({
    fantasyName: "",
    cnpj: "",
    type: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    const newInstitution = {
      fantasyName: institution.fantasyName,
      cnpj: institution.cnpj,
      type: institution.type,
      address: institution.address,
      phone: institution.phone,
      email: institution.email,
      password: institution.password,
    };

    const wasRegistered = RegisterBusiness(newInstitution);

    if (wasRegistered) {
      alert("Cadastrado com sucesso");
      window.location.href = "/login-descartante";
    }
  };
  return (
    <CadastrarDescartanteView
      handleRegister={handleRegister}
      institution={institution}
      setInstitution={setInstitution}
    />
  );
}
