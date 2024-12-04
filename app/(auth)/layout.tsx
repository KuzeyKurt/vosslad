// app/aboutus/page.tsx
import React from 'react';

interface AboutUsPageProps {
  // если вы используете modal, то добавьте соответствующий тип
  modal?: React.ReactNode;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ modal }) => {
  return (
    <div>
      <h1>About Us</h1>
      {modal && <div>{modal}</div>} {/* Отображаем modal, если он передан */}
      {/* Остальное содержимое страницы */}
    </div>
  );
};

export default AboutUsPage; // Правильный экспорт
