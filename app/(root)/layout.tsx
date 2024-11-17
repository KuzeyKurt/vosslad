import type { Metadata } from "next";
import { Header } from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Sherbet | Сладости востока",
  description: "Магазин восточных сладостей",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-dark-black">
      <Header />
      {children}
      {modal}
    </main>
  );
}
