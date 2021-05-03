import styled from 'styled-components'
import { colors } from 'theme/colors'
import arrowRight from 'assets/icons/arrow-right.svg'

export const Container = styled.div`
    width: 100%;
    margin-top: 30px;
    @media (min-width: 1366px) {
        width: 1280px;
        margin-left: auto;
        margin-right: auto;
    }
    @media (min-width: 1440px) {
        width: 1366px;
    }
    @media (min-width: 1600px) {
        width: 1440px;
    }
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

    @media (min-width: 1366px) {
         font-size: 15px;
    }
    
`

export const Headline = styled.h1`
    font-family: Fjalla One;
    font-size: 30px;
    color: ${colors.blacks.normal};
    margin-bottom: 15px;
    @media (min-width: 1366px) {
         font-size: 45px;
    }
`

export const Text = styled.p`
    font-size: 15px;
    line-height: 30px;
    color: ${colors.blacks.normal};
    @media (min-width: 1366px) {
         font-size: 20px;
    }
` 

export const ButtonFixed = styled.div`
   display: flex;
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    > div {
        width: 100%;
        > div {
            > div {
                padding: 0;
            }
        }
    }
    @media (min-width: 768px) {
        position: initial;
        margin-top: 80px;
        > div {
            width: 100%;
            > div {
                > div {
                    padding: 0 8px;
                }
            }
        }
    }
` 

export const HiddenSm = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
` 

export const Table = styled.table`
    width: 100%;
` 

export const Thead = styled.thead`
    
    
` 

export const Tbody = styled.tbody`
` 

export const Tr = styled.tr`
    display: flex;
` 

export const Th = styled.th`
    width: 50%;
    height: 40px;
    background-color: ${colors.primary};
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border: 1px solid #ccc;
   
`

export const Td = styled.td`
    width: 50%;
    border: 1px solid #ccc;
    padding: 10px;
  
` 

export const HiddenPrint = styled.div`
    @media print {
        display: none;
    }
` 
