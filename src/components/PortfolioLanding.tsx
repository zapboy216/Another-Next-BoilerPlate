'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

interface LandingProps {
  translationsKey: string;
}

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
      <Image
        className="absolute left-0 top-0 size-full object-cover"
        src={t('backgroundImageUrl')}
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
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
            <p className="animate-fade-in-bottom mb-4 text-lg md:text-xl">
              {t('paragraph_one')}
            </p>
            {/* Glass Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="/hearts"
                className="rounded-lg bg-gray-800 bg-opacity-80 p-6 text-left"
              >
                <h2 className="text-2xl font-bold">Hearts</h2>
                <p className="mt-2 text-lg">{t('paragraph_one')}</p>
              </a>
              <a
                href="/diamonds"
                className="rounded-lg bg-gray-800 bg-opacity-80 p-6 text-left"
              >
                <h2 className="text-2xl font-bold">Diamonds</h2>
                <p className="mt-2 text-lg">{t('paragraph_two')}</p>
              </a>
              <a
                href="/spades"
                className="rounded-lg bg-gray-800 bg-opacity-80 p-6 text-left"
              >
                <h2 className="text-2xl font-bold">Spades</h2>
                <p className="mt-2 text-lg">{t('paragraph_three')}</p>
              </a>
              <a
                href="/clubs"
                className="rounded-lg bg-gray-800 bg-opacity-80 p-6 text-left"
              >
                <h2 className="text-2xl font-bold">Clubs</h2>
                <p className="mt-2 text-lg">{t('paragraph_four')}</p>
              </a>
            </div>
          </div>
          {/* End Glass Panel */}
        </div>
        <div className="mt-8 flex-1 md:ml-8 md:mt-0">
          <Image
            src={t('hero_image_url')}
            alt="Hero"
            width={400}
            height={400}
            className="mt-10 w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
