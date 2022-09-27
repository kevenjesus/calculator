import styled from 'styled-components'
import { colors } from 'theme/colors'

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > svg {
        margin: 0;
    }
    @media (min-width: 1440px) {
        width: 1366px;
        margin:0 auto;
    }
    @media (min-width: 1600px) {
        width: 1440px;
    }
` 

export const Text = styled.h1`
    font-size: 18px;
    color: ${colors.blacks.normal};
    margin-top: 15px;
` 