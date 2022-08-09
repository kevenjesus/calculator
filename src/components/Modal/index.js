import {  useState, useEffect } from 'react'

import * as S from './styles'

const Modal = ({children, open}) => {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        setToggle(open)
    }, [open])

    if(!toggle) {
        return <></>
    }

    return <>
        <S.Overlay>
            <S.Modal>
                {children}
            </S.Modal>
        </S.Overlay>
        
    </>
}

export default Modal