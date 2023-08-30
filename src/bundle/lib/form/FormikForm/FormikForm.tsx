import { Form, FormikProvider } from 'formik';
import FormErrorWidget from '../FormErrorWidget/FormErrorWidget';

type FormikFormPropsType = {
  value: any;
  children?: any;
  errorsApi?: any;
  errorForm?: string | null;
};

const FormikForm = ({
  value,
  children,
  errorsApi,
  errorForm,
}: FormikFormPropsType) => {
  return (
    <FormikProvider value={value}>
      {(errorsApi?.formError || errorForm) && (
        <FormErrorWidget message={errorsApi?.formError || errorForm} />
      )}
      <Form>{children}</Form>
    </FormikProvider>
  );
};
export default FormikForm;
