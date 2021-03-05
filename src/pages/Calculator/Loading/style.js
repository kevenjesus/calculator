import styled from 'styled-components'
import { colors } from 'theme/colors'

export const Container = styled.div`
    width: 100%;
    margin-top: 30px;
    @media (min-width: 1366px) {
        display: flex;
        align-items: center;
    }
` 

export const Text = styled.h1`
    font-size: 18px;
    color: ${colors.blacks.normal};
    text-align: center;
    margin-top: 10px;
` 

export const Img = styled.img`
    margin: 50px 0 0 -25px;
    @media (min-width: 768px) {
        width: 70%;
    }
    @media (min-width: 1366px) {
        width: 40%;
    }
` 

export const AjustDesktop = styled.div`
    @media (min-width: 1366px) {
        order: 2;
        margin-left: 100px;
        margin-top: 200px;
    }
` 