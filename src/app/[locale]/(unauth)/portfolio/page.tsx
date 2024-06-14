import { getTranslations } from 'next-intl/server';

import PortfolioLanding from '@/components/PortfolioLanding';

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

export default function Portfolio() {
  return <PortfolioLanding translationsKey="Portfolio" />;
}
