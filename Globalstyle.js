import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    body {
      height: 100%;
    }
  }
`
export const Container = styled.div`
    margin: 0;
    padding: 0;
    background: #dd8000;
    display: flex;
    flex-direction: column;
    min-height: 100vh !important;
`