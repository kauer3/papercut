import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    opacity: 1;
    background: radial-gradient(circle, transparent 20%, #191919 20%, #191919 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #191919 20%, #191919 80%, transparent 80%, transparent) 15px 15px, linear-gradient(#272727 1.2000000000000002px, transparent 1.2000000000000002px) 0 -0.6000000000000001px, linear-gradient(90deg, #272727 1.2000000000000002px, #191919 1.2000000000000002px) -0.6000000000000001px 0;
    background-size: 30px 30px, 30px 30px, 15px 15px, 15px 15px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
