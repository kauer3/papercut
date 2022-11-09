import styled, { css } from 'styled-components'

interface MountainProps {
  order: number;
}

interface SnowProps {
  height: number;
  width: number;
  altSnow?: boolean;
};

interface MountainStyleProps {
  height: number;
  width: number;
};

interface MountainShadowProps {
  position: number;
  index: number;
};

const MountainStyle = styled.div<MountainStyleProps>`
  background: #69551e;
  height: ${props => props.height}em;
  width: ${props => props.width}em;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background-color: #2d1d03;
  /* box-shadow: 20px 20px black; */
  opacity: 1;
  background-image:  linear-gradient(30deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000),
  linear-gradient(150deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000),
  linear-gradient(30deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000),
  linear-gradient(150deg, #000000 12%, transparent 12.5%, transparent 87%, #000000 87.5%, #000000),
  linear-gradient(60deg, #00000077 25%, transparent 25.5%, transparent 75%, #00000077 75%, #00000077),
  linear-gradient(60deg, #00000077 25%, transparent 25.5%, transparent 75%, #00000077 75%, #00000077);
  background-size: 20px 35px;
  background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;
`

const MountainShadow = styled.div<MountainShadowProps>`
  position: absolute;
  align-self: center;
  bottom: 0;
  filter: drop-shadow(15px ${props => props.position !== 2 ? "-25px 10px #000000" : "-10px 8px #000000CC"});
  z-index: ${props => props.index};

  .shadow {
    display: flex;
    justify-content: center;
    transform: ${props => `translate(${props.position}em, 0) scaleX(${props.position % 2 === 0 ? "-1" : "1"})`};
  }
`

const SnowStyle = styled.div<SnowProps>`
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;

  .snowsquare {
    background: #e9e9e9;
    height: ${props => props.height}em;
    width: 100%;
  }

  svg {
    width: ${props => props.width}em;
  }
`

const Snow: React.FC<SnowProps> = ({ height, width, altSnow }) => (
  <SnowStyle height={height} width={width}>
    <div className="snowsquare" />
    {altSnow ?
      <svg viewBox="0 0 1440 320">
        <path fill="#e9e9e9" fill-opacity="1" d="M0,32L15,48C30,64,60,96,90,90.7C120,85,150,43,180,37.3C210,32,240,64,270,85.3C300,107,330,117,360,122.7C390,128,420,128,450,144C480,160,510,192,540,176C570,160,600,96,630,64C660,32,690,32,720,69.3C750,107,780,181,810,208C840,235,870,213,900,176C930,139,960,85,990,53.3C1020,21,1050,11,1080,32C1110,53,1140,107,1170,154.7C1200,203,1230,245,1260,234.7C1290,224,1320,160,1350,122.7C1380,85,1410,75,1425,69.3L1440,64L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"></path>
      </svg> :
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#e9e9e9" fill-opacity="1" d="M0,192L8.9,160C17.8,128,36,64,53,53.3C71.1,43,89,85,107,112C124.4,139,142,149,160,133.3C177.8,117,196,75,213,58.7C231.1,43,249,53,267,74.7C284.4,96,302,128,320,122.7C337.8,117,356,75,373,64C391.1,53,409,75,427,117.3C444.4,160,462,224,480,261.3C497.8,299,516,309,533,309.3C551.1,309,569,299,587,261.3C604.4,224,622,160,640,128C657.8,96,676,96,693,117.3C711.1,139,729,181,747,186.7C764.4,192,782,160,800,128C817.8,96,836,64,853,58.7C871.1,53,889,75,907,106.7C924.4,139,942,181,960,192C977.8,203,996,181,1013,176C1031.1,171,1049,181,1067,192C1084.4,203,1102,213,1120,208C1137.8,203,1156,181,1173,154.7C1191.1,128,1209,96,1227,112C1244.4,128,1262,192,1280,192C1297.8,192,1316,128,1333,117.3C1351.1,107,1369,149,1387,154.7C1404.4,160,1422,128,1431,112L1440,96L1440,0L1431.1,0C1422.2,0,1404,0,1387,0C1368.9,0,1351,0,1333,0C1315.6,0,1298,0,1280,0C1262.2,0,1244,0,1227,0C1208.9,0,1191,0,1173,0C1155.6,0,1138,0,1120,0C1102.2,0,1084,0,1067,0C1048.9,0,1031,0,1013,0C995.6,0,978,0,960,0C942.2,0,924,0,907,0C888.9,0,871,0,853,0C835.6,0,818,0,800,0C782.2,0,764,0,747,0C728.9,0,711,0,693,0C675.6,0,658,0,640,0C622.2,0,604,0,587,0C568.9,0,551,0,533,0C515.6,0,498,0,480,0C462.2,0,444,0,427,0C408.9,0,391,0,373,0C355.6,0,338,0,320,0C302.2,0,284,0,267,0C248.9,0,231,0,213,0C195.6,0,178,0,160,0C142.2,0,124,0,107,0C88.9,0,71,0,53,0C35.6,0,18,0,9,0L0,0Z"></path>
      </svg>
    }
  </SnowStyle >
);

const Mountain: React.FC<MountainProps> = ({ order }) => {

  let mountainProps: MountainStyleProps;
  let shadowProps: MountainShadowProps;
  let snowProps: SnowProps;

  if (order === 1) {
    mountainProps = {
      height: 32,
      width: 50
    };
    shadowProps = {
      position: -15,
      index: 2
    };
    snowProps = {
      height: 10,
      width: 17,
      altSnow: true
    };
  } else if (order === 2) {
    mountainProps = {
      height: 25,
      width: 30
    };
    shadowProps = {
      position: -8,
      index: 3
    };
    snowProps = {
      height: 5,
      width: 13,
      altSnow: true
    };
  } else if (order === 3) {
    mountainProps = {
      height: 37,
      width: 40
    };
    shadowProps = {
      position: 0,
      index: 1
    };
    snowProps = {
      height: 13,
      width: 19,
    };
  } else {
    mountainProps = {
      height: 29,
      width: 42
    };
    shadowProps = {
      position: 15,
      index: 2
    };
    snowProps = {
      height: 10,
      width: 20,
    };
  };

  return (
    <MountainShadow {...shadowProps}>
      <span className="shadow">
        <MountainStyle {...mountainProps} >
          <Snow {...snowProps} />
        </MountainStyle>
      </span>
    </MountainShadow>
  );
};

export default Mountain;
