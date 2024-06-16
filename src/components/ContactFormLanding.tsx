'use client';

import { useTranslations } from 'next-intl';
import React, { lazy, Suspense, useState } from 'react';

import Loader from '@/app/Loader';

interface ContactFormLandingProps {
  translationsKey: keyof IntlMessages;
}
const LazyImage = lazy(() => import('next/image'));
const ContactFormLanding: React.FC<ContactFormLandingProps> = ({
  translationsKey,
}) => {
  const t = useTranslations(translationsKey);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log('Form submitted:', formData);
  };

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
          <div className="glass-panel m-10">
            <div className="mb-4 flex justify-center space-x-4" />
            <h1 className="animate-fade-in-down mb-4 text-4xl font-bold md:text-3xl">
              {t('splash_landing')}
            </h1>
            <p className="animate-fade-in-up mb-4 text-lg md:text-xl">
              {t('paragraph_one')}
            </p>
            <p className="animate-fade-in-down mb-4 text-lg md:text-xl">
              {t('paragraph_two')}
            </p>

            <div className="relative z-20 mt-8">
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 w-full max-w-lg"
              >
                <div className="mb-4">
                  <label
                    className="animate-fade-in-up mb-2 block text-sm font-bold text-white"
                    htmlFor="name"
                  >
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-[#9370DB] dark:text-white"
                    aria-label={t('name')}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="animate-fade-in-down mb-2 block text-sm font-bold text-white"
                    htmlFor="email"
                  >
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-[#9370DB] dark:text-white"
                    aria-label={t('email')}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="animate-fade-in-down mb-2 block text-sm font-bold text-white"
                    htmlFor="message"
                  >
                    {t('message')}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={10} // Adjust the number of rows as needed
                    className="w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-[#9370DB] dark:text-white"
                    aria-label={t('message')}
                    required
                  />
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="animate-fade-in-down w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#8258FA]"
                  >
                    {t('submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* End Glass Panel */}
        </div>
        <div className="mt-10 flex-1 md:ml-8 md:mt-0">
          <Suspense fallback={<Loader />}>
            <LazyImage
              src={t('hero_image_url')}
              alt="Hero"
              width={400}
              height={400}
              className="hero-image mt-8 w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ContactFormLanding;
