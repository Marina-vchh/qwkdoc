import React from 'react';
import {
  SuccessComponentOkButton,
  SuccessComponentWrapper,
} from './styles';

const SuccessComponent = () => {
  const homeHandler = () => {
    const homeUrl = window.location.href;
    window.location.href = homeUrl;
  };

  return (
    <SuccessComponentWrapper>
      <SuccessComponentOkButton onClick={homeHandler}>
        Done
      </SuccessComponentOkButton>
    </SuccessComponentWrapper>
  );
};

export default SuccessComponent;
