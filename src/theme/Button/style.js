import styled from 'styled-components'
import { colors } from 'theme/colors'

export const ButtonComponent = styled.button`
    margin: 0;
    padding: 0;
    outline: none;
    cursor: pointer;
    border: 0;
    width: 100%;
    height: 50px;
    background: ${({variant}) => colors[variant]};
    font-size: 15px;
    font-family: 'Fjalla One', sans-serif;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 15px;
` 