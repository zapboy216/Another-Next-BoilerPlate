import { getTranslations } from 'next-intl/server';

import ProfileLanding from '@/components/ProfileLanding';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Hearts',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Hearts() {
  return <ProfileLanding translationsKey="Hearts" />;
}
