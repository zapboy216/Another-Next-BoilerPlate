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
            <div className="flex items-center space-x-4">
              <Image
                src={t('logo_image_url')}
                alt={t('logo_image_alt')}
                width={50} // Desired width of the image
                height={50} // Desired height of the image
                className="rounded-lg shadow-lg"
              />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  {AppConfig.name}
                </h1>
                <h2 className="text-xl">{t('description')}</h2>
              </div>
            </div>
            <div className="lg:hidden">
              <MenuButton
                onClick={toggleMobileMenu}
                isOpen={isMobileMenuOpen}
              />
            </div>
          </div>
          <nav className={`lg:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-4">
              {props.leftNav}
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
