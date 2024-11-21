"use client";
import { useLogin } from "@/hooks/useLogin";
import LoginEstabelecimentoView from "./view";
import { useState } from "react";

export default function LoginEstabelecimento() {
  const { LoginEstabelecimento } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const logged = LoginEstabelecimento(email, password);

    if (logged) {
      alert(`Seja bem-vindo!`);
      window.location.href = "/dashboard-estabelecimento";
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
