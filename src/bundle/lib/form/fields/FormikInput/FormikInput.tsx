import { FC } from 'react';
import { useField } from 'formik';
import {
  FormikInputWrapper,
  InputErrorWr,
  CustomInput,
} from './styles';
import InputError from './InputError';

type FormikInputType = {
  name?: string;
  label?: string;
  type?: string;
  errors?: any;
  errorsApi?: any;
  disabled?: boolean;
  placeholder?: string;
};

const FormikInput: FC<FormikInputType> = ({
  name = '',
  label,
  type = 'text',
  disabled,
  errorsApi,
  placeholder,
}) => {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  // const hasError = name && !!(meta.touched && meta.error);
  // const hasApiError = name && !!(errorsApi && errorsApi?.error_content[name]);

  const onChangeHandler = (event: any) => {
    const value = event.target.value;

    setValue(value);
  };

  return (
    <FormikInputWrapper>
      <CustomInput
        {...field}
        onChange={onChangeHandler}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
      <InputErrorWr>
        <InputError
          metaError={meta.error}
          errorsApi={errorsApi?.error_content[name]}
        />
      </InputErrorWr>
    </FormikInputWrapper>
  );
};

export default FormikInput;
