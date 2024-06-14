import { getTranslations } from 'next-intl/server';

import ProfileLanding from '@/components/ProfileLanding';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Spades',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Spades() {
  return <ProfileLanding translationsKey="Spades" />;
}
