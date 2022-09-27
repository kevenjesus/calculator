import styled from 'styled-components'

export const ItemType = styled.div`
    width: 100%;
    height: 100%;
    border: 3px solid ${({active}) => active ? '#73B02B' : '#DDDFDB'};
    background: ${({active}) => active ? '#F7FDFB' : '#fff'};
    padding: 15px;
    cursor: pointer;
    margin-bottom: 15px;
` 

export const Title = styled.h2`
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;
    height: 90px;
`

export const Paragraphy = styled.p`
    font-size: 18px;
` 

export const Thumbnail = styled.img`
    max-width: 100%;
    @media (min-width: 768px) {
        display: block;
        margin: 0 auto;
    }
` 