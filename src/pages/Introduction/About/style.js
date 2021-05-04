import styled from 'styled-components'

export const ContainerPartner = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    margin: 60px 0;
    @media (min-width: 768px) {
        justify-content: flex-start;
        > img {
            margin-right: 30px;
        }
    }
` 