// file name and location:src/app/[locale]/(unauth)/page.tsx

import React from 'react';

import { HeroSection } from '@/components/component/hero-section-about';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
    </main>
  );
};

export default HomePage;
