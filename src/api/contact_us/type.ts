export type ResponseType = {
  id: string;
  date_created: string;
  // sender_email: string;
  mobile_phone: string;
  subject: string;
  message: string;
  // user_id: string;
};

export type PayloadData = {
  sender_email: string;
  mobile_phone: string;
  subject: string;
  message: string;
  recaptcha_response: string;
};
