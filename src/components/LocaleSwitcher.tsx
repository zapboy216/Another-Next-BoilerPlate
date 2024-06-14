'use client';

import Image from 'next/image';
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
    en: t('flag_us'),
    es: t('flag_es'),
    fr: t('flag_fr'),
    // Add other locales and their respective flag paths here
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
            <Image
              src={localeFlags[elt]}
              alt={`${localeNames[elt]} flag`}
              width={20}
              height={15}
              className="mr-2"
            />
            {localeNames[elt]}
          </span>
        </option>
      ))}
    </select>
  );
}
