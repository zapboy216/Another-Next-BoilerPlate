// file name and location:src/app/[locale]/(unauth)/page.tsx

import { useTranslations } from 'next-intl';
import React from 'react';

import { HeroSection } from '@/components/component/hero-section';

const HomePage: React.FC = () => {
  const t = useTranslations('Index');
  return (
    <main>
      <HeroSection />
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
