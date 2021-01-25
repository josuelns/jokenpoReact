import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    body {
      height: 100%;
    }

    h1 {
      color: white;
      margin: 15px 0px;
      font-size: 40px;
      text-align: center;
    }

    h3,p, svg{
      color: red;
    }

    .windowGame{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: center;
      border: 2px solid red;
      border-radius: 50px;
      width: 800px;
    }
  }
`
export const Container = styled.div`
    margin: 0;
    padding: 0;
    background: #ccc;
    display: flex;
    flex-direction: column;
    min-height: 100vh !important;
`