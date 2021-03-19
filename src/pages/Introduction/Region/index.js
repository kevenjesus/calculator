import { useContext, useEffect, useCallback } from 'react'
import {  Row, Col } from 'react-flexbox-grid'
import { Headline, Text } from 'pages/Introduction/style'
import { AppContext, stateTypes } from 'utils/AppContext'
import { YES, NO } from 'pages/Calculator/Form/consts'
import { VALUATION_METHOD } from 'pages/Introduction/consts'
import RadioBoxConditional from 'components/RadioBoxConditional'
import Conditional from 'components/Conditional'
import mockStates from 'mocks/state.json'
import mockCountries from 'mocks/countries.json'
import mockContry from 'mocks/country.json'


const Region = () => {
    const { state: stateContext, dispatch } = useContext(AppContext)
    const { calculator } = stateContext;
    const { knowRegion, regionList, stateList, state, country, counties } = calculator;

    const getCounties = useCallback((uf) => {
        let dataCountries = [];
        mockCountries.forEach(m => {
            if(m.microrregiao.mesorregiao.UF.id === Number(uf)) {
                dataCountries.push(m);
            }
        })

        mockContry.forEach(country => {
            dataCountries.forEach(countries => {
                if(country.id === countries.id) {
                    countries.densidadePop2010 = country.densidadePop2010;
                    countries.densidadePop2060 = country.densidadePop2060;
                }
            })
        })

        dispatch({type: stateTypes.SET_COUNTIES, payload: dataCountries});
        dispatch({type: stateTypes.SET_COUNTRY, payload: dataCountries[0].id});
        
    }, [dispatch])

    useEffect(() => {
        const getStates = () => {
             const data = mockStates
             dispatch({type: stateTypes.SET_STATE_LIST, payload: data })
             dispatch({type: stateTypes.SET_STATE, payload: data[0]})
             getCounties(data[0].id)
          }
          getStates();
    }, [getCounties, dispatch])

    const handleRegion = useCallback((e) => {
        const { value } = e.target;
        const regionListUpdate = regionList.map(r => {
            r.checked = false;
            if(r.value === Number(value)) {
                r.checked = !r.checked
            }
            return r;
        })
        dispatch({type: stateTypes.SET_REGION_LIST, payload: regionListUpdate})
        dispatch({type: stateTypes.SET_KNOW_REGION, payload: Number(value) === YES})
        if(Number(value) === NO) {
            dispatch({type: stateTypes.SET_STEP, payload: { step: VALUATION_METHOD}});
        }
    }, [dispatch, regionList])

    const handleState = useCallback((e) => {
        const { value } = e.target;
        getCounties(value)
        dispatch({type: stateTypes.SET_STATE, payload: value})
        
    }, [getCounties, dispatch]);

    const handleCountry = useCallback((e) => {
        const { value } = e.target;
        dispatch({type: stateTypes.SET_COUNTRY, payload: value})
    }, [dispatch])

    return (
        <>
            <Headline>Região</Headline>
            <Text>
                As regiões apresentam diferentes características populacionais (tamanho, densidade, origem) e ambientais (cor e turbidez dos rios)
            </Text>
            <div style={{textAlign: 'center'}}>
                <label style={{textAlign: 'center'}}>Você gostaria de saber mais sobre os impactos gerais do garimpo, ou impactos de um garimpo específico do qual saiba a localização?</label>
                <RadioBoxConditional state={regionList} setState={handleRegion} />
            </div>
            <Conditional check={knowRegion}>
                <Row center="sm">
                    <Col sm={8} md={6}>
                        <Row>
                            <Col xs={12} sm={6}>
                                <label>Região</label>
                                <select name="state" value={state} onChange={handleState}>
                                {
                                    stateList.map(({sigla, id}) => (
                                        <option key={id} value={id}>{sigla}</option>
                                    ))
                                }
                                </select>
                            </Col>
                            <Col xs={12} sm={6}>
                                <label>Municipio</label>
                                <select name="state" value={country} onChange={handleCountry}>
                                    {
                                        counties.map(({nome, id}) => (
                                            <option key={id} value={id}>{nome}</option>
                                        ))
                                    }
                                </select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Conditional>
        </>
    )
}

export default Region;