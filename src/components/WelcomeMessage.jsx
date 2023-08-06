import React from 'react';
import { useLanguage } from './LanguageContext';

const WelcomeMessage = ({ name }) => {
  const { language } = useLanguage();

  const translations = {
    en: {
      welcome: "Welcome to our app!",
      greeting: "Hello, {{name}}!",
    },
    ru: {
      welcome: "Добро пожаловать в наше приложение!",
      greeting: "Привет, {{name}}!",
    },
  };

  return (
    <div>
      <h1>{translations[language].welcome}</h1>
      <p>{translations[language].greeting.replace("{{name}}", name)}</p>
    </div>
  );
};

export default WelcomeMessage;
