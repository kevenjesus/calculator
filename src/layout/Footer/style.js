import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100px;
    margin: 30px 0 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1366px) {
        width: 1280px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 15px;
        flex-direction: row;
        justify-content: space-between;
    }
    @media (min-width: 1440px) {
        width: 1366px;
    }
    @media (min-width: 1600px) {
        width: 1440px;
    }
`

export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    @media print {
        display: none;
    }
` 

export const MediaLink = styled.a`
    text-decoration: none;
    margin-left: 10px;
` 