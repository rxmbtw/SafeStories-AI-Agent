import React from 'react';
import styled from 'styled-components';

const MobileLoaderFixed = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <svg width={100} height={100} viewBox="0 0 100 100">
          <defs>
            <clipPath id="clipping-ios">
              <polygon points="0,0 100,0 100,100 0,100" />
              <polygon points="25,25 75,25 50,75" />
              <polygon points="50,25 75,75 25,75" />
              <polygon points="35,35 65,35 50,65" />
              <polygon points="35,35 65,35 50,65" />
              <polygon points="35,35 65,35 50,65" />
              <polygon points="35,35 65,35 50,65" />
            </clipPath>
          </defs>
        </svg>
        <div className="box" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    --color-one: #2D7579;
    --color-two: #1a4447;
    --color-three: #2D757980;
    --color-four: #1a444780;
    --color-five: #2D757940;
    --time-animation: 3s;
    --size: 0.8;
    position: relative;
    border-radius: 50%;
    transform: scale(var(--size));
    box-shadow:
      0 0 25px 0 var(--color-three),
      0 20px 50px 0 var(--color-four);
    animation: colorize calc(var(--time-animation) * 3) ease-in-out infinite;
  }

  .loader::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-top: solid 1px var(--color-one);
    border-bottom: solid 1px var(--color-two);
    background: linear-gradient(180deg, var(--color-five), var(--color-four));
    box-shadow:
      inset 0 10px 10px 0 var(--color-three),
      inset 0 -10px 10px 0 var(--color-four);
  }

  .loader .box {
    width: 100px;
    height: 100px;
    background: linear-gradient(
      180deg,
      var(--color-one) 30%,
      var(--color-two) 70%
    );
    /* Use clipPath instead of mask for iOS compatibility */
    clip-path: url(#clipping-ios);
    -webkit-clip-path: url(#clipping-ios);
  }

  .loader svg {
    position: absolute;
  }

  .loader svg #clipping-ios {
    animation: roundness calc(var(--time-animation) / 2) linear infinite;
  }

  .loader svg #clipping-ios polygon {
    /* Reduce filter intensity for iOS */
    filter: blur(3px);
  }

  .loader svg #clipping-ios polygon:nth-child(1) {
    transform-origin: 75% 25%;
    transform: rotate(90deg);
  }

  .loader svg #clipping-ios polygon:nth-child(2) {
    transform-origin: 50% 50%;
    animation: rotation var(--time-animation) linear infinite reverse;
  }

  .loader svg #clipping-ios polygon:nth-child(3) {
    transform-origin: 50% 60%;
    animation: rotation var(--time-animation) linear infinite;
    animation-delay: calc(var(--time-animation) / -3);
  }

  .loader svg #clipping-ios polygon:nth-child(4) {
    transform-origin: 40% 40%;
    animation: rotation var(--time-animation) linear infinite reverse;
  }

  .loader svg #clipping-ios polygon:nth-child(5) {
    transform-origin: 40% 40%;
    animation: rotation var(--time-animation) linear infinite reverse;
    animation-delay: calc(var(--time-animation) / -2);
  }

  .loader svg #clipping-ios polygon:nth-child(6) {
    transform-origin: 60% 40%;
    animation: rotation var(--time-animation) linear infinite;
  }

  .loader svg #clipping-ios polygon:nth-child(7) {
    transform-origin: 60% 40%;
    animation: rotation var(--time-animation) linear infinite;
    animation-delay: calc(var(--time-animation) / -1.5);
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes roundness {
    0% {
      filter: contrast(8);
    }
    20% {
      filter: contrast(2);
    }
    40% {
      filter: contrast(2);
    }
    60% {
      filter: contrast(8);
    }
    100% {
      filter: contrast(8);
    }
  }

  @keyframes colorize {
    0% {
      filter: hue-rotate(0deg);
    }
    20% {
      filter: hue-rotate(-30deg);
    }
    40% {
      filter: hue-rotate(-60deg);
    }
    60% {
      filter: hue-rotate(-90deg);
    }
    80% {
      filter: hue-rotate(-45deg);
    }
    100% {
      filter: hue-rotate(0deg);
    }
  }
`;

export default MobileLoaderFixed;