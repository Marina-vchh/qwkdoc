import { CustomButton } from './styles';

type ButtonType = {
  type: any;
  onClick: any;
  disabled?: any;
  children: any;
};

const Button = ({ type, onClick, disabled, children }: ButtonType) => {
  return (
    <CustomButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </CustomButton>
  );
};

export default Button;
