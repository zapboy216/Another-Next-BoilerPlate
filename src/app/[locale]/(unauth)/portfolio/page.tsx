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

  return <EightCards />;
};

export default Portfolio;
