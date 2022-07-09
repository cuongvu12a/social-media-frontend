import { Dayjs } from 'dayjs';
import {
  FieldError,
  ControllerRenderProps,
  Merge,
  FieldErrorsImpl,
  DeepRequired,
} from 'react-hook-form';
import { Input, InputPassword, DatePicker } from '@src/components/Input';

interface FormItemProps {
  name: string;
  field: ControllerRenderProps<any, any>;
  containerClass?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<DeepRequired<Dayjs>>>;
  label: string;
  placeholder: string;
  type?: 'default' | 'password' | 'datePicker';
}

export const FormItem = ({
  name,
  containerClass,
  error,
  placeholder,
  label,
  type = 'default',
  field: { ref, ...rest },
}: FormItemProps) => {
  return (
    <div className={`${containerClass || ''}`}>
      <label
        htmlFor={name}
        className='block text-text.secondary text-xs mb-1 first-letter:uppercase'
      >
        {label}
      </label>
      {type === 'default' && (
        <Input
          {...rest}
          id={name}
          placeholder={placeholder}
          palette={!error ? 'primary' : 'danger'}
        />
      )}
      {type === 'password' && (
        <InputPassword
          {...rest}
          id={name}
          placeholder={placeholder}
          palette={!error ? 'primary' : 'danger'}
        />
      )}
      {type === 'datePicker' && (
        <DatePicker
          {...rest}
          // id={name}
          // placeholder={placeholder}
          palette={!error ? 'primary' : 'danger'}
        />
      )}
      {!!error && (
        <span className='first-letter:uppercase text-danger text-xs block mt-2'>
          {error.message}
        </span>
      )}
    </div>
  );
};
