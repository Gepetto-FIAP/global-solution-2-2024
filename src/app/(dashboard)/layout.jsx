import { Header } from "@/components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      {children}
    </div>
  );
}
