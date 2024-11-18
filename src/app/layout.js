import localFont from "next/font/local";
import LoginProvider from "@/contexts/LoginContext";
import DonateProvider from "@/contexts/DonateContext";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

const leagueGothic = localFont({
  src: "../fonts/LeagueGothic.ttf",
  variable: "--font-league-gothic",
  weight: "400",
});

export const metadata = {
  title: "Fome Zero",
  description: "Fome Zero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${nunito.variable} ${leagueGothic.variable} antialiased`}
      >
        <LoginProvider>
          <DonateProvider>{children}</DonateProvider>
        </LoginProvider>
      </body>
    </html>
  );
}
