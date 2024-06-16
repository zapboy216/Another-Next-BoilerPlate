import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { lazy, Suspense } from 'react';

import Loader from '@/app/Loader';
import { GuestbookForm } from '@/components/GuestbookForm';
import { GuestbookList } from '@/components/GuestbookList';

const LazyImage = lazy(() => import('next/image'));

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Guestbook',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Guestbook = () => {
  const t = useTranslations('Guestbook');
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const renderBackground = () => {
    if (isMobile) {
      return (
        <div className="absolute left-0 top-0 size-full bg-gradient-to-r from-blue-500 to-purple-500" />
      );
    }
    return (
      <Suspense fallback={<Loader />}>
        <LazyImage
          className="absolute left-0 top-0 size-full object-cover"
          src={t('backgroundImageUrl')}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </Suspense>
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-auto">
      {/* Background */}
      {renderBackground()}

      {/* Overlay */}
      <div className="absolute left-0 top-0 size-full bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center text-white md:flex-row md:text-left">
        <div className="flex-1">
          {/* Glass Panel */}
          <div className="glass-panel m-10 p-8">
            {/* Smoked Panel */}
            <div className="smoked-panel p-4">
              <GuestbookForm />
            </div>
            {/* End Smoked Panel */}
          </div>
          {/* End Glass Panel */}
        </div>
        <div className="mt-6 flex-1 md:ml-8 md:mt-0">
          <Suspense fallback={<Loader />}>
            <LazyImage
              src={t('hero_image_url')}
              alt="Hero"
              width={400}
              height={400}
              className="hero-image mt-10 w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<p>{t('loading_guestbook')}</p>}>
        <GuestbookList />
      </Suspense>
    </div>
  );
};

export default Guestbook;
