import styled, { keyframes } from 'styled-components'
import { Wood } from './sharedstyles';

const flick = keyframes`
  0% {
    transform: rotate(-1deg);
  }
  20% {
    transform: rotate(2deg) scaleY(1.05);
  }
  40% {
    transform: rotate(-1deg);
  }
  60% {
    transform: rotate(1deg);
  }
  80% {
    transform: rotate(-1deg) scaleY(0.90);
  }
  100% {
    transform: rotate(1deg);
  }
`;

const smoke = keyframes`
  0% {
    opacity: 0;
    translate: 0 0;
    filter: drop-shadow(0 20px 5px black) blur(30px);
  }
  5% {
    opacity: 1;
  }
  30% {
    filter: drop-shadow(0 20px 5px black) blur(15px);
  }
  // 60% {
  //   transform: rotate(1deg);
  // }
  65% {
    opacity: .8;
    scale: 2.5 1.5;
    filter: drop-shadow(0 0 0 black) blur(15px);
  }
  100% {
    opacity: 0;
    translate: 0 -250px;
    scale: 2.5 1;
    filter: drop-shadow(0 0 5px black) blur(30px);
  }
`;

const FireWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 20;
  margin-top: auto;
  width: fit-content;
  align-self: center;
  /* translate: 15em; */
  filter: drop-shadow(0 -25px 100px orangered);
  transition: .2s ease-out;

  :hover {
    filter: drop-shadow(0 -25px 70px orangered);
  }
`

const FireAndSmokeContainer = styled.div`
  position: relative;
`

const SmokeContainer = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  translate: -50% -350%;

  span {
    position: absolute;
    background: #f5f5f555;
    /* opacity: 0; */
    border-radius: 50%;
    height: 40px;
    width: 40px;
    box-shadow: 0 -20px 5px black;
    filter: drop-shadow(0 20px 5px black) blur(16px);
    animation: ${smoke} 7.8s ease-in infinite;
    animation-fill-mode: both;

    :nth-child(2) {
      animation-delay: 1.3s;
    }
    :nth-child(3) {
      animation-delay: 2.6s;
    }
    :nth-child(4) {
      animation-delay: 3.9s;
    }
    :nth-child(5) {
      animation-delay: 5.2s;
    }
    :nth-child(6) {
      animation-delay: 6.5s;
    }
    /* :nth-child(7) { */
    /*   animation-delay: 6s; */
    /* } */
    /* :nth-child(8) { */
    /*   animation-delay: 7s; */
    /* } */
  }
`

const FireContainer = styled.div`
  /* height: 800px; */
  /* width: 800px; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  translate: 0 -20px;
  z-index: 20;
  filter: drop-shadow(0 -25px 50px orangered);
  transition: .2s ease-out;

  :hover {
    scale: 1.3 1.4;
    filter: drop-shadow(0 -10px 20px purple);
  }

  .fire-wrapper {
    position: relative;
    animation: ${flick} 3ms ease-in infinite;

    span {
      position: absolute;
      bottom: 0;
      border-radius: 50% 0% 50% 50%;
      rotate: -45deg;
      translate: -50%;
      opacity: .70;
      /* filter: blur(0px); */

      :nth-child(5), :nth-child(6) {
        border-radius: 50%;
      }
    }

    span:first-child {
      width: 4em;
      height: 4em;
      background: orangered;
      box-shadow: 0 0 10px 5px orangered;
    }

    span:nth-child(2) {
      width: 3em;
      height: 3em;
      background: orange;
      box-shadow: 0 0 12px 6px orange;
    }

    span:nth-child(3) {
      width: 2.2em;
      height: 2.2em;
      background: gold;
      box-shadow: 0 0 9px 4px gold;
    }

    span:nth-child(4) {
      width: 1.66em;
      height: 1.66em;
      background: lightyellow;
      box-shadow: 0 0 9px 4px lightyellow;
    }

    /* span:nth-child(5) { */
    /*   width: .768em; */
    /*   height: .768em; */
    /*   background: #5a32a866; */
    /*   box-shadow: 0 0 15px 10px #5a32a866; */
    /*   bottom: -5px; */
    /* } */

    /* span:nth-child(6) { */
    /*   width: 2em; */
    /*   height: 2em; */
    /*   background: #00000033; */
    /*   box-shadow: 0 0 15px 10px #00000033; */
    /*   bottom: -20px; */
    /*   filter: blur(150%); */
    /* } */
  }
`

const Woods = styled.div`
filter: saturate(10%) brightness(160%);

  div {
    width: 19px;
    position: absolute;
    bottom: 0;
  }

  div:nth-child(3) {
    transform: rotate(70deg) translate(110%, -10%);
  }

  div:nth-child(4) {
      transform: rotate(-70deg) translate(-130%, -30%);
    }

    div:nth-child(1) {
      transform: rotate(88deg) translate(140%, 40%);
    }

    div:nth-child(2) {
      transform: rotate(-88deg) translate(-140%, 20%);
    }
`

const Fire: React.FC = () => {

  return (
    <FireWrapper>
      <Woods>
        <Wood />
        <Wood />
        <Wood />
        <Wood />
      </Woods>
      <FireAndSmokeContainer>
        <FireContainer>
          <div className="fire-wrapper">
            {Array(6).fill(<span />)}
          </div>
        </FireContainer >
        <SmokeContainer>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </SmokeContainer >
      </FireAndSmokeContainer>
    </FireWrapper>
  );
};

export default Fire;
