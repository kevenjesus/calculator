import styled from 'styled-components'

export const ContainerPartner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto;
    @media (min-width: 768px) {
        justify-content: flex-start;
        > img {
            display: flex;
            margin-right: 80px;
        }
    }
` 