import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
      className="px-3 py-1 text-sm text-white bg-transparent hover:bg-white/10 rounded-md transition-colors"
    >
      {language === 'en' ? '日本語' : 'English'}
    </button>
  );
} 