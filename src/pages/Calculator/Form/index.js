import { useEffect, useMemo, useCallback, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button, TextField } from 'theme'
import { Container } from './style'
import { ButtonFixed } from 'pages/Calculator/ImpactsStyles'
import { YES, IMPACTED_AREA, AMOUNT_GOLD, ALLUVIUM, FERRY, PIT, YEARS_OF_MINING, NO, MONTHS_OF_MINING} from './consts'
import { AppContext, stateTypes } from 'utils/AppContext'
import Conditional from 'components/Conditional'
import RadioBoxConditional from 'components/RadioBoxConditional'
import mockStates from 'mocks/state.json'
import mockStateColombia from 'mocks/countryColombia.json'
import mockStateEquador from 'mocks/countryEquador.json'
import mockStatePeru from 'mocks/countryPeru.json'
import mockCountries from 'mocks/countries.json'
import mockContry from 'mocks/country.json'
import calcResults from './calcResults'
import ExtrationTypeOptions from './ExtrationTypeOptions'
import { useAlert } from 'react-alert'
import { BRAZIL, COLOMBIA, countries_region, EQUADOR, PERU } from 'components/CountrySelect';
import useExchange from 'hooks/useExchange'


function Form() {
    const { state: stateContext, dispatch } = useContext(AppContext)
    const [placeholder, setPlaceholder] = useState('')
    const { calculator, language , country_region} = stateContext
    const {
        regionList,
        knowRegion,
        stateList,
        state,
        counties,
        country,
        qtdAnalysis,
        pitDepth,
        valuatioMethod,
        retort,
        inflation,
        txPrevalence } = calculator
    const { calculatorForm, introduction } = language
    const history = useHistory()
    const alert = useAlert()
    const { USDtoBRL } = useExchange()

    const isBrazil = useMemo(() => country_region && country_region.country === countries_region[BRAZIL].country, [country_region]) 
    const isEquador = useMemo(() => country_region && country_region.country === countries_region[EQUADOR].country, [country_region]) 
    const isPeru = useMemo(() => country_region && country_region.country === countries_region[PERU].country, [country_region]) 
    const isCOlombia = useMemo(() => country_region && country_region.country === countries_region[COLOMBIA].country, [country_region]) 


    const dataPitDepth = [
        {
            label: '2,5 ' + calculatorForm.values.pitDepth.meters + ' ('+language.defaultValue+')',
            value: 2.5
        },
        {
            label: '5 ' + calculatorForm.values.pitDepth.meters + '',
            value: 5
        },
        {
            label: '7,5 ' + calculatorForm.values.pitDepth.meters + '',
            value: 7.5
        },
        {
            label: '10 ' + calculatorForm.values.pitDepth.meters + '',
            value: 10
        },
        {
            label: '12,5 ' + calculatorForm.values.pitDepth.meters + '',
            value: 12.5
        },
        {
            label: '15 ' + calculatorForm.values.pitDepth.meters + '',
            value: 15
        },
        {
            label: '17,5 ' + calculatorForm.values.pitDepth.meters + '',
            value: 17.5
        },
        {
            label: '20 ' + calculatorForm.values.pitDepth.meters + '',
            value: 20
        },
    ]

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
        let dataCountries = []
        mockCountries.forEach(m => {
            if (m.microrregiao.mesorregiao.UF.id === Number(uf)) {
                dataCountries.push(m)
            }
        })

        mockContry.forEach(country => {
            dataCountries.forEach(countries => {
                if (country.id === countries.id) {
                    countries.popDensity2010 = country.densidadePop2010
                    countries.popDensity2060 = country.densidadePop2060
                    countries.urbanPopMunicipality = country.PopUrbMunicipio
                    countries.ruralPopMunicipality = country.PopRuralMunicipio
                    countries.distanceanningCenter = country.Distancia_Garimpo_Centro
                    countries.species = country.Especies_por_Municipio
                }
            })
        })

        dispatch({ type: stateTypes.SET_COUNTIES, payload: dataCountries })
        dispatch({ type: stateTypes.SET_COUNTRY, payload: dataCountries[0].id })

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
            }else if(isCOlombia) {
                const data = mockStateColombia
                getCountiesNotBrazil(data)
            }
             
        }
        if (state === '' || country === '') {
            getStates()
        }
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getCounties, dispatch, isBrazil, isEquador, isPeru, isCOlombia])

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
        const dataRetort = [
            {
                name: 'retort',
                label: 'Sim',
                value: YES,
                checked: false
            },
            {
                name: 'retort',
                label: 'Não',
                value: NO,
                checked: true
            },
        ]
        dispatch({type: stateTypes.SET_REGION_LIST, payload: dataRegion})
        dispatch({type: stateTypes.SET_RETORT, payload: dataRetort})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language, knowRegion])


    const handleRegion = useCallback((e) => {
        const { value } = e.target
        const regionListUpdate = regionList.map(r => {
            r.checked = false
            if (r.value === Number(value)) {
                r.checked = !r.checked
            }
            return r
        })
        dispatch({ type: stateTypes.SET_REGION_LIST, payload: regionListUpdate })
        dispatch({ type: stateTypes.SET_KNOW_REGION, payload: Number(value) === YES })
    }, [dispatch, regionList])
   
    const handleRetort = useCallback((e) => {
        const { value } = e.target
        const retort_update = retort.map(r => {
            r.checked = false
            if (r.value === Number(value)) {
                r.checked = !r.checked
            }
            return r
        })
        dispatch({type: stateTypes.SET_RETORT, payload: retort_update})
    }, [dispatch, retort])

    const handleState = useCallback((e) => {
        const { value } = e.target
        getCounties(value)
        dispatch({ type: stateTypes.SET_STATE, payload: value })

    }, [getCounties, dispatch])

    const handleCountry = useCallback((e) => {
        const { value } = e.target
        dispatch({ type: stateTypes.SET_COUNTRY, payload: value })
    }, [dispatch])

    const handleAnalysisUnit = useCallback((e) => {
        const { value } = e.target
        dispatch({ type: stateTypes.SET_ANALYS_UNIT, payload: Number(value) })
    }, [dispatch])

    const handleQtdAnalysis = useCallback((e) => {
        const { value } = e.target
        dispatch({ type: stateTypes.SET_QTD_ANALYS_UNIT, payload: { value, error: value === '' } })
    }, [dispatch])

    const handleInflation = useCallback((e) => {
        const { value } = e.target
        dispatch({ type: stateTypes.SET_INFLATION, payload: value })
    }, [dispatch])


    const handlePitDepth = useCallback((e) => {
        const { value } = e.target
        dispatch({ type: stateTypes.SET_PITDEPTH, payload: Number(value) })
    }, [dispatch])

    const handleValuationMethod = useCallback((e) => {
        const { value } = e.target
        const { analysisUnit } = calculator
        dispatch({ type: stateTypes.SET_VALUATION_METHOD, payload: Number(value) })

        if(analysisUnit !== AMOUNT_GOLD && Number(value) === FERRY) {
            dispatch({ type: stateTypes.SET_ANALYS_UNIT, payload: MONTHS_OF_MINING })
        }else if(analysisUnit !== AMOUNT_GOLD && Number(value) === PIT) {
            dispatch({ type: stateTypes.SET_ANALYS_UNIT, payload: YEARS_OF_MINING })
        }else if(analysisUnit !== AMOUNT_GOLD && Number(value) === ALLUVIUM) {
            dispatch({ type: stateTypes.SET_ANALYS_UNIT, payload: IMPACTED_AREA })
        }

    }, [calculator, dispatch])

    const handleTxPrevalance = useCallback((e) => {
        const { value } = e.target
        dispatch({ type: stateTypes.SET_TX_PREVALENCE, payload: Number(value) })
    }, [dispatch])

    const checkFormIsInvalid = useCallback(() => {
        alert.removeAll()
        if (qtdAnalysis.value === '') {
            dispatch({ type: stateTypes.SET_QTD_ANALYS_UNIT, payload: { ...qtdAnalysis, error: true } })
            alert.error(<span style={{textTransform: 'initial'}}>Por favor. Preencha o valor de unidade</span>)
            return true
        }
        return false
    }, [dispatch, qtdAnalysis, alert])


    const submitCalc = useCallback(() => {
        if(checkFormIsInvalid()) {
            return;
        }
        const dolarTOReal = Number(USDtoBRL.high)
        calcResults(stateContext, dispatch, dolarTOReal)
        history.push('/loading')
    }, [history, checkFormIsInvalid, stateContext, dispatch, USDtoBRL])

    useEffect(() => {
        let placeholder;
        if(calculator.analysisUnit === AMOUNT_GOLD) {
            placeholder = calculatorForm.values.qtdAnalysisUnit.grams
        }else if(calculator.analysisUnit === IMPACTED_AREA) {
            placeholder = calculatorForm.values.qtdAnalysisUnit.hactare
        }else if (calculator.analysisUnit === YEARS_OF_MINING) {
            placeholder = calculatorForm.values.qtdAnalysisUnit.years
        }else {
            placeholder = calculatorForm.values.qtdAnalysisUnit.months
        }
    setPlaceholder(placeholder)
    }, [calculator.analysisUnit, calculatorForm])
    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <label>{calculatorForm.labels.knowRegion}</label>
                        <RadioBoxConditional state={regionList} setState={handleRegion} />
                    </Col>
                </Row>
                <Conditional check={knowRegion}>
                    <Row>
                    {
                                isBrazil ? (
                                    <>
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
                                    </>
                                ) : (
                                    <Col xs={12}>
                                            <label>{calculatorForm.labels.country}</label>
                                        <select name="state" value={country} onChange={handleCountry}>
                                            {
                                                counties.map(({nome, id}) => (
                                                    <option key={id} value={id}>{nome}</option>
                                                ))
                                            }
                                        </select>
                                    </Col>
                                )
                            }
                    </Row>
                </Conditional>
                <Row>
                <Col xs={6}>
                        <label>{calculatorForm.labels.extractionType}</label>
                        <select name="valuationMethod" value={valuatioMethod} onChange={handleValuationMethod}>
                            <option value={ALLUVIUM}>{calculatorForm.values.extractionType.openPit}</option>
                            <option value={FERRY}>{calculatorForm.values.extractionType.boat}</option>
                            <option value={PIT}>{calculatorForm.values.extractionType.pitMine}</option>
                        </select>
                    </Col>
                    <Col xs={6}>
                        <label>{calculatorForm.labels.analysisUnit}</label>
                        <select name="analysisUnit" value={calculator.analysisUnit} onChange={handleAnalysisUnit}>
                            <ExtrationTypeOptions value={calculator.analysisUnit} type={valuatioMethod} translate={introduction} />
                        </select>
                    </Col>
                    <Col xs={valuatioMethod === ALLUVIUM ? 6 : 12} lg={valuatioMethod === ALLUVIUM ? 4 : 12}>
                        <TextField
                            label={placeholder}
                            error={qtdAnalysis.error}
                            type="number"
                            value={qtdAnalysis.value}
                            onChange={handleQtdAnalysis}
                            name="valor" placeholder={placeholder} />
                    </Col>

                    <Conditional check={valuatioMethod === ALLUVIUM}>
                    
                        <Col xs={6} lg={8}>
                            <label>{calculatorForm.labels.pitDepth}</label>
                            <select name="pitdepth" value={pitDepth} onChange={handlePitDepth}>
                                {dataPitDepth.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
                            </select>
                        </Col>
                        </Conditional>
                </Row>
                <Row>
                    
                    <Col xs={12}>
                        <label>{calculatorForm.labels.valueHypothesis}</label>
                        <select name="txPrevalencia" value={txPrevalence} onChange={handleTxPrevalance}>
                            <option value="0.29">{calculatorForm.values.valueHypothesis.conservative}</option>
                            <option value="0.343">{calculatorForm.values.valueHypothesis.precautionaryPrinciple}</option>
                        </select>
                    </Col>
                    
                </Row>
                <Row>
                    <Col xs={12}>
                        <TextField
                            label="Inflação acumulada desde de 2022 %"
                            type="number"
                            value={inflation}
                            onChange={handleInflation}
                            name="valor" placeholder="Inflação" />
                    </Col>
                </Row>
                <Row>
                {
                        knowRegion ? (
                            <Col xs={12} lg={6}>
                                <label>uso de capela?</label>
                                <RadioBoxConditional state={retort} setState={handleRetort} />
                            </Col>
                        ) : <></>
                    }
                </Row>

                <ButtonFixed>
                    <Grid>
                        <Row>
                            <Col xs={12} smOffset={4} mdOffset={0} sm={4} md={3}>
                                <Button onClick={submitCalc}>{calculatorForm.labels.btnCalulator}</Button>
                            </Col>
                        </Row>
                    </Grid>
                </ButtonFixed>


            </Grid>
        </Container>
    )
}

export default Form;