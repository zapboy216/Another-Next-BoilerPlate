'use client';

import { useTranslations } from 'next-intl';
import React, { lazy, Suspense } from 'react';

import Loader from '@/app/Loader';

interface LandingProps {
  translationsKey: string;
}

const LazyImage = lazy(() => import('next/image'));

const Landing: React.FC<LandingProps> = ({ translationsKey }) => {
  const t = useTranslations(translationsKey);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const renderBackground = () => {
    if (isMobile) {
      return (
        <div className="absolute left-0 top-0 size-full bg-gradient-to-r from-blue-500 to-purple-500" />
      );
    }
    if (t('backgroundVideoUrl')) {
      return (
        <video
          className="absolute left-0 top-0 size-full object-cover"
          src={t('backgroundVideoUrl')}
          autoPlay
          loop
          muted
        />
      );
    }
    return (
      <Suspense fallback={<Loader />}>
        <LazyImage
          className="absolute left-0 top-0 size-full object-cover"
          src={t('backgroundImageUrl')}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </Suspense>
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-auto">
      {/* Background */}
      {renderBackground()}

      {/* Overlay */}
      <div className="absolute left-0 top-0 size-full bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center text-white md:flex-row md:text-left">
        <div className="flex-1">
          {/* Glass Panel */}
          <div className="m-10 rounded-lg bg-white bg-opacity-10 p-8 backdrop-blur-md">
            <h1 className="animate-fade-in-bottom mb-4 text-4xl font-bold md:text-4xl">
              {t('splash_landing')}
            </h1>
            <h2 className="animate-fade-in-bottom mb-8 text-2xl md:text-4xl">
              {t('heading_one')}
            </h2>

            <p className="animate-fade-in-bottom mb-4 text-lg md:text-xl">
              {t('paragraph_one')}
            </p>
            <p className="animate-fade-in-bottom mb-4 text-lg md:text-xl">
              {t('paragraph_two')}
            </p>

            <a
              href="./contact"
              className="animate-fade-in-bottom rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              {t('heading_two')}
            </a>
            <p>{t('paragraph_three')}</p>
            <p>{t('paragraph_four')}</p>
            <p>{t('paragraph_five')}</p>
          </div>
          {/* End Glass Panel */}
        </div>
        <div className="mt-8 flex-1 md:ml-8 md:mt-0">
          <Suspense fallback={<Loader />}>
            <LazyImage
              src={t('hero_image_url')}
              alt="Hero"
              width={400}
              height={400}
              className="mt-10 w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Landing;
