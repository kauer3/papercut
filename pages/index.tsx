import Head from 'next/head'
import styled from 'styled-components'
import {
  Container,
} from '../components/sharedstyles'
import Mountain from '../components/mountain'
import Tree from '../components/tree'

const ArtContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 70%;
  border: 1px solid #362a09;
`

const Moon = styled.div`
  position: absolute;
  align-self: 'center';
  background: #d0d0d0;
  width: 8em;
  height: 8em;
  border-radius: 50%;
  /* mask-image: radial-gradient(circle, black 20%, rgba(0, 0, 0, 0.5) 50%); */
  /* mask-origin: border-box; */

  /* .shadow { */
  /*   transform: translate(-1em, -.3em); */
  /*   background: #909090; */
  /*   width: 7em; */
  /*   height: 7em; */
  /*   border-radius: 50%; */
  /* } */
`

const Ground = styled.div`
  position: absolute;
  align-self: 'center';
  background: #C2B280;
  width: 150vw;
  height: 100vh;
  bottom: -26.1em;
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
        <Moon>
          <div className="full-moon" />
          <div className="shadow" />
        </Moon>
        <Mountain order={1} />
        <Mountain order={2} />
        <Mountain order={3} />
        <Mountain order={4} />
        <Tree order={1} />
        <Tree order={2} />
        <Tree order={3} />
        <Tree order={4} />
        <Tree order={5} />
        <Tree order={6} />
      </ArtContainer >
      <Ground />
    </Container>
  )
}
