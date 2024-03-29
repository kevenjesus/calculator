import styled from 'styled-components'


export const OverLay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: #fff;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Monetary = styled.span`
    display: block;
    color: red;
    font-size: 25px;
    font-weight: 700;
` 

export const FormGroup = styled.div`
    margin-bottom: 30px;
` 

export const MonetaryType = styled.small`
    font-size: 12px;
    font-weight: 600;
    
` 

export const Label = styled.label`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
` 

export const Card = styled.div`
    margin-top: 60px;
    padding: 16px;
    box-shadow: 0 0 7px 0 rgba(0,0,0,.54);
    @media print {
        break-inside: avoid;
    }
` 