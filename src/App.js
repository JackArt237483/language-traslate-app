import React from 'react';
import LanguageSelector from './components/LanguageSelector';
import WelcomeMessage from './components/WelcomeMessage';
import { LanguageProvider } from './components/LanguageContext';

const App = () => {
  const name = 'John';

  return (
    <LanguageProvider>
      <div>
        <LanguageSelector />
        <WelcomeMessage name={name} />
      </div>
    </LanguageProvider>
  );
};

export default App;
