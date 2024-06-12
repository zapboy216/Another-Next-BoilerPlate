import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import EightCards from '@/components/component/eight-cards';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Portfolio',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Portfolio = () => {
  const t = useTranslations('Portfolio');

  return (
    <>
      <EightCards />
      <div className="flex flex-wrap gap-4">
        <ul className="flex flex-wrap gap-4">
          <li className="w-full flex-1 rounded-md border border-gray-300 shadow-lg transition-all hover:bg-gray-100 sm:w-auto">
            <Link href="/hearts/">
              <span className="block cursor-pointer px-6 py-3 text-gray-700 transition-colors hover:text-gray-900">
                {t('hearts_link')}
                <Image
                  src={t('imageUrl')}
                  alt={t('imageUrlAlt')}
                  width="300"
                  height="300"
                />
                <div>{t('splash_heading')}</div>
                <div>{t('paragraph_one')}</div>
                <div>{t('paragraph_two')}</div>
              </span>
            </Link>
          </li>
          <li className="w-full flex-1 rounded-md border border-gray-300 shadow-lg transition-all hover:bg-gray-100 sm:w-auto">
            <Link href="/diamonds/">
              <span className="block cursor-pointer px-6 py-3 text-gray-700 transition-colors hover:text-gray-900">
                {t('diamonds_link')}
                <Image
                  src={t('imageUrl')}
                  alt={t('imageUrlAlt')}
                  width="300"
                  height="300"
                />
                <div>{t('splash_heading')}</div>
                <div>{t('paragraph_one')}</div>
                <div>{t('paragraph_two')}</div>
              </span>
            </Link>
          </li>
          <li className="w-full flex-1 rounded-md border border-gray-300 shadow-lg transition-all hover:bg-gray-100 sm:w-auto">
            <Link href="/spades/">
              <span className="block cursor-pointer px-6 py-3 text-gray-700 transition-colors hover:text-gray-900">
                {t('spades_link')}
                <Image
                  src={t('imageUrl')}
                  alt={t('imageUrlAlt')}
                  width="300"
                  height="300"
                />
                <div>{t('splash_heading')}</div>
                <div>{t('paragraph_one')}</div>
                <div>{t('paragraph_two')}</div>
              </span>
            </Link>
          </li>
          <li className="w-full flex-1 rounded-md border border-gray-300 shadow-lg transition-all hover:bg-gray-100 sm:w-auto">
            <Link href="/clubs/">
              <span className="block cursor-pointer px-6 py-3 text-gray-700 transition-colors hover:text-gray-900">
                {t('clubs_link')}
                <Image
                  src={t('imageUrl')}
                  alt={t('imageUrlAlt')}
                  width="300"
                  height="300"
                />
                <div>{t('splash_heading')}</div>
                <div>{t('paragraph_one')}</div>
                <div>{t('paragraph_two')}</div>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Portfolio;
