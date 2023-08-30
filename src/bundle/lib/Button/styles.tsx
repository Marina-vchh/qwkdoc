import styled from 'styled-components';

export const CustomButton = styled.button<{
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 28px;
  font-size: 21px;
  font-size: Manrope-SemiBold, sans-serif;
  text-align: center;
  border-radius: 5px;
  background: #8258DB;
  color: #ffffff;
  width: 100%;
  padding: 13px 16px;
  height: 48px;
  border: 1px solid #000000;

  /* &:hover {
    background: #1f2023;
  } */

  &:disabled {
    background-color: #e9e9e9;
    color: rgba(34, 37, 40, 0.6);
    cursor: not-allowed !important;
  }
`;
