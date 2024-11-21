import Image from "next/image";
import photo from "@/public/assets/images/register-wallpaper.png";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";

export default function CadastrarEstabelecimentoView({
  institution,
  setInstitution,
  handleRegister,
}) {
  return (
    <div className="h-screen w-screen overflow-y-auto grid grid-cols-2 justify-between bg-[#191919] font-nunito-sans">
      <div className="text-[#0D0E30] flex justify-center items-center">
        <div className="bg-white rounded-lg w-[488px] flex flex-col p-[36px] text-black max-h-[90vh] overflow-auto">
          <Link
            href="/"
            className="font-semibold text-sm text-gray-700 -mt-4 mb-4"
          >
            &lt; Voltar
          </Link>
          <h1 className="text-4xl mb-4 font-bold">
            Cadastrar
            <br />
            estabelecimento
          </h1>
          <form className="flex flex-col" onSubmit={handleRegister}>
            <Input
              label="Nome fantasia"
              id="nome-fantasia"
              placeholder="Insira o nome fantasia"
              required
              onChange={(e) =>
                setInstitution({ ...institution, fantasyName: e.target.value })
              }
            />

            <Input
              label="CNPJ"
              id="cnpj"
              mask="99.999.999/9999-99"
              placeholder="Insira o CPNJ"
              required
              onChange={(e) =>
                setInstitution({ ...institution, cnpj: e.target.value })
              }
            />

            <Select
              label="Tipo de estabelecimento"
              id="tipo-estabelecimento"
              required
              value={institution.type}
              onChange={(e) =>
                setInstitution({ ...institution, type: e.target.value })
              }
            >
              <option value="" disabled hidden>
                Selecione um tipo de alimento
              </option>
              <option value="mercado">Mercado</option>
              <option value="restaurante">Restaurante</option>
              <option value="outro">Outro</option>
            </Select>

            <Input
              label="Telefone"
              id="telefone"
              mask="(99) 99999-9999"
              placeholder="Insira seu telefone"
              required
              onChange={(e) =>
                setInstitution({ ...institution, phone: e.target.value })
              }
            />

            <Input
              label="Endereço"
              id="endereco"
              placeholder="Insira seu endereço"
              required
              onChange={(e) =>
                setInstitution({ ...institution, address: e.target.value })
              }
            />

            <Input
              label="E-mail"
              type="email"
              id="email"
              placeholder="Insira seu e-mail"
              required
              onChange={(e) =>
                setInstitution({ ...institution, email: e.target.value })
              }
            />

            <Input
              label="Senha"
              type="password"
              id="senha"
              placeholder="Insira sua senha"
              required
              onChange={(e) =>
                setInstitution({ ...institution, password: e.target.value })
              }
            />

            <Button
              type="submit"
              text="Cadastrar"
              variant="primary"
              className="w-full mt-6"
            />
          </form>
          <p className="text-center mt-4">
            Já possui uma conta?{" "}
            <Link href="/login-estabelecimento">
              <span className="font-bold underline">Faça login</span>
            </Link>
          </p>
        </div>
      </div>
      <Image
        src={photo}
        alt="Login Helper Image"
        className="h-screen w-full object-cover"
        priority
      />
    </div>
  );
}
