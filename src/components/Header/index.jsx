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
    if (isBusinessLoggedIn && pathname === "/dashboard-estabelecimento") {
      LogoutBusiness();
    } else if (isOngLoggedIn && pathname === "/dashboard-ong") {
      LogoutOng();
    }
  };

  return (
    <nav className="w-full py-4 bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/images/fome-zero-logo.png"
            width={53}
            height={58}
            alt="Fome Zero"
          />
        </Link>
        <div>
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
      </div>
    </nav>
  );
}
