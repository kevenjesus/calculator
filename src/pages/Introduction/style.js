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
` 

export const Headline = styled.h1`
    font-size: 45px;
    font-family: 'Fjalla One';
    color: ${colors.secondary};
` 

export const Text = styled.p`
    font-size: 20px;
    color: ${colors.blacks.normal};
    line-height: 44px;
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
    margin-top: 30px;
    @media (min-width: 768px) {
        display: flex;
        text-align: left;
        margin-top: 45px;
        > img {
            order: 3;
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
