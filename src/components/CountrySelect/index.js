import { useState, useCallback, useContext } from 'react'
import { AppContext, stateTypes } from 'utils/AppContext'

import Modal from "components/Modal"
import * as S from './styles'
import { Button } from 'theme';

export const BRAZIL = 0
export const EQUADOR = 1
export const PERU = 2
export const COLOMBIA = 3

export const countries_region = [
    {
        country: 'BR',
        label: 'Brasil'
    },
    {
        country: 'EC',
        label: 'Equador'
    },
    {
        country: 'PE',
        label: 'Peru'
    },
    {
        country: 'CO',
        label: 'Colombia'
    },
]

const CountrySelect = () => {
    const { state, dispatch} = useContext(AppContext);
    const [modalState, setModal] = useState(true)
    const [selected, setCountry] = useState(countries_region[0])
    

    const handleCountry = useCallback((event) => {
        const select = event.target
        const valueSelect = select.options[select.selectedIndex].getAttribute("value")
        const value = countries_region.find(item => item.country === valueSelect)
        setCountry(value)
    }, [setCountry, dispatch])

    const handleNext = useCallback(() => {
        setModal(false)
        dispatch({type: stateTypes.SET_COUNTRY_REGION, payload: selected })
    }, [setModal, selected])

    return (
        <Modal open={modalState}>
            <S.Headling>Selecione qual país</S.Headling>
            <S.Text>Selecione o país onde será baseado as informaçoes de garimpo ilegal de ouro.</S.Text>
            <select value={selected && selected.country} onChange={handleCountry}>
                {
                    countries_region.map(item => <option key={item.country} value={item.country}>{item.label}</option>)
                }
                
            </select>
            <Button style={{marginTop: 32}} onClick={handleNext}>Prosseguir</Button>
            
        </Modal>
    )
}

export default CountrySelect