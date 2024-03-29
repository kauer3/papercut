import Head from "next/head";
import styled from "styled-components";
import { Container } from "../components/sharedstyles";
import Mountain from "../components/mountain";
import Tree from "../components/tree";
import Clouds from "../components/clouds";
import Fire from "../components/fire";
import House from "../components/house";

const ArtContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 900px;
  min-height: 600px;
  height: 70%;

  div.groud-elements-container {
    position: absolute;
    border: 2px solid yellow;
    bottom: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 50%;
  }
`;

const Moon = styled.div`
  position: absolute;
  align-self: center;
  transform: translate(-100%);
  background: #d0d0d0;
  width: 8em;
  height: 8em;
  border-radius: 50%;
  background-color: #ffffff;
  opacity: 1;
  background-image: radial-gradient(circle at center center, #fafafa, #ffffff),
    repeating-radial-gradient(
      circle at center center,
      #fafafa,
      #fafafa,
      4px,
      transparent 8px,
      transparent 4px
    );
  background-blend-mode: multiply;
  box-shadow: 0 0 140px #ffffff;
  filter: drop-shadow(0 0 30px #ffe695);
`;

const Ground = styled.div`
  position: relative;
  align-self: center;
  background-color: #c2b280;
  width: 120vw;
  min-width: 2100px;
  height: 15vh;
  bottom: 0;
  z-index: 10;
  border-radius: 25% 30% 0% 0%;
  background-image: radial-gradient(#69551e88 1px, transparent 1px),
    radial-gradient(#69551e88 1px, #c2b280 1px);
  background-size: 40px 40px;
  background-position:
    0 0,
    20px 20px;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Papercut - CSS Paper Art</title>
        <meta name="description" content="Paper Art created with css" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <ArtContainer>
        <Moon />
        <Clouds />
        {Array(4)
          .fill(true)
          .map((_, i) => (
            <Mountain order={i} key={i} />
          ))}
        {Array(6)
          .fill(true)
          .map((_, i) => (
            <Tree order={i} key={i} />
          ))}
        <Fire />
        <House />
      </ArtContainer>
      <Ground />
    </Container>
  );
}
