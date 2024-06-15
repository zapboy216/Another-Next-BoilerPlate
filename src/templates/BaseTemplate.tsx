'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import ChatBot from 'react-chatbotify';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import MenuButton from '@/components/MenuButton';
import ThemeToggle from '@/components/ThemeToggle';
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
      <div className="mx-4 max-w-screen-md sm:mx-8 md:mx-8 lg:mx-20 lg:max-w-full">
        <header className="mx-10 border-none">
          <div className="flex items-center justify-between py-4 md:py-5 lg:py-6">
            <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-7">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  {AppConfig.name}
                </h1>
                <h2 className="text-lg dark:text-gray-300 sm:text-xl md:text-2xl">
                  {t('description')}
                </h2>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
              <div className="lg:hidden">
                <MenuButton
                  onClick={toggleMobileMenu}
                  isOpen={isMobileMenuOpen}
                />
              </div>
              <nav
                className={`lg:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}
              >
                <ul className="flex flex-col space-y-2 lg:flex-row lg:space-x-7 lg:space-y-0">
                  {props.leftNav}
                  {props.rightNav}
                </ul>
              </nav>
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="main-content">{props.children}</main>
        <ChatBot />
      </div>
    </div>
  );
};

export { BaseTemplate };
