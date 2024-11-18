import Image from "next/image";
import photo from "@/public/assets/images/login-ong.png";
import Link from "next/link";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function CadastrarOngView({ handleRegister, ong, setOng }) {
  return (
    <div className="grid grid-cols-2 items-stretch overflow-hidden  font-nunito-sans">
      <Image
        src={photo}
        alt="Login Ong Image"
        className="h-screen w-full object-cover"
        priority
      />
      <div className="flex items-center justify-center text-[#191919] bg-[#191919]">
        <div className="bg-white rounded-lg w-[488px] flex flex-col p-[36px] max-h-[90vh] overflow-auto">
          <Link
            href="/"
            className="font-semibold text-sm text-gray-700 -mt-4 mb-4"
          >
            &lt; Voltar
          </Link>
          <h1 className="text-4xl mb-6 font-bold">Cadastrar ONG</h1>
          <form className="w-full flex flex-col" onSubmit={handleRegister}>
            <Input
              required
              label="Nome da ONG"
              type="text"
              name="nome-ong"
              id="nome-ong"
              placeholder="Insira o nome da ONG"
              onChange={(e) => setOng({ ...ong, name: e.target.value })}
            />

            <Input
              required
              label="Nome do Responsável"
              type="text"
              name="nome-responsavel"
              id="nome-responsavel"
              placeholder="Insira o nome do Responsável"
              onChange={(e) =>
                setOng({ ...ong, nameReponsible: e.target.value })
              }
            />

            <Input
              label="CPF do Responsável"
              id="cpf"
              mask="999.999.999-99"
              required
              placeholder="Insira o CPF do Responsável"
              onChange={(e) =>
                setOng({ ...ong, cpfResponsible: e.target.value })
              }
            />

            <Input
              label="E-mail"
              type="email"
              id="email"
              placeholder="Insira seu e-mail"
              required
              onChange={(e) => setOng({ ...ong, email: e.target.value })}
            />

            <Input
              label="Senha"
              type="password"
              id="senha"
              placeholder="Insira sua senha"
              required
              onChange={(e) => setOng({ ...ong, password: e.target.value })}
            />

            <Button
              type="submit"
              text="Entrar"
              variant="primary"
              className="w-full mt-6"
            />
          </form>

          <div className="self-center mt-4">
            <Link href="/login-ong">
              <p className="font-light">
                Já possui uma conta?{" "}
                <span className="font-bold underline">Faça login</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
