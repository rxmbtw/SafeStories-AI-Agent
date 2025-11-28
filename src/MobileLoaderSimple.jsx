import React from 'react';
import styled from 'styled-components';

const MobileLoaderSimple = () => {
  return (
    <StyledWrapper>
      <div className="simple-loader">
        <div className="spinner"></div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .simple-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
  }

  .spinner {
    width: 60px;
    height: 60px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #2D7579;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default MobileLoaderSimple;