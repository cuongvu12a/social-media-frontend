import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import dayjs from 'dayjs';

import RegisterView from './Register.view';
import { RegisterFormValue } from '@src/models';
import { MIN_LENGTH_PASSWORD, MIN_YEAR_OLD } from '@src/constants';
import { useMutationRegister } from '@src/graphql';

const initFormValue: RegisterFormValue = {
  accountName: 'cuongvu.acc',
  email: 'cuongvu.acc@gmail.com',
  password: '123456',
  passwordConfirm: '123456',
  firstName: 'Vũ Ngọc',
  lastName: 'Cương',
  birthday: dayjs(),
  agree: false,
};

const Register = () => {
  const [handleRegister, { loading }] = useMutationRegister({
    onCompleted(data) {
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
  });
  const { t } = useTranslation('translation');
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RegisterFormValue>({
    resolver: yupResolver(
      yup
        .object({
          accountName: yup.string(),
          email: yup
            .string()
            .email(t`message.validEmail`)
            .required(t`message.requireEmail`),
          password: yup
            .string()
            .required(t`message.requirePassword`)
            .min(MIN_LENGTH_PASSWORD, t`message.minLengthPassword`),
          passwordConfirm: yup
            .string()
            .oneOf([yup.ref('password'), null], t`message.passwordNotMatch`),
          firstName: yup.string().required(t`message.requireFirstName`),
          lastName: yup.string().required(t`message.requireLastName`),
          birthday: yup
            .string()
            .test('DOB', t`message.birthdayValidate`, (value) => {
              return dayjs().diff(dayjs(value), 'years') >= MIN_YEAR_OLD;
            }),
          agree: yup.boolean().isTrue(t`message.isTrueValueAgree`),
        })
        .required()
    ),
    defaultValues: initFormValue,
  });

  const onSubmit = (values: RegisterFormValue) => {
    handleRegister({
      variables: {
        input: {
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          password: values.password,
          accountName: values.accountName,
          phoneNumber: values.phoneNumber,
          birthday: values.birthday?.valueOf(),
        },
      },
    });
  };

  return (
    <RegisterView
      t={t}
      handleSubmit={handleSubmit(onSubmit)}
      control={control}
      error={errors}
    />
  );
};

export default Register;
