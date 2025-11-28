import React from 'react';
import styled from 'styled-components';

const MobileLoaderIOS = () => {
  return (
    <StyledWrapper>
      <div className="ios-loader">
        <div className="circle-outer">
          <div className="circle-inner"></div>
        </div>
        <div className="rotating-ring"></div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .ios-loader {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle-outer {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(180deg, #2D757940, #1a444780);
    border: 1px solid #2D7579;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    animation: pulse 3s ease-in-out infinite;
  }

  .circle-inner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(180deg, #2D7579, #1a4447);
    animation: innerRotate 2s linear infinite;
  }

  .rotating-ring {
    position: absolute;
    width: 75px;
    height: 75px;
    border: 2px solid transparent;
    border-top: 2px solid #2D7579;
    border-right: 2px solid #2D757980;
    border-radius: 50%;
    animation: rotate 1.5s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes innerRotate {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(0.8); }
    100% { transform: rotate(360deg) scale(1); }
  }

  @keyframes pulse {
    0%, 100% { 
      box-shadow: 0 0 15px rgba(45, 117, 121, 0.3);
      filter: hue-rotate(0deg);
    }
    25% { 
      box-shadow: 0 0 25px rgba(45, 117, 121, 0.5);
      filter: hue-rotate(-30deg);
    }
    50% { 
      box-shadow: 0 0 20px rgba(45, 117, 121, 0.4);
      filter: hue-rotate(-60deg);
    }
    75% { 
      box-shadow: 0 0 30px rgba(45, 117, 121, 0.6);
      filter: hue-rotate(-45deg);
    }
  }
`;

export default MobileLoaderIOS;