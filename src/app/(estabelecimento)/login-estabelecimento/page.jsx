"use client";
import { useLogin } from "@/hooks/useLogin";
import LoginOngView from "./view";
import { useState } from "react";

export default function LoginOng() {
  const { LoginOng } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const logged = LoginOng(email, password);

    if (logged) {
      alert(`Seja bem-vindo!`);
      window.location.href = "/dashboard-estabelecimento";
    }
  };
  return (
    <LoginOngView
      handleLogin={handleLogin}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
}
