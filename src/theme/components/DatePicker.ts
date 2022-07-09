import { getColor } from '../base';

export const DatePickerStyled = () => `
  .primary, .danger, .warning {
    .ant-picker-header-view button:hover{
      color: ${getColor('primary')} !important;
    }
    .ant-picker-cell-selected .ant-picker-cell-inner{
      background-color: ${getColor('primary')} !important;
    }
    .ant-picker-cell-today .ant-picker-cell-inner::before{
      border-color: ${getColor('primary')} !important;
    }
    .ant-picker-today-btn{
      color: ${getColor('primary')} !important;
    }
  }
`;
