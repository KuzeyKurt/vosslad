// app/aboutus/layout.tsx
'use client';
import React, { ReactNode } from 'react';

type AboutLayoutProps = {
  children: ReactNode; // Делаем children обязательным
}

function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <React.Fragment>
      <header>Header Content</header>
      {children}
    </React.Fragment>
  );
}

export default AboutLayout; // Правильный экспорт
