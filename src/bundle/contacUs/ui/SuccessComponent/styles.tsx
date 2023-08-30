import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {transform: translateY(100%);}
  100% {transform: translateY(0);}
`;

export const SuccessComponentWrapper = styled.div`
  transform: translateY(-100%);
  animation: ${animation} 0.5s forwards;
`;

export const SuccessComponentOkButton = styled.div`
  border-radius: 5px;
  background: #8258DB;
  height: 50px;
  padding: 13px 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 21px;
  line-height: 28.69px;
  cursor: pointer;
`;
