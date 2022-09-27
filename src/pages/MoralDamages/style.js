import styled from 'styled-components'

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