import type { Metadata } from "next";
import { Header } from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Sherbet | Корзина",
  description: "Generated by create next app",
};

export default async function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[#333333]">
      <Header hasCart={false} hasSearch={false} className="border-gray-200" />
      {children}
    </main>
  );
}
