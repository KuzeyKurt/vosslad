import React, { useState } from 'react';
import {LoginForm} from '../forms/login-form';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Открыть форму входа</button>
      {isOpen && <LoginForm onClose={closeModal} />}
    </div>
  );
};

export default App;
