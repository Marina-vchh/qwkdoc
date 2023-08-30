import IApiServiceResponse from '../../../api/types';

const readErrors = (newErrorContent: any, errorContentItem: any) => {
  if (typeof errorContentItem === 'string') {
    return errorContentItem;
  }
  let res = { ...newErrorContent };

  Object.keys(errorContentItem).forEach((fieldName: any) => {
    const item = errorContentItem[fieldName];

    if (Array.isArray(item)) {
      res[fieldName] = item;

      return;
    }

    res = readErrors(res, item);
  });

  return res;
};

const prepareErrorContent = (error_content: any) => {
  if (!error_content) {
    return error_content;
  }

  let newErrorContent: any = {};
  newErrorContent = readErrors(newErrorContent, error_content);

  return newErrorContent;
};

const prepareError = <T>(state: any, res: IApiServiceResponse<T>) => {
  if (res?.response.ok || !res?.json) {
    return state;
  }

  const error = {
    error_content: prepareErrorContent(res.json),
    // error_type: res.error_type,
    status_code: res.response.status,
  };

  return { ...state, error };
};

export default prepareError;
