import styled from 'styled-components'

export const WrapperPrint = styled.div`
    width: 100%;
    @media print {
        svg {
            padding-right: 200px;
        }
    }
` 