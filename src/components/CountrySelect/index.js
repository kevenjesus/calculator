import { useState, useCallback } from 'react'

import Modal from "components/Modal"
import * as S from './styles'
import { Button } from 'theme';

const BRASIL = 0;
const EQUADOR = 1;
const PERU = 2;
const COLOMBIA = 3;

const CountrySelect = () => {
    const [modalState, setModal] = useState(true)
    const [selected, setCountry] = useState(BRASIL)

    const handleCountry = useCallback((event) => {
        const value = Number(event.target.value)
        setCountry(value)
    }, [setCountry])

    const handleNext = useCallback(() => {
        setModal(false)
    }, [setModal])

    return (
        <Modal open={modalState}>
            <S.Headling>Selecione qual país</S.Headling>
            <S.Text>Selecione o país onde será baseado as informaçoes de garimpo ilegal de ouro.</S.Text>
            <select value={selected} onChange={handleCountry}>
                <option value={BRASIL}>Brasil</option>
                <option value={EQUADOR}>Equador</option>
                <option value={PERU}>Peru</option>
                <option value={COLOMBIA}>Colombia</option>
            </select>
            <Button style={{marginTop: 32}} onClick={handleNext}>Prosseguir</Button>
            
        </Modal>
    )
}

export default CountrySelect