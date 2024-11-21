"use client";
import React, { useState } from "react";
import LoginEstabelecimentoView from "./view";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useLogin } from "@/hooks/useLogin";

export default function LoginEstabelecimento() {
  const { LoginBusiness } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getItem } = useLocalStorage("businessLogged");

  const handleLogin = (event) => {
    event.preventDefault();

    const logged = LoginBusiness(email, password);

    if (logged) {
      const business = getItem();
      alert(`Seja bem-vindo de volta, ${business.fantasyName}!`);
      window.location.href = "/dashboard-descartante";
    }
  };

  return (
    <LoginEstabelecimentoView
      handleLogin={handleLogin}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
}
