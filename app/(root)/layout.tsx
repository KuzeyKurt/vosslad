import type { Metadata } from "next";
import { Header } from "@/components/shared/header";
import { Suspense } from "react";

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
    <main className="min-h-screen bg-[#404040]">
      <Suspense>
        <Header />
      </Suspense>
      {children}
      {modal}
    </main>
  );
}
