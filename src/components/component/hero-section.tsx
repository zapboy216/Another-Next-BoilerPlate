import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

const t = useTranslations('Index');
export function HeroSection() {
  return (
    <section className="w-full bg-[url('/placeholder.svg')] bg-cover bg-center py-24 md:py-32 lg:py-40">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {t('heading_one')}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
            {t('paragraph_one')}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button>Get Started</Button>
            <Button variant="secondary">Learn More</Button>
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
