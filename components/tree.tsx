import styled, { css } from 'styled-components'
import { Wood } from './sharedstyles';

interface MountainProps {
  order: number;
}

interface LeafProps {
  height: number;
  width: number;
};

interface MountainShadowProps {
  position: number;
  index: number;
};

// const Wood = styled.div`
//   height: 5em;
//   width: 2em;
//   background-color: #3d2408;
//   opacity: 1;
//   background-image: linear-gradient(to right, #27170c, #27170c 4px, #3d2408 4px, #3d2408 );
//   background-size: 8px 100%;
// `

const TreeContainer = styled.div<MountainShadowProps>`
  position: absolute;
  align-self: center;
  bottom: 0;
  filter: drop-shadow(15px ${props => props.position !== 2 ? "-25px 10px #000000" : "-10px 8px #000000CC"});
  z-index: ${props => props.index};

  .shadow {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: ${props => `translate(${props.position}em, 0) scaleX(${props.position % 2 === 0 ? "-1" : "1"})`};
  }
`

const Leafs = styled.div<LeafProps>`
transform: translate(0, 2em);
height: ${props => props.height}em;
width: ${props => props.width}em;
clip-path: polygon(50% 0, 37% 16%, 43% 15%, 28% 36%, 38% 34%, 16% 66%, 26% 63%, 0 100%, 50% 95%, 100% 100%, 74% 63%, 84% 66%, 62% 34%, 72% 36%, 57% 15%, 63% 16%);
background-color: #17441b;
opacity: 1;
background-image: linear-gradient(45deg, #103200 50%, #17441b 50%);
background-size: 9px 9px;
`

const Tree: React.FC<MountainProps> = ({ order }) => {

  let shadowProps: MountainShadowProps;
  let leafProps: LeafProps;

  if (order === 1) {
    shadowProps = {
      position: -35,
      index: 5
    };
    leafProps = {
      height: 15,
      width: 13,
    };
  } else if (order === 2) {
    shadowProps = {
      position: -30,
      index: 7
    };
    leafProps = {
      height: 18,
      width: 15
    };
  } else if (order === 3) {
    shadowProps = {
      position: -25,
      index: 6
    };
    leafProps = {
      height: 20,
      width: 15,
    };
  } else if (order === 4) {
    shadowProps = {
      position: -22,
      index: 6
    };
    leafProps = {
      height: 15,
      width: 11
    };
  } else if (order === 5) {
    shadowProps = {
      position: -19,
      index: 5
    };
    leafProps = {
      height: 19,
      width: 11
    };
  } else {
    shadowProps = {
      position: -15,
      index: 7
    };
    leafProps = {
      height: 12,
      width: 9
    };
  };

  return (
    <TreeContainer {...shadowProps}>
      <span className="shadow">
        <Leafs {...leafProps} />
        <Wood />
      </span>
    </TreeContainer>
  );
};

export default Tree;
