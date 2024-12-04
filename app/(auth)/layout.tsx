// app/aboutus/layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;        // Типизация для дочерних компонентов
  modal: ReactNode;           // Если не используете modal, удалите это поле
}

const Layout: React.FC<LayoutProps> = ({ children, modal }) => {
  return (
    <div>
      <header>Header content</header>
      <main>{children}</main>
      {modal}
      <footer>Footer content</footer>
    </div>
  );
};

export default Layout;
