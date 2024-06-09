import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function About() {
  const t = useTranslations('About');

  return (
    <>
      <h1>{t('heading_one')}</h1>
      <h2>{t('heading_two')}</h2>
      <p>{t('paragraph_one')}</p>
      <p>{t('paragraph_two')}</p>
      <p>{t('paragraph_three')}</p>
      {t('cta')}
    </>
  );
}
