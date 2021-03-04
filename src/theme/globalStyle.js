import { createGlobalStyle  } from 'styled-components'


const GlobalStyle = createGlobalStyle`

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    body {
        font-size: 15px;
        font-family: 'Open Sans', sans-serif;
    }

    button {
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        cursor: pointer;
        outline: none;
    }

` 

export default GlobalStyle