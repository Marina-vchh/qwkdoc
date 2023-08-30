import * as Yup from 'yup';
import { PHONE_NUMBER } from '../../lib/helpers/RegExpPatterns';

const useValidation = () => {
  const contactUsValidation: any =
    Yup.object().shape({
      name: Yup.string()
        .trim()
        .max(254, 'Value should be no more than 254 characters.'),
        // .required('Required field.'),
      sender_email: Yup.string()
        .trim()
        .email('Email Address is invalid.')
        .max(254, 'Value should be no more than 254 characters.'),
        // .required('Required field.'),
      mobile_phone: Yup.string().matches(
        PHONE_NUMBER,
        'Mobile phone number is invalid.'
      ),
      city: Yup.string()
        .trim()
        .max(255, 'Value should be no more than 255 characters.'),
      company: Yup.string()
        .trim()
        .max(255, 'Value should be no more than 255 characters.'),
      message: Yup.string()
        .trim()
        .min(10, 'Value should be less than 10 characters.')
        .max(10000, 'Value should be no more than 10 000 characters.')
        // .required('Required field.'),
    });

  return {
    contactUsValidation,
  };
};

export default useValidation;
