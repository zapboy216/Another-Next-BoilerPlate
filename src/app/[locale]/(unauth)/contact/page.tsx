import { getTranslations } from 'next-intl/server';

import ContactFormLanding from '@/components/ContactFormLanding';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Contact',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Contact() {
  return <ContactFormLanding translationsKey="Contact" />;
}
