import styled from 'styled-components'

export const ContainerPartner = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    margin: 50px 0;
    @media (min-width: 768px) {
        justify-content: center;
        > img {
            margin-left: 30px;
        }
    }
` 