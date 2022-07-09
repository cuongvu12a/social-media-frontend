import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { TFunction } from 'react-i18next';

import { BannerLogin, Logo } from '@src/components/Icons';
import { ROUTE } from '@src/constants';
import { Divider } from '@src/components/Divider';
import { SocialButtons } from '@src/containers/SocialButtons';
import { FormLogin, FormLoginProps } from '@src/containers/Form';

interface LoginViewProps extends FormLoginProps {
  t: TFunction<'translation', undefined>;
}

const LoginView = ({ t, ...rest }: LoginViewProps) => {
  return (
    <>
      <Link to={ROUTE.HOME} className='text-violet-600'>
        <Logo className='fixed top-9 left-10 z-10' />
      </Link>
      <Row className='items-center h-full'>
        <Col
          span={0}
          lg={15}
          className='lg:flex items-center justify-center h-full p-16 bg-bg.body'
        >
          <BannerLogin />
        </Col>
        <Col
          span={24}
          lg={9}
          className='flex justify-center items-center h-full p-3 xl:px-12 bg-bg.section'
        >
          <div className='w-full max-w-md px-4'>
            <div className='text-2xl font-medium text-gray-800 text-text.secondary first-letter:uppercase'>
              {t`title.loginPage`}
            </div>
            <div className='mb-8 text-sm text-gray-700 text-text.primary first-letter:uppercase'>{t`content.loginPage`}</div>
            <FormLogin t={t} {...rest} />
            <div className='flex gap-7 justify-center mb-1 text-text.primary first-letter:uppercase'>
              <span>{t`content.newOnOurPlatform`}</span>
              <Link
                to={ROUTE.REGISTER}
                className='text-primary first-letter:uppercase'
              >{t`content.createAnAccount`}</Link>
            </div>
            <Divider containerClass='mb-2 lowercase' content='or' />
            <SocialButtons />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LoginView;
