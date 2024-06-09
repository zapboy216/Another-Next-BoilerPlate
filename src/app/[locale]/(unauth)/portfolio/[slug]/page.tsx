import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type IPortfolioDetailProps = {
  params: { slug: string; locale: string };
};

export function generateStaticParams() {
  return Array.from(Array(6).keys()).map((elt) => ({
    slug: `${elt}`,
  }));
}

export async function generateMetadata(props: IPortfolioDetailProps) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'PortfolioSlug',
  });

  return {
    title: t('meta_title', { slug: props.params.slug }),
    description: t('meta_description', { slug: props.params.slug }),
  };
}

const PortfolioDetail = (props: IPortfolioDetailProps) => {
  const t = useTranslations('PortfolioSlug');

  return (
    <>
      <h1 className="capitalize">
        {t('splash_heading', { slug: props.params.slug })}
      </h1>
      <p>{t('paragraph_one')}</p>
      <p>{t('paragraph_two')}</p>
      <p>{t('paragraph_three')}</p>
      <p>{t('paragraph_four')}</p>
    </>
  );
};

export default PortfolioDetail;
