import FormikInput from '../fields/FormikInput/FormikInput';
import React from 'react';
import FormikTextArea from '../fields/FormikTextArea/FormikTextArea';
import { BlockWrapper, Wrapper } from './styles';

type FormFabricType = {
  formik: any;
  configuration: any;
  disableForm?: boolean;
  errorsApi?: any;
};

const FormBlockGenerator: React.FC<FormFabricType> = ({
  formik,
  configuration,
  disableForm,
  errorsApi,
}) => {
  return (
    <BlockWrapper>
      {Object.keys(configuration).map((key) => {
        const config = configuration[key];

        const customKey = `${key}_${config.placeholder}`;

        switch (config.type) {
          case 'text_area':
            return (
              <Wrapper key={customKey}>
                <FormikTextArea
                  name={key}
                  label={config.title}
                  placeholder={config.placeholder}
                  errorsApi={errorsApi}
                />
              </Wrapper>
            );
          default:
            return (
              <Wrapper key={customKey}>
                <FormikInput
                  name={key}
                  label={config.title}
                  placeholder={config.placeholder}
                  errors={formik.errors}
                  disabled={disableForm || config.disabled}
                  errorsApi={errorsApi}
                />
              </Wrapper>
            );
        }
      })}
    </BlockWrapper>
  );
};

export default FormBlockGenerator;
