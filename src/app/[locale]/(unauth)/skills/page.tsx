import {
  CodeIcon,
  CodepenIcon,
  GaugeIcon,
  LightbulbIcon,
  MessageCircleIcon,
  NetworkIcon,
  UsersIcon,
  WindIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Skills',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Skills = () => {
  const t = useTranslations('Skills');

  return (
    <div className="container mx-0 px-4 py-12 md:px-6 lg:px-2">
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">{t('splash_heading_one')}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <CodeIcon className="mb-4 text-primary" size={48} />
            <h3 className="mb-2 text-lg font-semibold">{t('heading_one')}</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              {t('paragraph_one')}
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <CodepenIcon className="mb-4 text-primary" size={48} />
            <h3 className="mb-2 text-lg font-semibold">{t('heading_two')}</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              {t('paragraph_two')}
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <NetworkIcon className="mb-4 text-primary" size={48} />
            <h3 className="mb-2 text-lg font-semibold">{t('heading_three')}</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              {t('paragraph_three')}
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <WindIcon className="mb-4 text-primary" size={48} />
            <h3 className="mb-2 text-lg font-semibold">{t('heading_four')}</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              {t('paragraph_four')}
            </p>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">{t('splash_heading_two')}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <UsersIcon className="mb-4 text-primary" size={48} />
            <h3 className="mb-2 text-lg font-semibold">{t('heading_five')}</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              {t('paragraph_five')}
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <LightbulbIcon className="mb-4 text-primary" size={48} />
            <h3 className="mb-2 text-lg font-semibold">{t('heading_six')}</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              {t('paragraph_six')}
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <MessageCircleIcon className="mb-4 text-primary" size={48} />
            <h3 className="mb-2 text-lg font-semibold">{t('heading_seven')}</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              {t('paragraph_seven')}
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
            <GaugeIcon className="mb-4 text-primary" size={48} />
            <h3 className="mb-2 text-lg font-semibold">{t('heading_eight')}</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              {t('paragraph_eight')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
