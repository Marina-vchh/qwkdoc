import {
  ErrorWidgetBlock,
  ErrorWidgetBlockIcon,
  ErrorWidgetBlockMessage,
  ErrorWidgetWrapper,
} from './styles';

type FormErrorWidgetPropsType = {
  message: string;
};

const FormErrorWidget = ({ message }: FormErrorWidgetPropsType) => {
  return (
    <ErrorWidgetWrapper>
      <ErrorWidgetBlock>
        <ErrorWidgetBlockIcon></ErrorWidgetBlockIcon>
        <ErrorWidgetBlockMessage>{message}</ErrorWidgetBlockMessage>
      </ErrorWidgetBlock>
    </ErrorWidgetWrapper>
  );
};

export default FormErrorWidget;
