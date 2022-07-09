import { getColor, Palette, styled } from '@src/theme';
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import { DATE_TIME_FORMAT } from '@src/constants';

const AntDatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

interface DatePickerWrapperProps {
  palette: Palette;
}

type DatePickerProps =  {
  palette: Palette;
};

export const DatePicker = ({ palette, ...rest }: DatePickerProps) => {
  return (
    <DatePickerWrapper palette={palette}>
      <AntDatePicker
        {...rest}
        format={DATE_TIME_FORMAT}
        dropdownClassName={palette}
      />
    </DatePickerWrapper>
  );
};

export const DatePickerWrapper = styled.div<DatePickerWrapperProps>(
  ({ palette }) => `
    .ant-picker{
      display: flex;
      height: 38px;
      border-radius: 6px;
      border-color: ${
        palette === 'primary' ? getColor('border') : getColor(palette)
      };
      background: ${getColor('bg.section')} !important;
      color: ${getColor('text.primary')};
      &:hover, &:focus, &.ant-picker-focused{
        box-shadow: 0 0 6px 0 ${getColor(palette)};
        border: 1px solid ${getColor(palette)};
      }
    }
  `
);
