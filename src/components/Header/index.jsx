"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLogin } from "@/hooks/useLogin";
export function Header() {
  const { LogoutBusiness, LogoutOng, isBusinessLoggedIn, isOngLoggedIn } =
    useLogin();
  const pathname = usePathname();

  const handleLogout = () => {
    if (isBusinessLoggedIn && pathname === "/dashboard-descartante") {
      LogoutBusiness();
    } else if (isOngLoggedIn && pathname === "/dashboard-estabelecimento") {
      LogoutOng();
    }
  };

  return (
    <nav className="w-full py-4 bg-black">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/dashboard-estabelecimento">
          <Image
            src="/assets/images/avatar.svg"
            width={30}
            height={30}
            alt="Fome Zero"
          />
        </Link>

        <Link href="/">
          <Image
            src="/assets/images/battery-logo.svg"
            width={53}
            height={58}
            alt="Fome Zero"
          />
        </Link>

        <Link href="/">
          <Image
            src="/assets/images/logout.svg"
            onClick={handleLogout}
            width={32}
            height={32}
            alt="Sair"
          />
        </Link>
      </div>
    </nav>
  );
}
