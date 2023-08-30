import { ErrorMessage } from './styles';

type InputErrorPropsType = {
  hasError?: boolean;
  metaError?: any;
  hasApiError?: boolean;
  errorsApi?: any;
};

const InputError = ({
  hasError,
  metaError,
  hasApiError,
  errorsApi,
}: InputErrorPropsType) => {
  return (
    <>
      {hasError && <ErrorMessage>{metaError}</ErrorMessage>}
      {hasApiError && <ErrorMessage>{errorsApi}</ErrorMessage>}
    </>
  );
};

export default InputError;
