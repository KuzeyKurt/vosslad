'use client';
import { Header } from '@/components/sidebar/sidebar.styles';
import React, { ReactNode } from 'react';

type ContactLayoutProps = {
  children: ReactNode; // children обязательно
}

const ContactLayout: React.FC<ContactLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ContactLayout;
