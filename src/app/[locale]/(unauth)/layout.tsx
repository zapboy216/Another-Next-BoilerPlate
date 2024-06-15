import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      leftNav={
        <>
          <li className="charcoal-glass menu-item">
            <Link href="/">
              <span className="block cursor-pointer px-4 py-0 transition-colors">
                {t('home_link')}
              </span>
            </Link>
          </li>
          <li className="charcoal-glass menu-item">
            <Link href="/about/">
              <span className="block cursor-pointer px-4 py-0 transition-colors">
                {t('about_link')}
              </span>
            </Link>
          </li>
          <li className="charcoal-glass menu-item">
            <Link href="/guestbook/">
              <span className="block cursor-pointer px-4 py-0 transition-colors">
                {t('guestbook_link')}
              </span>
            </Link>
          </li>
          <li className="charcoal-glass menu-item">
            <Link href="/skills/">
              <span className="block cursor-pointer px-4 py-0 transition-colors">
                {t('skills_link')}
              </span>
            </Link>
          </li>
          <li className="charcoal-glass menu-item">
            <Link href="/portfolio/">
              <span className="block cursor-pointer px-4 py-0 transition-colors">
                {t('portfolio_link')}
              </span>
            </Link>
          </li>
          <li className="charcoal-glass menu-item">
            <Link href="/contact/">
              <span className="block cursor-pointer px-4 py-0 transition-colors">
                {t('contact_link')}
              </span>
            </Link>
          </li>
        </>
      }
      rightNav={
        <>
          <li className="charcoal-glass menu-item md:hidden">
            <Link href="/sign-in/">
              <span className="block cursor-pointer px-4 py-0 transition-colors">
                {t('sign_in_link')}
              </span>
            </Link>
          </li>

          <li className="charcoal-glass menu-item md:hidden">
            <Link href="/sign-up/">
              <span className="block cursor-pointer px-4 py-0 transition-colors">
                {t('sign_up_link')}
              </span>
            </Link>
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
