import styled from 'styled-components'
import { colors } from 'theme/colors'

export const Container = styled.div`
    width: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 1366px) {
        width: 1280px;
        margin-left: auto;
        margin-right: auto;
    }
` 

export const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 123px;
    background: #fff;
    box-shadow: 0px 2px 10px -3px #3F3D56;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
` 

export const LogoBase = styled.div`
    margin-left: 10px;
    display: inline-block;
    flex-wrap: wrap;
    align-items: center;
    @media (min-width: 768px) {
        display: flex;
    }
` 

export const LogoName = styled.span`
    display: block;
    width: 100%;
    font-family: 'Fjalla One', sans-serif;
    font-size: ${({isPtBR}) => isPtBR ? '15px' : '30px'};
    color: ${colors.blacks.normal};
    text-transform: uppercase;
    @media (min-width: 768px ) {
        font-size: ${({isPtBR}) => isPtBR ? '20px' : '25px'};
    }
    @media (min-width: 1200px ) {
        font-size: 30px
    }
`

export const LogoSlogan = styled.span`
    display: block;
    width: 100%;
    font-size: 12px;
    color: ${colors.blacks.normal};
`   

export const BarMenu = styled.button`
    border: 0;
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    background: transparent;
    width: 25px;
    height: 25px;
    cursor: pointer;
    @media (min-width: 768px) {
        display: none;
    }
`

export const MenuShow = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: flex;
    }
` 
