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
      </FireAndSmokeContainer>
    </FireWrapper>
  );
};

export default Fire;
