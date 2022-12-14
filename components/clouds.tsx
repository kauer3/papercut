import styled, { keyframes } from 'styled-components'

const float = keyframes`
  from {
    translate: calc(-50vw - 100%);
  }

  to {
    translate: calc(50vw + 100%);
  }
`;

const CloudsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Cloud = styled.div`
  position: absolute;
  align-self: center;
  background: #fff;
  width: 9em;
  height: 3.2em;
  border-radius: 120px 120px 100px 110px;
  filter: drop-shadow(10px 5px 10px #000);
  animation-name: ${float};
  animation-timing-function: cubic-bezier(0, .15, .1, 0);
  animation-iteration-count: infinite;
  animation-fill-mode: both;

  ::after {
    position: absolute;
    content: "";
    background: #fff;
    width: 50%;
    height: 115%;
    bottom: 0;
    left: 0;
    border-radius: 100px 70px 30px 70px;
    right: 100px;
  }

  ::before {
    position: absolute;
    content: "";
    background: #fff;
    width: 60%;
    height: 150%;
    bottom: .5em;
    left: 2em;
    border-radius: 100px 100px 30px 70px;
    right: 100px;
  }

  :nth-of-type(2), :nth-of-type(4), :nth-of-type(7) {
    animation-direction: alternate;
    scale: -1 1;
    filter: drop-shadow(-10px 5px 10px #000);
    z-index: 2
  }

  :nth-of-type(3), :nth-of-type(5), :nth-of-type(6), :nth-of-type(9), :nth-of-type(10) {
    animation-direction: alternate-reverse;
    z-index: 11
  }

  :nth-of-type(1), :nth-of-type(5), :nth-of-type(8) {
    scale: -.9 .9;
    filter: drop-shadow(-10px 5px 10px #000);
  }

  :nth-of-type(4), :nth-of-type(7) {
    animation-delay: 4s;
  }

  :nth-of-type(2), :nth-of-type(5), :nth-of-type(10) {
    animation-delay: 8s;
  }

  :nth-of-type(1) {
    scale: -.80 .80;
    top: 10px;
    animation-duration: 45s;
  }

  :nth-of-type(2) {
    top: 25px;
    animation-duration: 35s;
    animation-delay: 4s;
  }

  :nth-of-type(3) {
    top: 40px;
    animation-duration: 40s;
  }

  :nth-of-type(4) {
    top: 54px;
    animation-duration: 28s;
    animation-delay: 6s;
  }

  :nth-of-type(5) {
    top: 67px;
    animation-duration: 32s;
    animation-delay: 8s;
  }

  :nth-of-type(6) {
    top: 80px;
    z-index: 12;
    animation-duration: 26s;
  }

  :nth-of-type(7) {
    top: 92px;
    animation-duration: 22s;
    animation-delay: 10s;
    z-index: 12;
  }

  :nth-of-type(8) {
    top: 105px;
    animation-duration: 30s;
  }

  :nth-of-type(9) {
    top: 120px;
    animation-duration: 24s;
    z-index: 2;
  }

  :nth-of-type(10) {
    top: 135px;
    scale: -1.1 1.1;
    animation-duration: 20s;
    animation-delay: 12s;
    z-index: 2;
  }
`

const Clouds: React.FC = () => {

  return (
    <CloudsContainer>
      {Array(10).fill(<Cloud />)}
    </CloudsContainer >
  );
};

export default Clouds;
