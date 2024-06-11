import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';

export async function HeroSection() {
  const t = await getTranslations('BaseTemplate');

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40">
      <video
        className="absolute left-0 top-0 z-0 size-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={t('backgroundVideoUrl')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-10 bg-black opacity-50" />
      <div className="container relative z-20 flex items-center justify-center">
        <div className="glassmorphism w-full max-w-screen-md rounded-lg p-6 text-white md:p-8 lg:p-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-4xl lg:text-4xl">
            {t('heading_one')}
          </h1>
          <p className="mt-4 text-lg text-gray-300 md:text-xl">
            {t('paragraph_one')}
          </p>
          <p className="mt-4 text-lg text-gray-300 md:text-xl">
            {t('paragraph_two')}
          </p>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-4xl lg:text-4xl">
            {t('splash_heading')}
          </h1>
          <p className="mt-4 text-lg text-gray-300 md:text-xl">
            {t('paragraph_three')}
          </p>
          <p className="mt-4 text-lg text-gray-300 md:text-xl">
            {t('paragraph_four')}
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Button>{t('get_started')}</Button>
            <Button variant="secondary">{t('learn_more')}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
