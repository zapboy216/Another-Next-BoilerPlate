import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

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
      <div className="grid grid-cols-1 justify-items-start gap-3 md:grid-cols-2 xl:grid-cols-3">
        {Array.from(Array(6).keys()).map((elt) => (
          <Link
            className="hover:text-blue-700"
            key={elt}
            href={`/portfolio/${elt}`}
          >
            {t('portfolio_name', { name: elt })}
          </Link>
        ))}
      </div>
      <h1>{t('splash_heading')}</h1>
      <h1>{t('heading_one')}</h1>
      <h2>{t('heading_two')}</h2>
      <p>{t('paragraph_one')}</p>
      <p>{t('paragraph_two')}</p>
      <p>{t('paragraph_three')}</p>
      {t('cta')}
    </>
  );
};

export default Portfolio;
