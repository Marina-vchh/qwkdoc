import { useCallback } from 'react';
import useContactUsState from '../stores/useContactUsState';
import useAppErrorState from '../../Error/stores/useAppErrorState';
import postContactUsApi from '../../../api/contact_us/postContactUsApi';

const useSendContactUs = () => {
  const { setUpdateItemRes, setIsUpdating } = useContactUsState();
  const { setAppErrorRes } = useAppErrorState(setIsUpdating);

  const sendContactUs = useCallback(
    async (values: any) => {
      const payload: any = {
        name: values.name,
        sender_email: values.sender_email,
        mobile_phone: values.mobile_phone,
        city: values.subject,
        company: values.subject,
        message: values.message,
      };

      setIsUpdating(true);

      try {
        const res = await postContactUsApi(payload);

        setUpdateItemRes(res, values);
      } catch (e) {
        setAppErrorRes(e);
      }
    },
    [setIsUpdating, setUpdateItemRes, setAppErrorRes]
  );

  return {
    sendContactUs,
  };
};

export default useSendContactUs;
