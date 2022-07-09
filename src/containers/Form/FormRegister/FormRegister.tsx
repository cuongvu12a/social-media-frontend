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
import { RegisterFormValue } from '@src/models';
import { FormItem } from '@src/components/Form';

export interface FormRegisterProps {
  t: TFunction<'translation', undefined>;
  handleSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  control: Control<RegisterFormValue, any>;
  error: FieldErrorsImpl<DeepRequired<RegisterFormValue>>;
}

export const FormRegister = ({
  t,
  handleSubmit,
  control,
  error,
}: FormRegisterProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <Controller
        name='accountName'
        control={control}
        render={({ field }) => (
          <FormItem
            name='accountName'
            field={field}
            label={t`label.accountName`}
            placeholder={t`placeholder.accountName`}
            error={error.accountName}
            containerClass={'mb-6'}
          />
        )}
      />
      <Controller
        name='firstName'
        control={control}
        render={({ field }) => (
          <FormItem
            name='firstName'
            field={field}
            label={t`label.firstName`}
            placeholder={t`placeholder.firstName`}
            error={error.firstName}
            containerClass={'mb-6'}
          />
        )}
      />
      <Controller
        name='lastName'
        control={control}
        render={({ field }) => (
          <FormItem
            name='lastName'
            field={field}
            label={t`label.lastName`}
            placeholder={t`placeholder.lastName`}
            error={error.lastName}
            containerClass={'mb-6'}
          />
        )}
      />
      <Controller
        name='birthday'
        control={control}
        render={({ field }) => (
          <FormItem
            name='birthday'
            type='datePicker'
            field={field}
            label={t`label.birthday`}
            placeholder={t`placeholder.birthday`}
            error={error.birthday}
            containerClass={'mb-6'}
          />
        )}
      />
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
            containerClass={'mb-6'}
          />
        )}
      />
      <Controller
        name='passwordConfirm'
        control={control}
        render={({ field }) => (
          <FormItem
            name='passwordConfirm'
            type='password'
            field={field}
            label={t`label.passwordConfirm`}
            placeholder={t`placeholder.password`}
            error={error.passwordConfirm}
            containerClass={'mb-6'}
          />
        )}
      />
      <Controller
        name='agree'
        control={control}
        render={({ field: { ref, ...rest } }) => (
          <div className='mb-4'>
            <Checkbox
              {...rest}
              checked={rest.value}
              palette='primary'
              className='text-text.secondary'
            >
              <span>{t`label.agree`}</span>{' '}
              <Link
                to={ROUTE.LOGIN}
                className='text-primary'
              >{t`label.privacyPolicyTerms`}</Link>
            </Checkbox>
            {!!error.agree && (
              <span className='first-letter:uppercase text-danger text-xs'>
                {error.agree.message}
              </span>
            )}
          </div>
        )}
      />
      <Button
        className='w-full mb-6'
        htmlType='submit'
        children={t`button.registerSubmit`}
        type='primary'
        palette='primary'
      />
    </form>
  );
};
