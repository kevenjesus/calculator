import { useContext, useEffect, useCallback } from 'react'
import {  Row, Col } from 'react-flexbox-grid'
import { Headline, Text } from 'pages/Introduction/style'
import { AppContext, stateTypes } from 'utils/AppContext'
import { YES, NO } from 'pages/Calculator/Form/consts'
import { EXTRATION_TYPE } from 'pages/Introduction/consts'
import RadioBoxConditional from 'components/RadioBoxConditional'
import Conditional from 'components/Conditional'
import mockStates from 'mocks/state.json'
import mockCountries from 'mocks/countries.json'
import mockContry from 'mocks/country.json'


const Region = () => {
    const { state: stateContext, dispatch } = useContext(AppContext)
    const { calculator, language } = stateContext;
    const { calculatorForm, introduction } = language
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
                    countries.popDensity2010 = country.densidadePop2010
                    countries.popDensity2060 = country.densidadePop2060
                    countries.urbanPopMunicipality = country.PopUrbMunicipio
                    countries.ruralPopMunicipality = country.PopRuralMunicipio
                    countries.distanceanningCenter = country.Distancia_Garimpo_Centro
                    countries.species = country.Especies_por_Municipio
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
            dispatch({type: stateTypes.SET_STEP, payload: { step: EXTRATION_TYPE}});
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
            <Headline>{introduction.region.headline}</Headline>
            <Text>
                {introduction.region.text}
            </Text>
            <div style={{textAlign: 'center'}}>
                <label style={{textAlign: 'center'}}>{calculatorForm.labels.knowRegion}</label>
                <RadioBoxConditional state={regionList} setState={handleRegion} />
            </div>
            <Conditional check={knowRegion}>
                <Row center="sm">
                    <Col sm={8} md={6}>
                        <Row>
                            <Col xs={12} sm={6}>
                                <label>{calculatorForm.labels.state}</label>
                                <select name="state" value={state} onChange={handleState}>
                                {
                                    stateList.map(({sigla, id}) => (
                                        <option key={id} value={id}>{sigla}</option>
                                    ))
                                }
                                </select>
                            </Col>
                            <Col xs={12} sm={6}>
                                <label>{calculatorForm.labels.country}</label>
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