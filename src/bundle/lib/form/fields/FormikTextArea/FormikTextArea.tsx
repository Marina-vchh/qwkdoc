import {
  FormikCustomTextArea,
  FormikTextAreaWrapper,
  TextAreaErrorWr,
} from './styles';
import InputError from '../FormikInput/InputError';
import { useField } from 'formik';

type FormikTextAreaType = {
  name: string;
  label: string;
  errorsApi?: any;
  placeholder: string;
};

const FormikTextArea = ({
  name,
  label,
  errorsApi,
  placeholder,
}: FormikTextAreaType) => {
  const [field, meta] = useField(name);

  const hasError = !!(meta.touched && meta.error);
  const hasApiError = !!(errorsApi && errorsApi?.error_content[name]);

  return (
    <FormikTextAreaWrapper>
      <FormikCustomTextArea
        {...field}
        rows={10}
        hasError={hasError}
        placeholder={placeholder}
      />
      <TextAreaErrorWr>
        <InputError
          hasError={hasError}
          metaError={meta.error}
          hasApiError={hasApiError}
          errorsApi={errorsApi?.error_content[name]}
        />
      </TextAreaErrorWr>
    </FormikTextAreaWrapper>
  );
};

export default FormikTextArea;
