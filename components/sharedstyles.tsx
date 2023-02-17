import styled from 'styled-components'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`

const Wood = styled.div`
  height: 5em;
  width: 2em;
  background-color: #3d2408;
  opacity: 1;
  background-image: linear-gradient(to right, #27170c, #27170c 4px, #3d2408 4px, #3d2408 );
  background-size: 8px 100%;
`

export {
  Container,
  Wood
}
