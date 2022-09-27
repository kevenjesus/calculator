import styled from 'styled-components'

export const ItemType = styled.div`
    width: 100%;
    border: 3px solid ${({active}) => active ? '#73B02B' : '#DDDFDB'};
    background: ${({active}) => active ? '#F7FDFB' : '#fff'};
    padding: 15px;
    cursor: pointer;
    margin-bottom: 20px;
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
` 

export const Title = styled.h2`
    font-size: 22px;
    margin-bottom: 15px;
    text-align: center;
    height: 90px;
`

export const Paragraphy = styled.p`
    font-size: 18px;
    text-align: center;
    @media (min-width: 768px) {
        text-align: left;
    }
` 

export const Thumbnail = styled.img`
    max-width: 100%;
    display: block;
    margin: 0 auto;
` 