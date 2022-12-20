import styled, { keyframes } from 'styled-components'

const HouseContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  margin-top: auto;
  bottom: 0;
  translate: 20em;
`

const Roof = styled.div`
  height: 110px;
  width: 220px;
  background: blue;
  display: flex;
  flex-direction: row;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

  div.roof-square {
    height: 110px;
    width: 110px;
  }

  .left-roof {
    background-color: #833c16;
    opacity: 1;
    background: repeating-linear-gradient( -45deg, #4e1e00, #4e1e00 2px, #833c16 2px, #833c16 10px );
  }

  .right-roof {
    background-color: #833c16;
    opacity: 1;
    background: repeating-linear-gradient( 45deg, #4e1e00, #4e1e00 2px, #833c16 2px, #833c16 10px );
  }
`

const Wall = styled.div`
  width: 180px;
  height: 150px;
  background-color: #B9421A;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23' height='23' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23a43008' %3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='1'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
`

const Window = styled.div`
`

const Door = styled.div`
`

const House: React.FC = () => {

  return (
    <HouseContainer>
      <Roof>
        <div className="left-roof roof-square">
        </div>
        <div className="right-roof roof-square">
        </div>
      </Roof>
      <Wall />
    </HouseContainer>
  );
};

export default House;
