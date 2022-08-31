import styled from 'styled-components'
import Image from 'assets/images/Capa-min.jpg'

export const ContainerBackground = styled.div`
    width: 100%;
    height: auto;
    background: url(${Image}) center center no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    @media (min-width: 768px) {
        bottom: 0;
    }
` 

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
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
    @media (min-width: 1440px) {
        width: 1366px;
    }
    @media (min-width: 1600px) {
        width: 1440px;
    }
` 

export const Embed = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
` 