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
    z-index: 999;
    padding: 15px;
    transition: right .2s;
    @media (min-width: 768px) {
        display: none;
    }
` 

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    right: ${({visible}) => visible ? '0' : '-100%'};
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.4);
    z-index: 99;
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
    @media (min-width: 768px) {
        margin-right: 15px;
    }
` 

export const LanguageLabel = styled.span`
    font-size: 12px;
    margin-left: 10px;
    @media (min-width: 768px) {
        display: none;
    }
` 

export const Menuitem = styled.a`
    text-decoration: none;
    font-family: 'Fjalla One', sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    color: ${({theme}) => theme === 'white' ? colors.blacks.normal : '#fff'};
    display:block;
    margin-bottom: 10px;
    a {
        text-decoration: none !important;
        font-family: 'Fjalla One', sans-serif !important;
        font-size: 20px !important;
        text-transform: uppercase !important;
        color: ${({theme}) => theme === 'white' ? colors.blacks.normal : '#fff'} !important; 
    }
    @media (min-width: 1280px) {
        display: inline-block;
        margin-bottom: 0;
        margin-left: 10px;
    }
` 