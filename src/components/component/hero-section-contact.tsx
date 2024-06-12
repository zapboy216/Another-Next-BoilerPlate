import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';

export async function HeroSection() {
  const t = await getTranslations('Contact');

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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {t('splash_heading')}
          </h1>
          <p className="mt-4 text-lg text-gray-300 md:text-xl">
            {t('paragraph_one')}
          </p>
          <form className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-lg text-gray-300">
                {t('name_label')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="rounded-lg p-3 text-black"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-lg text-gray-300">
                {t('email_label')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="rounded-lg p-3 text-black"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-lg text-gray-300">
                {t('message_label')}
              </label>
              <textarea
                id="message"
                name="message"
                className="rounded-lg p-3 text-black"
                rows="4"
                required
              />
            </div>
            <Button type="submit">{t('submit_button')}</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
