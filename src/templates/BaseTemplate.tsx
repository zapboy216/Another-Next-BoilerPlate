'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import ChatBot from 'react-chatbotify';

import MenuButton from '@/components/MenuButton';
import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full text-gray-700 antialiased">
      <div className="mx-20 max-w-screen-md lg:max-w-full">
        <header className="border-none">
          <div className="flex items-center justify-between py-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {AppConfig.name}
              </h1>
              <h2 className="text-xl">{t('description')}</h2>
            </div>
            <div className="shrink-0" />
            <div className="lg:hidden">
              <MenuButton
                onClick={toggleMobileMenu}
                isOpen={isMobileMenuOpen}
              />
            </div>
          </div>
          <nav className={`lg:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-3">
              {props.leftNav}
              <li className="mx-auto px-4 py-0 sm:px-6 md:px-8 lg:px-10">
                <div className="flex items-center justify-center">
                  <Image
                    src={t('logo_image_url')}
                    alt={t('logo_image_alt')}
                    width={200} // Desired width of the image
                    height={200} // Desired height of the image
                    className="mx-20 rounded-lg shadow-lg"
                  />
                </div>
              </li>
              {props.rightNav}
            </ul>
          </nav>
        </header>
        <main>{props.children}</main>
        <ChatBot />
      </div>
    </div>
  );
};

export { BaseTemplate };
