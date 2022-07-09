import { Button as AntButton, ButtonProps as AntButtonProp } from 'antd';
import { styled, Palette, getColor } from '@src/theme';

interface ButtonWrapperProps {
  palette: Palette;
}

interface ButtonProps extends AntButtonProp, ButtonWrapperProps {
  containerClass?: string;
  content?: string;
}

export const Button = ({
  palette,
  containerClass,
  className,
  children,
  content,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonWrapper
      palette={palette}
      className={`${containerClass || ''} font-medium rounded`}
    >
      <AntButton
        {...rest}
        className={`${className || ''} font-medium rounded text-xs text-white`}
      >
        {children ? (
          children
        ) : (
          <span className='first-letter:uppercase'>{content}</span>
        )}
      </AntButton>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div<ButtonWrapperProps>(
  ({ palette }) => `
  .ant-btn{
    height: 38px;
    border-color:${getColor(palette)} !important;   
  }
  .ant-btn-primary {
    background: ${getColor(palette)} !important;  
    &:hover{
      box-shadow: 0 8px 25px -8px ${getColor(palette)};
    } 
  } 
  .ant-btn:not(.ant-btn-primary){
    color: ${getColor(palette)} !important;  
    &:hover{
      background: ${getColor(palette, 0.12)} !important;  
    } 
  }
  `
);
