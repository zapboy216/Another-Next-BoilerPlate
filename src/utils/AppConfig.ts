import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types';

const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'COMPANY DX',
  locales: ['en', 'es', 'fr'],
  localeNames: {
    en: 'English',
    es: 'Spanish',
    fr: 'French',
  },
  localePrefix: 'your-locale-prefix',
  defaultLocale: 'en',
};
