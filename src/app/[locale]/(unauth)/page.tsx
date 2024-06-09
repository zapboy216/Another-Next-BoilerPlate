// app/page.tsx
import { useTranslations } from 'next-intl';
import React from 'react';

const HomePage: React.FC = () => {
  const t = useTranslations('Index');
  return (
    <main>
      <h1>{t('heading_one')}</h1>
      <h2>{t('heading_two')}</h2>
      <p>{t('paragraph_one')}</p>
      <p>{t('paragraph_two')}</p>
      <p>{t('paragraph_three')}</p>
      {t('cta')}
    </main>
  );
};

export default HomePage;
