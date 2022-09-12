import {  useCallback, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { ALLUVIUM, AMOUNT_GOLD, CATEGORY_DEFORESTATION, CATEGORY_MERCURY, CATEGORY_SILTING_RIVERS, FERRY, IMPACTED_AREA, MONTHS_OF_MINING, NO, PIT, YEARS_OF_MINING, YES } from 'pages/Calculator/Form/consts'
import { Container, Headline, ButtonFixed, HiddenPrint, HiddenXS, HiddenSm } from 'pages/Calculator/ImpactsStyles'
import { Monetary, MonetaryType, Label, FormGroup, Card } from './style'
import Chart from 'components/Chart'
import { AppContext, stateTypes } from 'utils/AppContext'
import ToBRL from 'utils/toBRL'
import MenuImpacts from '../Menu'
import calcResults from '../Form/calcResults'
import RadioBoxConditional from 'components/RadioBoxConditional'
import Conditional from 'components/Conditional'
import mockStates from 'mocks/state.json'
import mockCountries from 'mocks/countries.json'
import mockContry from 'mocks/country.json'
import ExtrationTypeOptions from '../Form/ExtrationTypeOptions'
import { useAlert } from 'react-alert'
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";

import getGoldValue from 'utils/getGoldValue'
import { BRAZIL, countries_region } from 'components/CountrySelect'
import convertAllinGold from 'utils/convertAllinGold'
import toUSD from 'utils/toUSD'



export const DataChart = ({impact, headline, hiddenMonetary, txtTotalNonetary}) => {
    const { total, data } = impact
    return (
        <Card>
            <Row>
                <Col xs={12} md={8}>
                    <h2>{headline}</h2>
                </Col>
                {!hiddenMonetary ?
                <Col xs={12} md={4} style={{textAlign: 'right'}}>
                     <Label style={{textAlign: 'right', display: 'inline-block', marginRight: 10}}>{txtTotalNonetary}</Label>
                     <Monetary style={{display: 'inline-block'}}>{total}</Monetary> 
                </Col>
                : null }
                <Col xs={12}>
                    <Chart data={data} />
                </Col>
            </Row>
        </Card>
    )
}

const FormCalc = () => {
    const { state: stateContext, dispatch } = useContext(AppContext)
    const [placeholder, setPlaceholder] = useState("")
    const { calculator, language, country_region, priceUSDtoBRL } = stateContext
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
    const alert = useAlert()

    const isBrazil = country_region && country_region.country === countries_region[BRAZIL].country


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
            const data = mockStates
            dispatch({ type: stateTypes.SET_STATE_LIST, payload: data })
            dispatch({ type: stateTypes.SET_STATE, payload: data[0] })
            getCounties(data[0].id)
        }
        if (state === '' && country === '') {
            getStates()
        }
       

    }, [getCounties, dispatch, state, country])

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

    const checkFormIsInvalid = useCallback(() => {
        alert.removeAll()
        if (qtdAnalysis.value === '') {
            dispatch({ type: stateTypes.SET_QTD_ANALYS_UNIT, payload: { ...qtdAnalysis, error: true } })
            alert.error(<span style={{textTransform: 'initial'}}>Por favor. Preencha o valor de unidade</span>)
            return true
        }
        return false
    }, [alert, dispatch, qtdAnalysis])

    const submitCalc = useCallback((state) => {
        if(checkFormIsInvalid()) {
            return;
        }
        
        calcResults(state, dispatch, priceUSDtoBRL)
        const { calculator } = state
        sessionStorage.removeItem('@Calculator/form')
        sessionStorage.setItem('@Calculator/form', JSON.stringify(calculator))
    },[checkFormIsInvalid, priceUSDtoBRL, dispatch])

    const updateCalc = useCallback(() => {
        submitCalc(stateContext)
    }, [stateContext, submitCalc])

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
        submitCalc({...stateContext, calculator: {...calculator, retort:retort_update}})
    }, [dispatch, calculator, stateContext, submitCalc, retort])

    const handleInflation = useCallback((e) => {
        const { value } = e.target
        dispatch({ type: stateTypes.SET_INFLATION, payload: value })
        submitCalc({...stateContext, calculator: {...calculator, inflation:value}})
    }, [calculator, stateContext, submitCalc, dispatch])


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
        submitCalc({...stateContext, calculator: {...calculator, regionList:regionListUpdate, knowRegion: Number(value) === YES}})
    }, [calculator, dispatch, regionList, stateContext, submitCalc])

    const handleState = useCallback((e) => {
        const { value } = e.target
        getCounties(value)
        dispatch({ type: stateTypes.SET_STATE, payload: value })
        submitCalc({...stateContext, calculator:{...calculator, state: value}})
    }, [getCounties, dispatch, submitCalc, stateContext, calculator])

    const handleCountry = useCallback((e) => {
        const { value } = e.target

        dispatch({ type: stateTypes.SET_COUNTRY, payload: value })
        submitCalc({...stateContext, calculator:{...calculator, country: value}})
    }, [calculator, dispatch, stateContext, submitCalc])

    const handleAnalysisUnit = useCallback((e) => {
        const { value } = e.target

        dispatch({ type: stateTypes.SET_ANALYS_UNIT, payload: Number(value) })
        submitCalc({...stateContext, calculator:{...calculator, analysisUnit: Number(value)}})
    }, [calculator, dispatch, stateContext, submitCalc])

    const handleQtdAnalysis = useCallback((e) => {
        const { value } = e.target
        dispatch({ type: stateTypes.SET_QTD_ANALYS_UNIT, payload: { value, error: value === '' } })
    }, [dispatch])

    const handlePitDepth = useCallback((e) => {
        const { value } = e.target

        dispatch({ type: stateTypes.SET_PITDEPTH, payload: Number(value) })
        submitCalc({...stateContext, calculator:{ ...calculator, pitDepth: Number(value)}})
    }, [calculator, dispatch, stateContext, submitCalc])

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
        submitCalc({...stateContext, calculator:{...calculator, txPrevalence: Number(value)}})
    }, [calculator, dispatch, stateContext, submitCalc])

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
        <Grid fluid id="ignorePDF">
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
        <Col xs={12} lg={6}>
            <label>{calculatorForm.labels.extractionType}</label>
            <select name="valuationMethod" value={valuatioMethod} onChange={handleValuationMethod}>
                <option value={ALLUVIUM}>{calculatorForm.values.extractionType.openPit}</option>
                <option value={FERRY}>{calculatorForm.values.extractionType.boat}</option>
                <option value={PIT}>{calculatorForm.values.extractionType.pitMine}</option>
            </select>
        </Col>
        {
            knowRegion ? (
                <Col xs={12} lg={6}>
                    <label>uso de capela?</label>
                    <RadioBoxConditional state={retort} setState={handleRetort} />
                </Col>
            ) : <></>
        }
        <Col xs={12}>
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
                onBlur={() => updateCalc()}
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
                    onBlur={() => updateCalc()}
                    name="valor" placeholder="Digite a inflação neste formato: 10 ou 6,2" />
            </Col>
        </Row>
    </Grid>
    )
}


