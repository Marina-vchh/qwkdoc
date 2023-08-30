import { useCallback } from 'react';

const useFormikForm = () => {
  const getInitialsValues = useCallback((item: any, fullConfig: any) => {
    const result: any = {};

    const fieldNames = Object.keys(fullConfig);

    fieldNames.forEach((fieldName) => {
      const config = fullConfig[fieldName];
      const defaultValue = config?.defaultValue || '';
      result[fieldName] =
        item && item[fieldName] ? item[fieldName] : defaultValue;
    });

    return result;
  }, []);

  return {
    getInitialsValues,
  };
};

export default useFormikForm;
