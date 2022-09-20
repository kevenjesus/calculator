import styled from 'styled-components'

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
`

export const Modal = styled.div`
    width: 320px;
    padding: 20px;
    background-color: #fff;
    position: absolute;
    top: 10%;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 6;
`
