import styled from 'styled-components';

export const ErrorWidgetWrapper = styled.div`
  width: 100%;
`;

export const ErrorWidgetBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 15px 16px 15px 19px;
  border: 1px solid #d30101;
  border-radius: 8px;
  background-color: #ffe1e1;
`;

export const ErrorWidgetBlockIcon = styled.div``;

export const ErrorWidgetBlockMessage = styled.div`
  margin-left: 15px;
  font-family: 'Mulish-Regular', sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 130%;
  font-feature-settings: 'liga' off;
  color: #d30101;
`;
