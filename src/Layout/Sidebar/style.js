import styled from 'styled-components'
import { colors } from 'theme/colors'

export const Container = styled.div`
    width: 80%;
    height: 100%;
    background: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    right: ${({visible}) => visible ? '0' : '-80%'};
    z-index: 2;
    padding: 15px;
    transition: right .2s;
` 

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    right: ${({visible}) => visible ? '0' : '-100%'};
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.4);
` 

export const CloseButton = styled.button`
    width: 28px;
    height: 28px;
    display: block;
    margin-left: auto;
    margin-bottom: 15px;
`

export const Language = styled.button`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
` 

export const LanguageLabel = styled.span`
    font-size: 12px;
    margin-left: 10px;
` 

export const Menuitem = styled.a`
    text-decoration: none;
    font-family: 'Fjalla One', sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    color: ${colors.blacks.normal};
` 