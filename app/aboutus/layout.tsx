// app/aboutus/layout.tsx
'use client';
import React, { ReactNode } from 'react';
import { Header } from "@/components/shared/header";

type AboutLayoutProps = {
  children: ReactNode; // Делаем children обязательным
}

function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <React.Fragment>
     
     <main>
     {children}</ main>
    </React.Fragment>
  );
}

export default AboutLayout; // Правильный экспорт