const MonetaryImpacts = () => {
    const {state} = useContext(AppContext);
    const {language, calculator, country_region, priceUSDtoBRL} = state
    const {  pitDepth } = calculator
    const {impacts} = language
    const history = useHistory();

    const isBrazil = country_region && country_region.country === countries_region[BRAZIL].country


    window.scrollTo(0,0)

    const valueTotal = state.calculator.totalValue

    const impactsValues = state.calculator.values

    const reducer = ((acc, current) => acc + current.value)
    const sumTotal = (item) => isBrazil && priceUSDtoBRL ? ToBRL(item.reduce(reducer, 0)*priceUSDtoBRL) : toUSD(item.reduce(reducer, 0))

    const dataDesforestation = impactsValues.filter(i => i.category === CATEGORY_DEFORESTATION)
    const dataSiltingRivers = impactsValues.filter(i => i.category === CATEGORY_SILTING_RIVERS)
    const dataMercury = impactsValues.filter(i => i.category === CATEGORY_MERCURY)

    const likeMining = calculator.valuatioMethod // FERRY, PIT or ALLUVION
    const valueLikeMining = calculator.qtdAnalysis.value // gold, hactare, months, years
    const typeValueLikeMining = calculator.analysisUnit // AMOUNT_GOLD / IMPACTED_AREA / YEARS_OF_MINING / MONTHS_OF_MINING

    const hiddenMenu = calculator.valuatioMethod === FERRY ? [impacts.menu.deforestation] : []

    const goldValue = Math.round(convertAllinGold(country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth))
    
    const goldPrice = getGoldValue.goldPrice() * goldValue
    const subtotalGoldPrice = isBrazil && priceUSDtoBRL ? goldPrice : goldPrice*priceUSDtoBRL
    const totalGoldPrice = isBrazil && priceUSDtoBRL ? ToBRL(goldPrice) : toUSD(goldPrice*priceUSDtoBRL)


    const allImpacts = {
        data: [
            {
                label: impacts.deforestation.headline,
                displayName: impacts.deforestation.headline,
                value: dataDesforestation.reduce(reducer, 0)
            },
            {
                label: impacts.siltingOfRivers.headline,
                displayName: impacts.siltingOfRivers.headline,
                value: dataSiltingRivers.reduce(reducer, 0)
            },
            {
                label: impacts.mercuryContamination.headline,
                displayName: impacts.mercuryContamination.headline,
                value: dataMercury.reduce(reducer, 0)
            },
            {
                label: `${goldValue} gramas de ouro`,
                displayName: `Valor de ${goldValue} gramas de ouro`,
                value: subtotalGoldPrice
            }
        ],
        total: sumTotal(impactsValues)
    }

    const handleDownloadPDF = useCallback(async () =>{
        const graphics_resume = document.getElementById('graphics_resume');
        const graphics_total = document.getElementById('graphics_total');
        const totalMonay = document.getElementById('totalMoney');
        const canvasGraphics_resume = await html2canvas(graphics_resume, { scale: 0.55 })
        const canvasGraphics_total = await html2canvas(graphics_total, { scale: 0.53 })
        const canvasTotalMoney = await html2canvas(totalMonay, { scale: 0.8 })
        
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today  = new Date();

        const date = today.toLocaleDateString(isBrazil ? "pt-BR" : "en-US", options)
        const footer = `© CSF All rights reserved | ${date}`

        const pdf = new jsPDF(
            {
                orientation: 'p',
                unit: 'mm',
                format: 'a4',
                putOnlyUsedFonts:true,
                floatPrecision: 16
               }
        );
        pdf.setFontSize(8)
        pdf.text(footer, 88, 287, { align: 'right' })
        pdf.text('https://calculadora.conservation-strategy.org', 146, 287, { align: 'left' })
        pdf.addImage(canvasTotalMoney.toDataURL('image/png'), 'JPEG', 7, 10);
        pdf.addImage(canvasGraphics_resume.toDataURL('image/png'), 'JPEG', 10, 70);
        pdf.addPage('a4', 'p')

        pdf.addImage(canvasGraphics_total.toDataURL('image/png'), 'JPEG', 7, 10);
        pdf.text(footer, 88, 287, { align: 'right' })
        pdf.text('https://calculadora.conservation-strategy.org', 146, 287, { align: 'left' })
        pdf.save("CSF-report.pdf");

    }, [isBrazil])
    

    const impactsDesforestation = {
        data: dataDesforestation,
        total: sumTotal(dataDesforestation)
    }
    const impactsSiltingRivers = {
        data: dataSiltingRivers,
        total: sumTotal(dataSiltingRivers)
    }
    const impactsMercury = {
        data: dataMercury,
        total: sumTotal(dataMercury)
    }

    let typeAnalysis;
    if(calculator.analysisUnit === IMPACTED_AREA) {
        typeAnalysis = language.calculatorForm.values.qtdAnalysisUnit.hactare
    }else if (calculator.analysisUnit === AMOUNT_GOLD) {
        typeAnalysis = language.calculatorForm.values.qtdAnalysisUnit.grams
    }else if (calculator.analysisUnit === YEARS_OF_MINING) {
        typeAnalysis = language.calculatorForm.values.qtdAnalysisUnit.years
    }else {
        typeAnalysis = language.calculatorForm.values.qtdAnalysisUnit.months
    }

    

    
    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={4} md={3}>
                        <HiddenPrint>
                            <MenuImpacts active={impacts.menu.monetaryImpacts} hidden={hiddenMenu} />
                        </HiddenPrint>
                    </Col>
                    
                    
                    <Col xs={12} sm={8} md={9} id="totalMoney">
                        <Headline>{impacts.monetaryImpacts.headline}</Headline>
                        <Row>
                            <Col xs={12} sm={6}>
                                <FormGroup>
                                    <Label>{impacts.monetaryImpacts.labels.finalValue}</Label>
                                    <Monetary>{valueTotal}</Monetary>
                                    <MonetaryType>{`
                                        ${impacts.monetaryImpacts.labels.typeText} ${calculator.qtdAnalysis.value} ${typeAnalysis.toLowerCase()}
                                        | Valor de ${totalGoldPrice} para ${goldValue} gramas de ouro`}</MonetaryType>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>

               <FormCalc />
               <div id="graphics_resume">
                <DataChart impact={allImpacts} headline={language.resume} hiddenMonetary />
               </div>
               <div id="graphics_total">
                    {
                        hiddenMenu.length === 0 ? <DataChart impact={impactsDesforestation} headline={impacts.deforestation.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} />
                        : null
                    }
                    <DataChart impact={impactsSiltingRivers} headline={impacts.siltingOfRivers.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} />
                    <DataChart impact={impactsMercury} headline={impacts.mercuryContamination.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} />
                </div>
                <HiddenSm>
                    <br /><br />
                    <Button variant="default" onClick={() => history.push('/moral-damages')}>Danos morais</Button>
                </HiddenSm>
                
                <ButtonFixed>
                    <Grid>
                        <Row between="sm" center="md">
                           
                                <Col md={3}>
                                    <HiddenXS>
                                        <Button variant="default" onClick={() => history.push('/moral-damages')}>Danos morais</Button>
                                    </HiddenXS>
                                </Col>
                            
                            <Col xs={6} md={3}>
                                <Button onClick={() => history.push('/')}>{impacts.buttons.newCalculation}</Button>
                            </Col>
                            <Col xs={6} md={3}>
                                <Button variant="secondary" onClick={handleDownloadPDF}>{impacts.buttons.printReports}</Button>
                            </Col>
                        </Row>
                    </Grid>
                </ButtonFixed>
            </Grid> 
        </Container>
    )
}

export default MonetaryImpacts