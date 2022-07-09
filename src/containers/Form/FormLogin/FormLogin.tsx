import React from 'react';
import { TFunction } from 'react-i18next';
import {
  Controller,
  Control,
  FieldErrorsImpl,
  DeepRequired,
} from 'react-hook-form';

import { Button } from '@src/components/Button';
import { Checkbox } from '@src/components/Checkbox';
import { ROUTE } from '@src/constants';
import { Link } from 'react-router-dom';
import { LoginFormValue } from '@src/models';
import { FormItem } from '@src/components/Form';

export interface FormLoginProps {
  t: TFunction<'translation', undefined>;
  handleSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  control: Control<LoginFormValue, any>;
  error: FieldErrorsImpl<DeepRequired<LoginFormValue>>;
}

export const FormLogin = ({
  t,
  handleSubmit,
  control,
  error,
}: FormLoginProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <FormItem
            name='email'
            field={field}
            label={t`label.email`}
            placeholder={t`placeholder.email`}
            error={error.email}
            containerClass={'mb-6'}
          />
        )}
      />
      <div className='relative mb-4'>
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <FormItem
              name='password'
              type='password'
              field={field}
              label={t`label.password`}
              placeholder={t`placeholder.password`}
              error={error.password}
            />
          )}
        />
        <Link
          to={ROUTE.FORGOT_PASSWORD}
          className='absolute top-0 right-0 flex items-center capitalize text-xs text-primary'
        >{t`content.forgotPassword`}</Link>
      </div>
      <Controller
        name='remember'
        control={control}
        render={({ field: { ref, ...rest } }) => (
          <Checkbox
            {...rest}
            checked={rest.value}
            palette='primary'
            className='text-text.secondary mb-4'
          >{t`label.rememberMe`}</Checkbox>
        )}
      />
      <Button
        className='w-full mb-6'
        htmlType='submit'
        children={t`button.loginSubmit`}
        type='primary'
        palette='primary'
      />
    </form>
  );
};
