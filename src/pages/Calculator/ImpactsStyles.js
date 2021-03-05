import styled from 'styled-components'
import { colors } from 'theme/colors'
import arrowRight from 'assets/icons/arrow-right.svg'

export const Container = styled.div`
    width: 100%;
    margin-top: 30px;
` 

export const Menu = styled.aside`
    width: 100%;
    padding: 26px 15px;
    border: 1px solid #C2C2C2;
    margin-bottom: 25px;
` 

export const MenuItem = styled.a`
    display: flex;
    color: ${({active}) => active ? colors.primary : colors.blacks.normal};
    font-weight: ${({active}) => active ? 600 : 400};
    font-size: 15px;
    margin-bottom: ${({last}) => last ? 0 : '20px'};
    text-decoration: underline;
    &::before {
        content: '';
        width: 22px;
        height: 22px;
        display: block;
        margin-right: 10px;
        background: ${({active}) => active ? colors.primary : colors.blacks.normal};
        mask: url(${arrowRight}) center top no-repeat;
    }

    @media (min-width: 768px) {
        font-size: 12px;
    }
`

export const Headline = styled.h1`
    font-family: Fjalla One;
    font-size: 30px;
    color: ${colors.blacks.normal};
    margin-bottom: 15px;
`

export const Text = styled.p`
    font-size: 15px;
    line-height: 30px;
    color: ${colors.blacks.normal};
` 

export const ButtonFixed = styled.div`
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: ${({join}) => join ? 'flex' : 'block'};
    @media (min-width: 768px) {
        position: initial;
        margin: 50px 0;
    }
` 

export const HiddenSm = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
` 