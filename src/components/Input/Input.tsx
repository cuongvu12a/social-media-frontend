import { useState } from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';

import { IconEye, IconEyeInvisible } from '@src/components/Icons';
import { getColor, Palette, styled } from '@src/theme';

export interface InputWrapperProps {
  palette: Palette;
  isTransformPlaceholder?: boolean;
}

interface InputProps extends AntInputProps, InputWrapperProps {
  containerClass?: string;
}

export const Input = ({
  palette,
  isTransformPlaceholder,
  containerClass,
  ...rest
}: InputProps) => {
  return (
    <InputWrapper
      palette={palette}
      isTransformPlaceholder={isTransformPlaceholder}
      className={`${containerClass || ''}`}
    >
      <AntInput {...rest} />
    </InputWrapper>
  );
};

export const InputPassword = ({
  palette,
  containerClass,
  className,
  ...rest
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <InputWrapper
      palette={palette}
      className={`${containerClass || ''} relative`}
    >
      <AntInput
        {...rest}
        type={isVisible ? 'text' : 'password'}
        className={`${className || ''} pr-7`}
      />
      <InputIconWrap
        palette={palette}
        className='flex items-center w-4 cursor-pointer text-base text-text.primary'
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? <IconEyeInvisible /> : <IconEye />}
      </InputIconWrap>
    </InputWrapper>
  );
};

export const InputWrapper = styled.div<InputWrapperProps>(
  ({ palette, isTransformPlaceholder }) => `
  .ant-input{
    height: 38px;
    border-radius: 6px;
    border-color: ${
      palette === 'primary' ? getColor('border') : getColor(palette)
    };
    background: ${getColor('bg.section')} !important;
    color: ${getColor('text.primary')};
    &:hover, &:focus{
      box-shadow: 0 0 6px 0 ${getColor(palette)};
      border: 1px solid ${getColor(palette)};
    }
    &::placeholder{
      color: ${getColor('text.placeholder')};
    }
    ${
      isTransformPlaceholder &&
      `
        &::placeholder{
          transition: all .1s ease;
        }
        &:focus::placeholder{
          transform: translateX(6px);
        }

      `
    }
  }
`
);

export const InputIconWrap = styled.span<InputWrapperProps>(
  ({ palette }) => `
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  &:hover{
    color: ${getColor(palette)};
  }
`
);

export const InputSearch = AntInput.Search;
