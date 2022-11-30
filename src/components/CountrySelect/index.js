import { useState, useCallback, useContext } from 'react'
import { AppContext, stateTypes } from 'utils/AppContext'
import ptBR from 'utils/pt_BR'
import esES from 'utils/es_ES'
import Modal from "components/Modal"
import * as S from './styles'
import { Button } from 'theme';
import { ReactComponent as Portuguese } from 'assets/icons/portuguese.svg'
import { ReactComponent as Spanish } from 'assets/icons/spanish.svg'
import { ReactComponent as English } from 'assets/icons/usa.svg'

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
        label: 'Ecuador'
    },
    {
        country: 'PE',
        label: 'Perú'
    },
    {
        country: 'CO',
        label: 'Colombia'
    },
]

const CountrySelect = () => {
    const {dispatch} = useContext(AppContext);
    const [modalState, setModal] = useState(true)
    const [selected, setCountry] = useState(countries_region[0])
    

    const handleCountry = useCallback((event) => {
        const select = event.target
        const valueSelect = select.options[select.selectedIndex].getAttribute("value")
        const value = countries_region.find(item => item.country === valueSelect)
        setCountry(value)
    }, [setCountry])

    const handleNext = useCallback(() => {
        setModal(false)
        dispatch({type: stateTypes.SET_COUNTRY_REGION, payload: selected })
        if(selected.country === countries_region[BRAZIL].country) {
            dispatch({type: stateTypes.SET_LANGUAGE, payload: ptBR })
        }else {
            dispatch({type: stateTypes.SET_LANGUAGE, payload: esES })
        }
        
        
    }, [setModal, dispatch, selected])

    return (
        <Modal open={modalState}>
            <S.Headling>Território</S.Headling>
            <S.Text><Portuguese width={40} style={{marginRight: '8px'}} />  Selecione o país onde será baseado as informaçoes de garimpo ilegal de ouro.</S.Text>
            <S.Text><Spanish width={40} style={{marginRight: '8px'}} />  Seleccione el país donde se basará la información sobre minería ilegal de oro.</S.Text>
            <S.Text><English width={40} style={{marginRight: '8px'}} />  Select the country where the illegal gold mining information will be based.</S.Text>
            <select value={selected && selected.country} onChange={handleCountry}>
                {
                    countries_region.map(item => <option key={item.country} value={item.country}>{item.label}</option>)
                }
                
            </select>
            <Button style={{marginTop: 32}} onClick={handleNext}>Ok</Button>
            
        </Modal>
    )
}

export default CountrySelect