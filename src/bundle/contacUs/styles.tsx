import styled from 'styled-components';

export const ContactUsFormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 0.7px solid #40424F;
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  padding: 28px 36px 28px 28px;
  margin-top: 12px;
  overflow: hidden;
  margin-left: auto;
  background-color: #FFFFFF;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
  }
`;

export const ContactUsHeader = styled.div`
  width: 100%;
  margin-bottom: 24px;
  text-align: start;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`;

export const ContactUsButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin: 12px 0 86px 0;
`;

export const SendBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
`;
