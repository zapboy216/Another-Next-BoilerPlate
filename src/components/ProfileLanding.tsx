'use client';

import { useTranslations } from 'next-intl';
import React, { lazy, Suspense } from 'react';

import Loader from '@/app/Loader';
import LoadingSkeleton from '@/components/LoadingSkeleton';

interface ProfileLandingProps {
  translationsKey: keyof IntlMessages;
}

const LazyImage = lazy(() => import('next/image'));

const ProfileLanding: React.FC<ProfileLandingProps> = ({ translationsKey }) => {
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
      <Suspense fallback={<LoadingSkeleton className="size-full" />}>
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
          <div className="glass-panel m-10">
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-4 shrink-0 md:mb-0 md:mr-6">
                <Suspense fallback={<Loader />}>
                  <LazyImage
                    src={t('profile_image_url')}
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                </Suspense>
              </div>
              <div>
                <h1 className="animate-fade-in-down text-4xl font-bold">
                  {t('name')}
                </h1>
                <h2 className="animate-fade-in-up mb-4 text-2xl">
                  {t('splash_landing')}
                </h2>
                <p className="animate-fade-in-down text-lg">
                  {t('paragraph_one')}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="animate-fade-in-down mb-4 text-2xl font-bold">
                {t('paragraph_two')}
              </h3>
              <p className="animate-fade-in-down text-lg">
                <strong>PHONE:</strong> {t('phone')}
              </p>
              <p className="animate-fade-in-down text-lg">
                <strong>EMAIL:</strong> {t('email')}
              </p>
              <div className="mt-4 flex justify-center space-x-4" />
            </div>
          </div>
          {/* End Glass Panel */}
        </div>
        <div className="mt-8 flex-1 md:ml-8 md:mt-0">
          <Suspense fallback={<LoadingSkeleton className="size-full" />}>
            <LazyImage
              src={t('hero_image_url')}
              alt="Hero"
              width={400}
              height={400}
              className="hero-image mt-10 w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProfileLanding;
