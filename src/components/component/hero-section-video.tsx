import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';

export async function HeroSection() {
  const t = await getTranslations('BaseTemplate');

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40">
      <video
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {t('splash_heading')}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
            {t('paragraph_one')}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button>{t('get_started')}</Button>
            <Button variant="secondary">{t('learn_more')}</Button>
          </div>
        </div>
        <div>
          <Image
            alt="Hero Image"
            className="mx-auto aspect-square rounded-lg object-cover"
            height={600}
            src="/placeholder.svg"
            width={600}
          />
        </div>
      </div>
    </section>
  );
}
