import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import LoginView from './Login.view';
import { LoginFormValue } from '@src/models';
import { MIN_LENGTH_PASSWORD } from '@src/constants';
import { useMutationLogin } from '@src/graphql';

const initFormValue: LoginFormValue = {
  email: 'cuongvu.acc@gmail.com',
  password: '123456',
  remember: true,
};

const Login = () => {
  const [handleLogin, { loading }] = useMutationLogin({
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
  } = useForm<LoginFormValue>({
    resolver: yupResolver(
      yup
        .object({
          email: yup
            .string()
            .email(t`message.validEmail`)
            .required(t`message.requireEmail`),
          password: yup
            .string()
            .required(t`message.requirePassword`)
            .min(MIN_LENGTH_PASSWORD, t`message.minLengthPassword`),
        })
        .required()
    ),
    defaultValues: initFormValue,
  });

  const onSubmit = (values: LoginFormValue) => {
    handleLogin({
      variables: {
        input: {
          email: values.email,
          password: values.password,
        },
      },
    });
  };

  return (
    <LoginView
      t={t}
      handleSubmit={handleSubmit(onSubmit)}
      control={control}
      error={errors}
    />
  );
};

export default Login;
