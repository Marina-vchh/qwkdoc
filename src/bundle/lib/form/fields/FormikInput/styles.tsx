import styled from 'styled-components';

export const FormikInputWrapper = styled.div<{
  width?: number;
  minWidth?: number;
}>`
  width: 100%;
`;

export const CustomInput = styled.input<{
  hasError?: boolean;
  width?: number;
  hasSmallIcon?: boolean;
  disabled?: boolean;
}>`
  display: block;
  box-sizing: border-box;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  color: #40424F;
  border: ${({ hasError }) =>
    hasError ? '1px solid #D30101' : '0.5px solid #40424F'};
  outline: none;
  font-size: 16px;
  line-height: 24px;
  padding: 11px 25px;
  border-radius: 5px;
  height: 48px;
  background: #FFFFFF;
  font-size: Manrope-Regular, sans-serif;
  &:disabled {
    background-color: #eceef4;
  }
`;

export const ErrorMessage = styled.div`
  font-style: normal;
  font-size: 14px;
  line-height: 14px;
  color: #d30101;
`;

export const InputErrorWr = styled.div`
  height: 24px;
`;
