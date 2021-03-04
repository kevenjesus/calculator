import styled from 'styled-components'
import { colors } from 'theme/colors'
import breakpoints from 'theme/breakpoints'

export const Container = styled.div`
    width: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

export const LogoName = styled.span`
    display: block;
    font-family: 'Fjalla One', sans-serif;
    font-size: 30px;
    color: ${colors.blacks.normal};
    text-transform: uppercase;
`

export const LogoSlogan = styled.span`
    display: block;
    margin-left: auto;
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
`
