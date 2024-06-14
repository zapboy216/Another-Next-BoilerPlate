'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

interface ProfileLandingProps {
  translationsKey: string;
}

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
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-4 shrink-0 md:mb-0 md:mr-6">
                <Image
                  src={t('profile_image_url')}
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold">{t('name')}</h1>
                <h2 className="mb-4 text-2xl">{t('splash_landing')}</h2>
                <p className="text-lg">{t('paragraph_one')}</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="mb-4 text-2xl font-bold">{t('paragraph_two')}</h3>
              <p className="text-lg">
                <strong>PHONE:</strong> {t('phone')}
              </p>
              <p className="text-lg">
                <strong>EMAIL:</strong> {t('email')}
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="size-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.5c-1 0-1.5-.75-1.5-1.5s.5-1.5 1.5-1.5 1.5 .75 1.5 1.5-.5 1.5-1.5 1.5zm13.5 12.5h-3v-5.5c0-1.5-.75-2-1.5-2s-1.5 .5-1.5 2v5.5h-3v-11h3v2h.1c.45-.75 1.75-2 3.4-2 2.25 0 4.5 1.5 4.5 4.5v6.5z" />
                  </svg>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="size-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.56c-.88.4-1.82.67-2.81.79 1.01-.61 1.79-1.57 2.16-2.72-.95.56-2 .97-3.12 1.19-.9-.96-2.18-1.55-3.6-1.55-2.72 0-4.93 2.2-4.93 4.92 0 .39.04.76.12 1.12-4.1-.21-7.74-2.17-10.17-5.15-.42.73-.66 1.58-.66 2.49 0 1.72.87 3.23 2.2 4.12-.8-.03-1.54-.25-2.19-.62v.06c0 2.41 1.72 4.42 4 4.87-.42.12-.87.18-1.32.18-.32 0-.63-.03-.93-.08.64 1.97 2.48 3.4 4.67 3.44-1.71 1.34-3.86 2.15-6.2 2.15-.4 0-.8-.02-1.19-.07 2.21 1.42 4.84 2.24 7.68 2.24 9.21 0 14.25-7.63 14.25-14.25 0-.22 0-.43-.02-.64.98-.7 1.83-1.58 2.51-2.58z" />
                  </svg>
                </a>
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="size-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5c-6.62 0-12 5.38-12 12 0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.41-4.04-1.41-.54-1.37-1.32-1.73-1.32-1.73-1.08-.74.08-.72.08-.72 1.19.08 1.82 1.23 1.82 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.92 0-1.31.47-2.38 1.23-3.22-.12-.31-.53-1.56.12-3.25 0 0 1-.32 3.28 1.23.95-.27 1.97-.4 2.98-.41 1.01.01 2.03.14 2.98.41 2.28-1.55 3.28-1.23 3.28-1.23.65 1.69.24 2.94.12 3.25.76.84 1.23 1.91 1.23 3.22 0 4.59-2.82 5.61-5.5 5.9.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.82.58 4.77-1.59 8.21-6.08 8.21-11.39 0-6.62-5.38-12-12-12z" />
                  </svg>
                </a>
              </div>
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

export default ProfileLanding;
