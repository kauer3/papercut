import Head from 'next/head'
import styled from 'styled-components'
import {
  Container,
} from '../components/sharedstyles'
import Mountain from '../components/mountain'
import Tree from '../components/tree'
import Clouds from '../components/clouds'
import Fire from '../components/fire'
import House from '../components/house'

const ArtContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 70%;
  border: 1px dotted brown;
`

const Moon = styled.div` position: absolute;
  align-self: center;
  transform: translate(-100%);
  background: #d0d0d0;
  width: 8em;
  height: 8em;
  border-radius: 50%;
  background-color: #ffffff;
  opacity: 1;
  background-image: radial-gradient(circle at center center, #fafafa, #ffffff), repeating-radial-gradient(circle at center center, #fafafa, #fafafa, 4px, transparent 8px, transparent 4px);
  background-blend-mode: multiply;
  box-shadow: 0 0 140px #ffffff;
  filter: drop-shadow(0 0 30px #ffe695);
`

const Ground = styled.div`
  position: absolute;
  align-self: center;
  background: #C2B280;
  width: 3000px;
  height: 100vh;
  bottom: -25.1em;
  z-index: 10;
  clip-path: ellipse(49% 9% at 50% 50%);
`

export default function Home() {
  return (
    <Container>
      <Head>
        <title>CSS Paper Art</title>
        <meta name="description" content="Paper Art created with css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArtContainer >
        <Moon />
        <Clouds />
        {Array(4).fill(true).map((_, i) => <Mountain order={i} key={i} />)}
        {Array(6).fill(true).map((_, i) => <Tree order={i} key={i} />)}
        <Fire />
        <House />
      </ArtContainer >
      <Ground />
    </Container>
  )
}
