import { createGlobalStyle  } from 'styled-components'
import { colors } from './colors'

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
    
    label {
        display: block;
        font-size: 14px;
        font-weight: 600;
        margin: 15px 0;
        text-align: left;
    }

    h1,h2,h3,h4,h5 {
        margin: 0;
    }

    select {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        padding: 0 15px;
        border: 1px solid ${colors.blacks.medium};
        font-size: 15px;
        outline: none;
    }

    input {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        padding: 0 15px;
        border: 1px solid ${colors.blacks.medium};
        font-size: 15px;
        outline: none;
    }

    strong {
        color: ${colors.primary};
    }
` 

export default GlobalStyle