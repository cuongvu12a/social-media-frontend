import {
  Checkbox as AntCheckbox,
  CheckboxProps as AntCheckboxProps,
} from 'antd';
import { styled, Palette, getColor } from '@src/theme';

interface CheckboxWrapperProps {
  palette: Palette;
}

interface CheckboxProps extends AntCheckboxProps, CheckboxWrapperProps {}

export const Checkbox = ({ palette, ...rest }: CheckboxProps) => {
  return (
    <CheckboxWrapper palette={palette}>
      <AntCheckbox {...rest} />
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.div<CheckboxWrapperProps>(
  ({ palette }) => `
  .ant-checkbox-inner{
    background: ${getColor('bg.section')};
    border-color: ${getColor('border')} !important;
  }
  .ant-checkbox-input{
    &:hover, &:focus{
      & ~ .ant-checkbox-inner {
        border-color: ${getColor(palette)} !important;
      }
    }
  }
  .ant-checkbox-checked{
    .ant-checkbox-inner {
      border-color: ${getColor(palette)} !important;
      background: ${getColor(palette)};
    }
    &::after{
      border-color: ${getColor(palette)} !important;
    }
  }
  `
);
