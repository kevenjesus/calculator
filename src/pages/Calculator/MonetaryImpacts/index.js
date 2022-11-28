import {  useCallback, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { ALLUVIUM, AMOUNT_GOLD, CATEGORY_DEFORESTATION, CATEGORY_MERCURY, CATEGORY_SILTING_RIVERS, FERRY, IMPACTED_AREA, NO, PIT, QTD_FERRY, YEARS_OF_MINING, YES } from 'pages/Calculator/Form/consts'
import { Container, Headline, ButtonFixed, HiddenPrint, HiddenXS, HiddenSm } from 'pages/Calculator/ImpactsStyles'
import { Monetary, MonetaryType, Label, FormGroup, Card, OverLay } from './style'
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
import { colors } from 'theme/colors'

import * as S from 'pages/Calculator/MercuryContamination/style'
import { ReactComponent as LoadingIcon } from 'assets/icons/loading-icon.svg'
import { Text } from 'pages/Calculator/ImpactsStyles'
import convertAllinHectare from 'utils/convertAllinHectare'
import cubicMeters from 'utils/cubicMeters'
import popSize100kmRadius from 'utils/popSize100kmRadius'
import fixedCalcultions from 'hooks/fixedCalculations'




export const DataChart = ({impact, headline, hiddenMonetary, txtTotalNonetary, text}) => {
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
                    {text && text}
                </Col>
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
        motorPower,
        valuatioMethod,
        retort,
        inflation,
        txPrevalence } = calculator
    const { calculatorForm, introduction } = language
    const alert = useAlert()

    const isBrazil = country_region && country_region.country === countries_region[BRAZIL].country

    const dataMotorPower = [
        {
            label: '25cv',
            value: 25
        },
        {
            label: '50cv',
            value: 50
        },
        {
            label: '75cv',
            value: 75
        },
        {
            label: '100cv',
            value: 100
        },
        {
            label: '125cv',
            value: 125
        },
        {
            label: '150cv',
            value: 150
        },
        {
            label: '175cv',
            value: 175
        },
        {
            label: '200cv',
            value: 200
        },
        {
            label: '225cv',
            value: 225
        },
        {
            label: '250cv',
            value: 250
        },
    ]

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
        submitCalc({...stateContext, calculator:{...calculator, state: uf, country: dataCountries[0].id, counties: dataCountries}})

    }, [dispatch, stateContext, submitCalc, calculator])

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
                label: language.calculatorForm.commons.yes,
                value: YES,
                checked: false
            },
            {
                name: 'retort',
                label: language.calculatorForm.commons.no,
                value: NO,
                checked: true
            },
        ]
        dispatch({type: stateTypes.SET_REGION_LIST, payload: dataRegion})
        dispatch({type: stateTypes.SET_RETORT, payload: dataRetort})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language, knowRegion])


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
    }, [getCounties, dispatch])

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

    const handleMotorPower = useCallback((e) => {
        const { value } = e.target
        dispatch({ type: stateTypes.SET_MOTOR_POWER, payload: Number(value) })
        submitCalc({...stateContext, calculator:{ ...calculator, motorPower: Number(value)}})
    }, [calculator, dispatch, stateContext, submitCalc])

    const handleValuationMethod = useCallback((e) => {
        const { value } = e.target
        const { analysisUnit } = calculator

        let analysUnitValue;

        if(analysisUnit !== AMOUNT_GOLD && Number(value) === FERRY) {
            analysUnitValue = QTD_FERRY
        }else if(analysisUnit !== AMOUNT_GOLD && Number(value) === PIT) {
            analysUnitValue = YEARS_OF_MINING
        }else if(analysisUnit !== AMOUNT_GOLD && Number(value) === ALLUVIUM) {
            analysUnitValue = IMPACTED_AREA
        }
        dispatch({ type: stateTypes.SET_VALUATION_METHOD, payload: Number(value) })
        dispatch({ type: stateTypes.SET_ANALYS_UNIT, payload: analysUnitValue })
        submitCalc({...stateContext, calculator:{ ...calculator, analysisUnit:analysUnitValue,  valuatioMethod: Number(value)}})


    }, [calculator, stateContext, submitCalc, dispatch])


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
            placeholder = calculatorForm.values.qtdAnalysisUnit.ferry
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
                                            <label>{language.district}</label>
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
                    <label>{language.calculatorForm.labels.retort}</label>
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
        <Col xs={valuatioMethod === ALLUVIUM || valuatioMethod === FERRY ? 6 : 12} lg={valuatioMethod === ALLUVIUM || valuatioMethod === FERRY ? 4 : 12}>
            <TextField
                label={placeholder}
                error={qtdAnalysis.error}
                type="number"
                value={qtdAnalysis.value}
                onChange={handleQtdAnalysis}
                onBlur={() => updateCalc()}
                name="valor" placeholder={placeholder} />
        </Col>

        <Conditional check={valuatioMethod === FERRY}>
                    
            <Col xs={6} lg={8}>
                <label>{calculatorForm.labels.motorPower}</label>
                <select name="motorPower" value={motorPower} onChange={handleMotorPower}>
                    {dataMotorPower.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
                </select>
            </Col>
        </Conditional>

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
                    <option value={0.29}>{calculatorForm.values.valueHypothesis.conservative}</option>
                    <option value={0.343}>{calculatorForm.values.valueHypothesis.precautionaryPrinciple}</option>
                </select>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <TextField
                    label={language.inflation}
                    type="number"
                    value={inflation}
                    onChange={handleInflation}
                    onBlur={() => updateCalc()}
                    name="valor" placeholder={language.inflation_placeholder} />
            </Col>
        </Row>
    </Grid>
    )
}


