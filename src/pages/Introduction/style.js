import styled from 'styled-components'
import { colors } from 'theme/colors'

export const Container = styled.div`
    width: 100%;
    padding: 20px 15px;
    overflow-x: hidden;
    @media (min-width: 1366px) {
        width: 1280px;
        margin: 0 auto;
    }
    @media (min-width: 1440px) {
        width: 1366px;
    }
    @media (min-width: 1600px) {
        width: 1440px;
    }
` 

export const Headline = styled.h1`
    font-size: 45px;
    font-family: 'Fjalla One';
    color: ${({color}) => color ? color : colors.secondary};
` 

export const Text = styled.p`
    font-size: 20px;
    color: ${({color}) => color ? color : colors.blacks.normal};
    line-height: 44px;
    @media (min-width: 1200px) {
        font-size: 22.5px;
    }
` 

export const LanguageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
    margin-left: auto;
` 

export const Language = styled.button`
    display: inline-block;
    @media (min-width: 768px) {
        margin-right: 15px;
    }
` 

export const ButtonsFixed = styled.div`
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

export const ImpactedBox = styled.div`
    width: 100%;
    text-align: center;
    padding: 15px 15px 0 15px;
   
    border: 2px solid #ccc;
    margin-bottom: 32px;
    @media (min-width: 768px) {
        display: flex;
        text-align: left;
        > img {
            order: 3;
            padding: 15px 70px 0 70px;
            margin-left: 20px;
        }
    }
` 

export const Go = styled.button`
    font-size: 12px;
    display: flex;
    align-items: center;
    visibility: ${({hidden}) => hidden ? 'hidden' : 'visible'};
` 

export const Header = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
` 
