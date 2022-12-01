import { Headline, Text } from 'pages/Introduction/style'
import { useCallback, useContext, useEffect, useMemo } from 'react';
import {  Row, Col } from 'react-flexbox-grid'
import { AppContext, stateTypes } from 'utils/AppContext';
import RadioBoxConditional from 'components/RadioBoxConditional'
import Conditional from 'components/Conditional'
import mockStates from 'mocks/state.json'
import mockStateColombia from 'mocks/countryColombia.json'
import mockStateEquador from 'mocks/countryEquador.json'
import mockStatePeru from 'mocks/countryPeru.json'
import mockCountries from 'mocks/countries.json'
import mockContry from 'mocks/country.json'
import { NO, YES } from 'pages/Calculator/Form/consts';
import { BRAZIL, COLOMBIA, countries_region, EQUADOR, PERU } from 'components/CountrySelect';
import capitalizeFirstLetter from 'utils/capitalize';

const HowUseCalculator = () => {
    const { state: stateContext, dispatch } = useContext(AppContext)
    const { calculator, language, country_region } = stateContext;
    const { calculatorForm, introduction } = language
    const { knowRegion, regionList, stateList, state, country, counties } = calculator;

    const isBrazil = useMemo(() => country_region && country_region.country === countries_region[BRAZIL].country, [country_region]) 
    const isEquador = useMemo(() => country_region && country_region.country === countries_region[EQUADOR].country, [country_region]) 
    const isPeru = useMemo(() => country_region && country_region.country === countries_region[PERU].country, [country_region]) 
    const isColombia = useMemo(() => country_region && country_region.country === countries_region[COLOMBIA].country, [country_region]) 

    const getCountiesNotBrazil = useCallback((mock) => {
        mock.forEach((countries) => {
            countries.popDensity2010 = countries.densidadePop2010
            countries.popDensity2060 = countries.densidadePop2060
            countries.urbanPopMunicipality = countries.PopUrbMunicipio
            countries.ruralPopMunicipality = countries.PopRuralMunicipio
            countries.distanceanningCenter = countries.Distancia_Garimpo_Centro
            countries.species = countries.Especies_por_Municipio
        })
        
        dispatch({type: stateTypes.SET_COUNTIES, payload: mock});
        dispatch({type: stateTypes.SET_COUNTRY, payload: mock[0].id});

    }, [dispatch])

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
            
            if(isBrazil) {
                const data = mockStates
                dispatch({type: stateTypes.SET_STATE_LIST, payload: data })
                dispatch({type: stateTypes.SET_STATE, payload: data[0]})
                getCounties(data[0].id) 
            }else if(isEquador) {
                const data = mockStateEquador
                getCountiesNotBrazil(data)
            }else if(isPeru) {
                const data = mockStatePeru
                getCountiesNotBrazil(data)
            }else if(isColombia) {
                const data = mockStateColombia
                getCountiesNotBrazil(data)
            }
             
          }
          getStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getCounties, isBrazil, isEquador, isPeru, isColombia, dispatch])

    useEffect(() => {
        const dataRegion = [
            {
                name: 'region',
                label: language.knowRegionYes,
                value: YES,
                checked: knowRegion === false ? false : true
            },
            {
                name: 'region',
                label: language.knowRegionNo,
                value: NO,
                checked: knowRegion === false ? true : false
            },
        ]
        dispatch({type: stateTypes.SET_REGION_LIST, payload: dataRegion})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language])

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [regionList])

    const handleState = useCallback((e) => {
        const { value } = e.target;
        getCounties(value)
        dispatch({type: stateTypes.SET_STATE, payload: value})
        
    }, [getCounties, dispatch]);

    const handleCountry = useCallback((e) => {
        const { value } = e.target;
        dispatch({type: stateTypes.SET_COUNTRY, payload: value})
    }, [dispatch])
    
    let districtForPeruAndEquador = language.district
    if(isPeru) {
        districtForPeruAndEquador = 'Provincia'
    }else if(isColombia) {
        districtForPeruAndEquador = 'Departamento'
    }else if (isEquador) {
        districtForPeruAndEquador = 'Cantón'
    }

    return (
        <>
            <Headline>{introduction.howUseCalculator.headline}</Headline>
            <Text>
                {introduction.howUseCalculator.paragraphy_01}            
            </Text>
            

            <Text>
                {introduction.howUseCalculator.paragraphy_02}   
            </Text>
            <Text>
                <strong>{introduction.howUseCalculator.paragraphy_03}</strong>
            </Text>
            <Text>
                <strong>{introduction.howUseCalculator.paragraphy_04}</strong>
            </Text>
            <Text>
                <strong>{introduction.howUseCalculator.paragraphy_05}</strong>
            </Text>
            <Text>
            <strong>{introduction.howUseCalculator.paragraphy_06}</strong>
            </Text>
            <Text>
            <strong>{introduction.howUseCalculator.paragraphy_07}</strong>
            </Text>
            
            <Text>
            {introduction.howUseCalculator.paragraphy_08}
            </Text>
            <br />
            <div style={{textAlign: 'center'}}>
                <Text>{calculatorForm.labels.knowRegion}</Text>
                <RadioBoxConditional state={regionList} setState={handleRegion} />
            </div>
            <Conditional check={knowRegion}>
                <Row center="sm">
                    <Col sm={8} md={6}>
                        <Row>
                            {
                                isBrazil ? (
                                    <>
                                        <Col xs={12} sm={6}>
                                            <label>{calculatorForm.labels.state}</label>
                                            <select name="state" value={state} onChange={handleState}>
                                            {
                                                stateList.map(({sigla, id}) => (
                                                    <option key={id} value={id}>{capitalizeFirstLetter(sigla.toLowerCase())}</option>
                                                ))
                                            }
                                            </select>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <label>{calculatorForm.labels.country}</label>
                                            <select name="state" value={country} onChange={handleCountry}>
                                                {
                                                    counties.map(({nome, id}) => (
                                                        <option key={id} value={id}>{capitalizeFirstLetter(nome.toLowerCase())}</option>
                                                    ))
                                                }
                                            </select>
                                        </Col>
                                    </>
                                ) : (
                                    <Col xs={12}>
                                            <label>{districtForPeruAndEquador}</label>
                                        <select name="state" value={country} onChange={handleCountry}>
                                            {
                                                counties.map(({nome, id}) => (
                                                    <option key={id} value={id}>{capitalizeFirstLetter(nome.toLowerCase())}</option>
                                                ))
                                            }
                                        </select>
                                    </Col>
                                )
                            }
                            
                        </Row>
                    </Col>
                </Row>
            </Conditional>
        </>
    )
}

export default HowUseCalculator;