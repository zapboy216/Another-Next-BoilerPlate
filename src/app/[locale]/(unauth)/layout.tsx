import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      leftNav={
        <>
          <li className="rounded-md bg-white shadow-lg hover:bg-gray-100">
            <Link href="/">
              <span className="block cursor-pointer px-4 py-2 text-gray-700 transition-colors hover:text-gray-900">
                {t('home_link')}
              </span>
            </Link>
          </li>
          <li className="rounded-md bg-white shadow-lg hover:bg-gray-100">
            <Link href="/about/">
              <span className="block cursor-pointer px-4 py-2 text-gray-700 transition-colors hover:text-gray-900">
                {t('about_link')}
              </span>
            </Link>
          </li>
          <li className="rounded-md bg-white shadow-lg hover:bg-gray-100">
            <Link href="/guestbook/">
              <span className="block cursor-pointer px-4 py-2 text-gray-700 transition-colors hover:text-gray-900">
                {t('guestbook_link')}
              </span>
            </Link>
          </li>
          <li className="rounded-md bg-white shadow-lg hover:bg-gray-100">
            <Link href="/skills/">
              <span className="block cursor-pointer px-4 py-2 text-gray-700 transition-colors hover:text-gray-900">
                {t('skills_link')}
              </span>
            </Link>
          </li>
          <li className="rounded-md bg-white shadow-lg hover:bg-gray-100">
            <Link href="/portfolio/">
              <span className="block cursor-pointer px-4 py-2 text-gray-700 transition-colors hover:text-gray-900">
                {t('portfolio_link')}
              </span>
            </Link>
          </li>
          <li className="rounded-md bg-white shadow-lg hover:bg-gray-100">
            <Link href="/contact/">
              <span className="block cursor-pointer px-4 py-2 text-gray-700 transition-colors hover:text-gray-900">
                {t('contact_link')}
              </span>
            </Link>
          </li>
        </>
      }
      rightNav={
        <>
          <li className="rounded-md bg-white shadow-lg hover:bg-gray-100 md:hidden">
            <Link href="/sign-in/">
              <span className="block cursor-pointer px-4 py-2 text-gray-700 transition-colors hover:text-gray-900">
                {t('sign_in_link')}
              </span>
            </Link>
          </li>

          <li className="rounded-md bg-white shadow-lg hover:bg-gray-100 md:hidden">
            <Link href="/sign-up/">
              <span className="block cursor-pointer px-4 py-2 text-gray-700 transition-colors hover:text-gray-900">
                {t('sign_up_link')}
              </span>
            </Link>
          </li>

          <li className="rounded-md bg-white shadow-lg hover:bg-gray-100">
            <LocaleSwitcher />
          </li>
        </>
      }
    >
      <div className="px-4 py-5 text-xl sm:px-6 lg:px-8 [&_p]:my-6">
        {props.children}
      </div>
    </BaseTemplate>
  );
}
