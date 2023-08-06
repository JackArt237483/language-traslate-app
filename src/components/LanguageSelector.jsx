import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
      <p>Current Language: {language}</p>
    </div>
  );
};

export default LanguageSelector;
