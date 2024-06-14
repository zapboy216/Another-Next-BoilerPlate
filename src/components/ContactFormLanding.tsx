'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

interface ContactFormLandingProps {
  translationsKey: string;
}

const ContactFormLanding: React.FC<ContactFormLandingProps> = ({
  translationsKey,
}) => {
  const t = useTranslations(translationsKey);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="font-montserrat relative min-h-screen w-full overflow-auto">
      {/* Background */}
      <Image
        className="absolute left-0 top-0 size-full object-cover"
        src={t('backgroundImageUrl')}
        alt="Background"
        layout="fill"
        objectFit="cover"
      />

      {/* Overlay */}
      <div className="absolute left-0 top-0 size-full bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center text-white md:flex-row md:text-left">
        <div className="flex-1">
          {/* Glass Panel */}
          <div className="m-10 rounded-lg bg-white bg-opacity-10 p-8 backdrop-blur-md">
            <h1 className="animate-fade-in-bottom mb-4 text-4xl font-bold md:text-4xl">
              {t('splash_heading_one')}
            </h1>
            <h2 className="animate-fade-in-bottom mb-8 text-2xl md:text-4xl">
              {t('splash_heading_two')}
            </h2>

            <p className="animate-fade-in-bottom mb-4 text-lg md:text-xl">
              {t('paragraph_one')}
            </p>
            <p className="animate-fade-in-bottom mb-4 text-lg md:text-xl">
              {t('paragraph_two')}
            </p>

            <div className="relative z-20 mt-8">
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 w-full max-w-lg"
              >
                <div className="mb-4">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
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
                    className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
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
                    className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="message"
                  >
                    {t('message')}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                  >
                    {t('submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* End Glass Panel */}
        </div>
        <div className="mt-8 flex-1 md:ml-8 md:mt-0">
          <Image
            src={t('hero_image_url')}
            alt="Dummy Attorney"
            width={400}
            height={400}
            className="mt-10 w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactFormLanding;
