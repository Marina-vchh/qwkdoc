import styled from 'styled-components';

export const FormikTextAreaWrapper = styled.div`
  width: 100%;
`;

export const FormikCustomTextArea = styled.textarea<{ hasError: boolean }>`
  box-sizing: border-box;
  width: 100%;
  border: ${({ hasError }) =>
    hasError ? '1px solid #D30101' : '0.5px solid #40424F'};
  border-radius: 5px;
  max-height: 98px;
  resize: none;
  font-size: 18px;
  line-height: 24px;
  color: #40424F;
  background: #FFFFFF;
  padding: 11px 25px;
  font-size: Manrope-SemiBold, sans-serif;
`;

export const TextAreaErrorWr = styled.div`
  height: 24px;
`;