const MonetaryImpacts = () => {
    const [loading, setLoading] = useState(false)
    const {state} = useContext(AppContext);
    const {language, calculator, country_region, priceUSDtoBRL} = state
    const {  pitDepth, motorPower, knowRegion, country, counties, notMonetary } = calculator
    const {impacts} = language
    const history = useHistory();

    const isBrazil = country_region && country_region.country === countries_region[BRAZIL].country

    const { general } = fixedCalcultions(country_region)
    const { densityPopulationalRegionNorth2060 } = general



    const impactsValues = state.calculator.values

    const reducer = ((acc, current) => acc + current.value)
    const sumTotal = (item) => isBrazil && priceUSDtoBRL ? ToBRL(item.reduce(reducer, 0)) : toUSD(item.reduce(reducer, 0))

    const dataDesforestation = impactsValues.filter(i => i.category === CATEGORY_DEFORESTATION)
    const dataSiltingRivers = impactsValues.filter(i => i.category === CATEGORY_SILTING_RIVERS)
    const dataMercury = impactsValues.filter(i => i.category === CATEGORY_MERCURY)

    const likeMining = calculator.valuatioMethod // FERRY, PIT or ALLUVION
    const valueLikeMining = calculator.qtdAnalysis.value // gold, hactare, months, years
    const typeValueLikeMining = calculator.analysisUnit // AMOUNT_GOLD / IMPACTED_AREA / YEARS_OF_MINING / MONTHS_OF_MINING

    const hiddenMenu = calculator.valuatioMethod === FERRY ? [impacts.menu.deforestation] : []

    const goldValue = Math.round(convertAllinGold(country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth, motorPower))
    
    const goldPrice = getGoldValue.goldPrice() * goldValue

    const subValueTotalImpact = state.calculator.totalValue
    const valueTotalImpact = isBrazil ? ToBRL(subValueTotalImpact) : toUSD(subValueTotalImpact)

    const subTotalGoldPrice = isBrazil ? goldPrice*priceUSDtoBRL : goldPrice
    const totalGoldPrice = isBrazil ? ToBRL(subTotalGoldPrice) : toUSD(subTotalGoldPrice)

    
    const SubValueTotal = subValueTotalImpact+subTotalGoldPrice
    const valueTotal = isBrazil ? ToBRL(SubValueTotal) : toUSD(SubValueTotal)

    const goldLabel = language.goldImpact_graphic.replace("$grams", goldValue)
    const goldDisplayName = language.goldImpact_graphic_tooltip.replace("$grams", goldValue)

    const goldImpact = language.goldImpact.replace("$grams", goldValue)

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
                label: goldLabel,
                displayName: goldDisplayName,
                value: subTotalGoldPrice
            }
        ],
        total: sumTotal(impactsValues)
    }

    if(dataDesforestation.length === 0) {
        allImpacts.data.splice(0, 1)
    }


    const handleDownloadPDF = useCallback(async () =>{
        setLoading(true)
        const graphics_resume = document.getElementById('graphics_resume');
        const graphics_deforestation = document.getElementById('graphics_deforestation');
        const graphics_siltingRivers = document.getElementById('graphics_siltingRivers');
        const graphics_mercury = document.getElementById('graphics_mercury');
        const totalMonay = document.getElementById('totalMoney');
        const tablenotMonetary = document.getElementById('table-notMonetary');
        const headlineNotMonetary = document.getElementById('headline-notMonetary');
        const deforestationInfo = document.getElementById("deforestationInfo")
        const siltingOfRiversinfo = document.getElementById("siltingOfRiversinfo")
        const mercuryContaminationInfo = document.getElementById("mercuryContaminationInfo")
        
        if(hiddenMenu.length === 0) {
            deforestationInfo.style.display="block"
        }
        
        siltingOfRiversinfo.style.display="block"
        mercuryContaminationInfo.style.display="block"
    

        tablenotMonetary.firstElementChild.style.maxWidth = '75%';
        headlineNotMonetary.style.fontSize = '23px';
        
        const canvasGraphics_resume = await html2canvas(graphics_resume, { scale: 0.55 })
        const canvasGraphics_deforestation = await html2canvas(graphics_deforestation, { scale: 0.53 })
        
        const canvasGraphics_siltingRivers = await html2canvas(graphics_siltingRivers, { scale: 0.53 })
        const canvasGraphics_mercury = await html2canvas(graphics_mercury, { scale: 0.53 })
        const canvasTotalMoney = await html2canvas(totalMonay, {scale: 0.8})
        const canvasToNotMonetary = await html2canvas(tablenotMonetary, {scale: 0.7})
        
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today  = new Date();

        const date = today.toLocaleDateString(isBrazil ? "pt-BR" : "en-US", options)
        const footer = `© CSF All rights reserved | ${date}`
        tablenotMonetary.firstElementChild.removeAttribute("style")
        headlineNotMonetary.removeAttribute("style")


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
        pdf.addImage(canvasGraphics_resume.toDataURL('image/png'), 'JPEG', 10, 55);
        
        pdf.addPage('a4', 'p')
        if(hiddenMenu.length === 0) {
            pdf.addImage(canvasGraphics_deforestation.toDataURL('image/png'), 'JPEG', 7, 10);
            pdf.addImage(canvasGraphics_siltingRivers.toDataURL('image/png'), 'JPEG', 7, 135);
            pdf.text(footer, 88, 287, { align: 'right' })
            pdf.text('https://calculadora.conservation-strategy.org', 146, 287, { align: 'left' })

            pdf.addPage('a4', 'p')
            pdf.addImage(canvasGraphics_mercury.toDataURL('image/png'), 'JPEG', 7, 10);
            pdf.text(footer, 88, 287, { align: 'right' })
            pdf.text('https://calculadora.conservation-strategy.org', 146, 287, { align: 'left' })
        }else {
            pdf.addImage(canvasGraphics_siltingRivers.toDataURL('image/png'), 'JPEG', 7, 10);
            pdf.addImage(canvasGraphics_mercury.toDataURL('image/png'), 'JPEG', 7, 135);
            pdf.text(footer, 88, 287, { align: 'right' })
            pdf.text('https://calculadora.conservation-strategy.org', 146, 287, { align: 'left' })
            
        }
        
        

        pdf.addPage('a4', 'p')
        pdf.addImage(canvasToNotMonetary.toDataURL('image/png'), 'JPEG', 7, 10);
        pdf.text(footer, 88, 287, { align: 'right' })
        pdf.text('https://calculadora.conservation-strategy.org', 146, 287, { align: 'left' })
        pdf.save("CSF-report.pdf");
        setTimeout(() => {
            if(hiddenMenu.length === 0) {
                deforestationInfo.style.display="none"
            }
            siltingOfRiversinfo.style.display="none"
            mercuryContaminationInfo.style.display="none"
            setLoading(false)
        }, 1000)

    }, [isBrazil, hiddenMenu.length])
    

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
        typeAnalysis = language.calculatorForm.values.qtdAnalysisUnit.ferry
    }

    const { value: hectare } = convertAllinHectare(country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth)
    const hectareValue = Math.round(hectare * 100) / 100
    const goldValueText = Math.round(convertAllinGold(country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth))
    const currentCountry = counties.find(c => c.id === Number(country))
    const volumeM3 = cubicMeters(country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth, motorPower)
    const popDensity2060 = knowRegion ? currentCountry.popDensity2060  : densityPopulationalRegionNorth2060;
    const people = Math.round(popSize100kmRadius(knowRegion, popDensity2060, country_region))

    const deforestationText1 = impacts.deforestation.paragraphy_01.replace("$grams", goldValueText).replace("$hectare", hectareValue)
    const deforestationText2 = impacts.deforestation.paragraphy_02.replace("$hectare", hectareValue)

    const siltingOfRiversText1 = impacts.siltingOfRivers.paragraphy_01.replace("$grams", goldValue).replace("$volumeM3", volumeM3)
    const siltingOfRiversText2 = impacts.siltingOfRivers.paragraphy_02.replace("$volumeM3", volumeM3)

    
    const mercuryContaminationText = impacts.mercuryContamination.paragraphy_01.replace("$people", people.toLocaleString('pt-BR'))

    const customTextStyle = {fontSize: '24px', lineHeight: '45px'}
    const customWrap = {width: '100%', display: 'none'}
    
    const deforestationInfo =  <div id="deforestationInfo" style={customWrap}>
        <Text style={customTextStyle}>
            <div dangerouslySetInnerHTML={{__html: deforestationText1 }} />
        </Text>
        <Text style={customTextStyle}>
            <div dangerouslySetInnerHTML={{__html: deforestationText2 }} />
        </Text>
    </div>

    const siltingOfRiversinfo =  <div id="siltingOfRiversinfo" style={customWrap}>
        <Text style={customTextStyle}>
            <div dangerouslySetInnerHTML={{__html: siltingOfRiversText1 }} />
        </Text>
        <Text style={customTextStyle}>
            <div dangerouslySetInnerHTML={{__html: siltingOfRiversText2 }} />
        </Text>
    </div>

    const mercuryContaminationInfo =  <div id="mercuryContaminationInfo" style={customWrap}>
        <Text style={customTextStyle}>
            <div dangerouslySetInnerHTML={{__html: mercuryContaminationText }} />
        </Text>
    </div>

    
    return (
        <Container>
            
            {loading && (
                <OverLay>
                    <LoadingIcon style={{margin: 0}} width="40" height="40" />
                    <Text>{language.loading.pdfText}</Text>
                </OverLay>
            )}
            
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
                            <Col xs={12} sm={4}>
                                <FormGroup>
                                    <Label>{impacts.monetaryImpacts.labels.totalImpacts}</Label>
                                    <Monetary style={{color: colors.secondary}}>{valueTotalImpact}</Monetary>
                                    <MonetaryType>{`
                                        ${impacts.monetaryImpacts.labels.typeText} ${calculator.qtdAnalysis.value} ${typeAnalysis.toLowerCase()}`}</MonetaryType>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={4}>
                                <FormGroup>
                                    <Label>{impacts.monetaryImpacts.labels.totalGold}</Label>
                                    <Monetary style={{color: '#8b8b28'}}>{totalGoldPrice}</Monetary>
                                    <MonetaryType>{goldImpact}</MonetaryType>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={4}>
                                <FormGroup>
                                    <Label>{impacts.monetaryImpacts.labels.finalValue}</Label>
                                    <Monetary>{valueTotal}</Monetary>
                                    <MonetaryType>{language.monetaryimpact_text}</MonetaryType>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
               <FormCalc />
               

               <div id="graphics_resume">
                <DataChart impact={allImpacts} headline={language.resume} hiddenMonetary />
               </div>
               <div id="graphics_deforestation">
                    {
                        hiddenMenu.length === 0 ? (<DataChart impact={impactsDesforestation} headline={impacts.deforestation.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} text={deforestationInfo} />)
                        : null
                    }
                </div>
                <div id="graphics_siltingRivers">
                    <DataChart impact={impactsSiltingRivers} headline={impacts.siltingOfRivers.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} text={siltingOfRiversinfo} />
                </div>
                <div id="graphics_mercury">
                    <DataChart impact={impactsMercury} headline={impacts.mercuryContamination.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} text={mercuryContaminationInfo} />
                </div>
                <br />
                <br />
               <Row id="table-notMonetary">
                    <Col xs={12}>
                        <h2 id="headline-notMonetary">{language.not_monetary_headline}</h2>
                        <br />
                        <S.TableResponsive>
                        <S.Table>
                            <thead>
                                <tr>
                                    <S.Th width="700px">{language.not_monetary_type}</S.Th>
                                    <S.Th>{language.not_monetary_results}</S.Th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    notMonetary.map(impact => (
                                        <tr>
                                            <S.Td>{impact.label}</S.Td>
                                            <S.Td>{`${impact.value} ${impact.measure}`}</S.Td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </S.Table>
                        </S.TableResponsive>
                    </Col>
                </Row>
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