import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import useContactUsFormConfig from './hooks/useContactUsFormConfig';
import {
  ContactUsFormWrapper,
  SendBlock,
} from './styles';
import useContactUsState from './stores/useContactUsState';
import useValidation from './hooks/useValidation';
import useSendContactUs from './hooks/useSendContactUs';
import SuccessComponent from './ui/SuccessComponent/SuccessComponent';
import FormLoader from './ui/FormLoader/FormLoader';
import useFormikForm from '../lib/form/useFormikForm/useFormikForm';
import FormikForm from '../lib/form/FormikForm/FormikForm';
import FormBlockGenerator from '../lib/form/FormBlockGenerator/FormBlockGenerator';
import Button from '../lib/Button/Button';

const ContactUsForm = () => {
  const { contactUs, clearState: clearContactUsState } = useContactUsState();

  const { getInitialsValues } = useFormikForm();
  const { sendContactUs } = useSendContactUs();
  const { contactUsValidation } = useValidation();
  const { contactUsFormConfig, initialFormConfig } = useContactUsFormConfig();

  const [isSuccessSubmit, setIsSuccessSubmit] = useState(false);

  const formik = useFormik({
    initialValues: getInitialsValues({}, initialFormConfig),
    enableReinitialize: true,
    validationSchema: contactUsValidation,
    onSubmit: (values: any) => {
      sendContactUs(values);
    },
  });

  useEffect(() => {
    if (contactUs?.ok) {
      clearContactUsState();
      formik.resetForm();
      setIsSuccessSubmit(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactUs]);

  return (
    <ContactUsFormWrapper>
      <FormikForm value={formik}>
        <FormBlockGenerator
          formik={formik}
          configuration={contactUsFormConfig}
          errorsApi={contactUs?.error}
        />
        {!contactUs.isUpdating && !isSuccessSubmit && (
          <SendBlock>     
            <Button
              onClick={formik.handleSubmit}
              type={'submit'}
            >
              Submit
            </Button>
          </SendBlock>
        )}
        {contactUs.isUpdating && <FormLoader />}
        {isSuccessSubmit && <SuccessComponent />}
      </FormikForm>
    </ContactUsFormWrapper>
  );
};

export default ContactUsForm;
