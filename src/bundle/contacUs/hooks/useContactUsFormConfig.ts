import { useMemo } from 'react';

const useContactUsFormConfig = () => {
  const contactUsFormConfig = useMemo(() => {
    const config: any = {
      name: {
        placeholder: 'Name',
        type: 'default',
      },
      sender_email: {
        placeholder: 'Email',
        type: 'default',
      },
      mobile_phone: {
        placeholder: 'Phone Number',
        type: 'default',
      },
      city: {
        placeholder: 'City',
        type: 'default',
      },
      company: {
        placeholder: 'Company',
        type: 'default',
      },
      message: {
        placeholder: 'Task',
        type: 'text_area',
      },
    };

    return config;
  }, []);

  const initialFormConfig = useMemo(() => {
    return { ...contactUsFormConfig };
  }, [contactUsFormConfig]);

  return {
    contactUsFormConfig,
    initialFormConfig,
  };
};

export default useContactUsFormConfig;
