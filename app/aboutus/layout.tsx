'use client'; // use client добавлен 
import React, { ReactNode } from 'react';

// interface LayoutProps {
//   children: ReactNode;
// }

type AboutLayoutProps = {
  children?: React.ReactNode;
}

function AboutLayout(props: AboutLayoutProps) {
  return <React.Fragment><header>Header Content</header>{props.children}</React.Fragment>;
}

// const AboutLayout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div>
//       <header>Header Content</header>
//       <main>{children}</main>
//       <footer>Footer Content</footer>
//     </div>
//   );
// };

export default AboutLayout; // Правильный экспорт
