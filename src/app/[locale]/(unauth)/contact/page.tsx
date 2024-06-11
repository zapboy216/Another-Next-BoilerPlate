// file name and location:src/app/[locale]/(unauth)/page.tsx

import { useTranslations } from 'next-intl';
import React from 'react';

import { HeroSection } from '@/components/component/hero-section-contact';

const HomePage: React.FC = () => {
  const t = useTranslations('Index');
  return (
    <main>
      <HeroSection />
    </main>
  );
};

export default HomePage;
