'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { GuestbookValidation } from '@/validations/GuestbookValidation';

type IGuestbookFormProps =
  | {
      edit: true;
      id: number;
      defaultValues: z.infer<typeof GuestbookValidation>;
      handleStopEditing: () => void;
    }
  | { edit?: false };

const GuestbookForm = (props: IGuestbookFormProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof GuestbookValidation>>({
    resolver: zodResolver(GuestbookValidation),
    defaultValues: props.edit ? props.defaultValues : undefined,
  });
  const router = useRouter();
  const t = useTranslations('GuestbookForm');

  const handleCreate = handleSubmit(async (data) => {
    if (props.edit) {
      await fetch(`/api/guestbook`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: props.id,
          ...data,
        }),
      });

      props.handleStopEditing();
    } else {
      await fetch(`/api/guestbook`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      reset();
    }

    router.refresh();
  });

  return (
    <form onSubmit={handleCreate} className="space-y-4">
      <div>
        <label
          className="mb-1 block font-medium text-white dark:text-white"
          htmlFor={`username${props.edit ? `-${props.id}` : ''}`}
        >
          {t('username')}
        </label>
        <input
          id={`username${props.edit ? `-${props.id}` : ''}`}
          className="w-full rounded-lg px-4 py-3 text-black shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9370DB] dark:text-white"
          {...register('username')}
        />
        {errors.username?.message && (
          <div className="my-2 text-xs italic text-red-500">
            {errors.username?.message}
          </div>
        )}
      </div>

      <div>
        <label
          className="mb-1 block font-medium text-white dark:text-white"
          htmlFor={`body${props.edit ? `-${props.id}` : ''}`}
        >
          {t('body')}
        </label>
        <textarea
          id={`body${props.edit ? `-${props.id}` : ''}`}
          rows={10}
          className="w-full rounded-lg px-4 py-3 text-black shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9370DB] dark:text-white"
          {...register('body')}
        />
        {errors.body?.message && (
          <div className="my-2 text-xs italic text-red-500">
            {errors.body?.message}
          </div>
        )}
      </div>

      <div>
        <button
          className="w-full rounded-lg bg-[#9370DB] px-6 py-3 font-medium text-white shadow-md hover:bg-[#8258FA] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8258FA]"
          type="submit"
        >
          {t('save')}
        </button>
      </div>
    </form>
  );
};

export { GuestbookForm };
