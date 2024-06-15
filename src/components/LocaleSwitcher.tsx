'use client';

import { useLocale, useTranslations } from 'next-intl';
import type { ChangeEventHandler } from 'react';

import { usePathname, useRouter } from '@/libs/i18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('RootLayout');

  const localeFlags = {
    en: (
      <svg width="20" height="15" viewBox="0 0 60 30">
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v-15 h-60 v15 z M30,15 h30 v15 h-60 v-15 z" />
        </clipPath>
        <g clipPath="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#b22234" />
          <path
            d="M0,2 v2 h60 v-2 z m0,4 v2 h60 v-2 z m0,4 v2 h60 v-2 z m0,4 v2 h60 v-2 z m0,4 v2 h60 v-2 z m0,4 v2 h60 v-2 z m0,4 v2 h60 v-2 z"
            fill="#fff"
          />
          <path d="M0,0 v15 h26 v-15 z" fill="#3c3b6e" />
          <g fill="#fff" transform="translate(1.8,1.2) scale(0.6)">
            <g id="a">
              <g id="e">
                <g id="d">
                  <g id="c">
                    <g id="b">
                      <path
                        d="M0-2 v2 h1.1 l0.6,1.8 h0 l0.6-1.8 h1.1 v-2 h-1.1 l-0.6-1.8 h0 l-0.6,1.8 z"
                        transform="rotate(18)"
                      />
                      <path
                        d="M0-2 v2 h1.1 l0.6,1.8 h0 l0.6-1.8 h1.1 v-2 h-1.1 l-0.6-1.8 h0 l-0.6,1.8 z"
                        transform="rotate(54)"
                      />
                    </g>
                    <path
                      d="M0-2 v2 h1.1 l0.6,1.8 h0 l0.6-1.8 h1.1 v-2 h-1.1 l-0.6-1.8 h0 l-0.6,1.8 z"
                      transform="rotate(36)"
                    />
                  </g>
                  <path
                    d="M0-2 v2 h1.1 l0.6,1.8 h0 l0.6-1.8 h1.1 v-2 h-1.1 l-0.6-1.8 h0 l-0.6,1.8 z"
                    transform="rotate(18)"
                  />
                </g>
                <path d="M0-2 v2 h1.1 l0.6,1.8 h0 l0.6-1.8 h1.1 v-2 h-1.1 l-0.6-1.8 h0 l-0.6,1.8 z" />
              </g>
              <use href="#e" transform="scale(-1,1)" />
            </g>
            <use href="#a" transform="scale(1,-1)" />
            <use href="#a" transform="scale(-1,-1)" />
          </g>
        </g>
      </svg>
    ),
    es: (
      <svg width="20" height="15" viewBox="0 0 18 12">
        <rect width="18" height="12" fill="#aa151b" />
        <rect y="4" width="18" height="4" fill="#f1bf00" />
      </svg>
    ),
    fr: (
      <svg width="20" height="15" viewBox="0 0 3 2">
        <rect width="1" height="2" fill="#0055a4" />
        <rect x="1" width="1" height="2" fill="#fff" />
        <rect x="2" width="1" height="2" fill="#ef4135" />
      </svg>
    ),
    // Add other locales and their respective SVG flags here
  };

  const localeNames = {
    en: t('locale_en'),
    es: t('locale_es'),
    fr: t('locale_fr'),
    // Add other locales and their respective names here
  };

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(pathname, { locale: event.target.value });
    router.refresh();
  };

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className="rounded-md border border-gray-300 p-2 font-medium focus:outline-none focus-visible:ring"
    >
      {AppConfig.locales.map((elt) => (
        <option key={elt} value={elt} className="flex items-center space-x-2">
          <span className="inline-flex items-center">
            {localeFlags[elt]}
            <span className="ml-2">{localeNames[elt]}</span>
          </span>
        </option>
      ))}
    </select>
  );
}
