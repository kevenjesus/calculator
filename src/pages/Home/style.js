import styled from 'styled-components'
import Image from 'assets/images/capa.jpg'

export const ContainerBackground = styled.div`
    width: 100%;
    height: 100%;
    background: url(${Image}) center top no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
` 

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
` 

export const Container = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 5em 1em;
    @media (min-width: 1366px) {
        width: 1280px;
        margin: 0 auto;
    }
` 