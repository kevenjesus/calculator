import { useEffect, useCallback, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button, TextField } from 'theme'
import { Container } from './style'
import { ButtonFixed } from 'pages/Calculator/ImpactsStyles'
import { YES, IMPACTED_AREA, AMOUNT_GOLD, ALLUVIUM, FERRY, PIT, CATEGORY_DEFORESTATION, CATEGORY_MERCURY, CATEGORY_SILTING_RIVERS } from './consts'
import { AppContext, stateTypes } from 'utils/AppContext'
import Conditional from 'components/Conditional'
import RadioBoxConditional from 'components/RadioBoxConditional'
import normDist from 'utils/normDist'
import mockStates from 'mocks/state.json'
import mockCountries from 'mocks/countries.json'
import mockContry from 'mocks/country.json'
import hectareToGold from 'utils/hactareToGold'
import goldToHecatere from 'utils/GoldToHectare'
import bioprospecting from './calculations/bioprospeccao'
import carbon from './calculations/carbon'
import woodAndNonWoodProducts from './calculations/woodAndNonWoodProducts'
import recreation from './calculations/recreation'
import culturedAndSpecies from './calculations/culturedAndSpecies'
import cavaGroundingCostAuFertile from './calculations/cavaGroundingCostAuFertile'
import cavaGroundingCostHaFertile from './calculations/cavaGroundingCostHaFertile'
import recoveryOfTopsoil from './calculations/recoverOfTopsoil'
import cavaGroundingCostAuNorm from './calculations/cavaGroundingCostAuNorm'
import dredgingAndRiverSediments from './calculations/dredgingAndRiverSediments'
import erosionSiltingUp from './calculations/erosionSiltingUp'
import neuroSymptomsGarimpeiro from './calculations/neuroSymptomsGarimpeiro'
import lossQI from './calculations/lossQI'


function Form() {
    const { state: stateContext, dispatch } = useContext(AppContext)
    const { calculator, language } = stateContext
    const {
        regionList,
        knowRegion,
        stateList,
        state,
        counties,
        country,
        analysisUnit,
        qtdAnalysis,
        pitDepth,
        valuatioMethod,
        txPrevalence } = calculator
    const { calculatorForm } = language
    const history = useHistory()

    const dataPitDepth = [
        {
            label: '2,5 ' + calculatorForm.values.pitDepth.meters + '',
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
                    countries.densidadePop2010 = country.densidadePop2010
                    countries.densidadePop2060 = country.densidadePop2060
                    countries.popUrbMunicipio = country.PopUrbMunicipio
                    countries.popRuralMunicipio = country.PopRuralMunicipio
                    countries.distanciaGarimpoCentro = country.Distancia_Garimpo_Centro
                    countries.especies = country.Especies_por_Municipio
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


    const handlePitDepth = useCallback((e) => {
        const { value } = e.target
        dispatch({ type: stateTypes.SET_PITDEPTH, payload: Number(value) })
    }, [dispatch])

    const handleValuationMethod = useCallback((e) => {
        const { value } = e.target
        dispatch({ type: stateTypes.SET_VALUATION_METHOD, payload: Number(value) })
    }, [dispatch])

    const handleTxPrevalance = useCallback((e) => {
        const { value } = e.target
        dispatch({ type: stateTypes.SET_TX_PREVALENCE, payload: Number(value) })
    }, [dispatch])

    const checkFormIsInvalid = useCallback(() => {
        if (qtdAnalysis.value === '') {
            dispatch({ type: stateTypes.SET_QTD_ANALYS_UNIT, payload: { ...qtdAnalysis, error: true } })
            return true
        }
        return false
    }, [dispatch, qtdAnalysis])


    const submitCalc = () => {
        const impacts = []
        const hectareValue = calculator.analysisUnit === AMOUNT_GOLD ? goldToHecatere(Number(qtdAnalysis.value), pitDepth) : Number(qtdAnalysis.value)
        const goldValue = calculator.analysisUnit === IMPACTED_AREA ? hectareToGold(Number(qtdAnalysis.value), pitDepth) : Number(qtdAnalysis.value)
        const currentCountry = counties.find(c => c.id === Number(country))

        const totalBio = bioprospecting(hectareValue, txPrevalence)
        impacts.push({ label: 'BioProspecção', displayName: 'BioProspecção', category: CATEGORY_DEFORESTATION, value: totalBio })

        const totalCarbon = carbon(hectareValue)
        impacts.push({ label: 'Carbono', displayName: 'Carbono', category: CATEGORY_DEFORESTATION, value: totalCarbon })

        const totalPMNM = woodAndNonWoodProducts(hectareValue)
        impacts.push({ label: 'PMNM', displayName: 'Produtos não-madeireiros e madeireiros', category: CATEGORY_DEFORESTATION, value: totalPMNM })


        const especie = currentCountry.especies <= 0 ? state.especie : currentCountry.especies
        

        const totalRecreation = recreation(hectareValue, currentCountry.densidadePop2010, especie)
        impacts.push({ label: 'Recreação', displayName: 'Recreação', category: CATEGORY_DEFORESTATION, value: totalRecreation })

        const totalCulturedAndSpecies = culturedAndSpecies(hectareValue, currentCountry.densidadePop2010, especie)
        impacts.push({ label: 'Cultural/Espécies', displayName: 'Cultural / Espécies', category: CATEGORY_DEFORESTATION, value: totalCulturedAndSpecies })

        const totalCavaGroundingCostAuFertile = cavaGroundingCostAuFertile(hectareValue, currentCountry.distanciaGarimpoCentro)
        const totalCavaGroundingCostAuNorm = cavaGroundingCostAuNorm(hectareValue, pitDepth, currentCountry.distanciaGarimpoCentro)
        impacts.push({ label: 'Aterramento de cava', displayName: 'Aterramento de cava', category: CATEGORY_SILTING_RIVERS, value: (totalCavaGroundingCostAuFertile+totalCavaGroundingCostAuNorm) })


        const totalRecoveryOfTopsoil = recoveryOfTopsoil(hectareValue, txPrevalence, currentCountry.distanciaGarimpoCentro)
        impacts.push({ label: 'Recuperação do solo', displayName: 'Recuperação da camada superficial do solo', category: CATEGORY_SILTING_RIVERS, value: totalRecoveryOfTopsoil })

        const totalDredgingAndRiverSediments = dredgingAndRiverSediments(hectareValue, pitDepth, currentCountry.distanciaGarimpoCentro)
        impacts.push({ label: 'Dragagem no rio', displayName: 'Dragagem de sedimentos no rio', category: CATEGORY_SILTING_RIVERS, value: totalDredgingAndRiverSediments })

        const totalErosionSiltingUp = erosionSiltingUp(hectareValue, txPrevalence)
        //impacts.push({ label: 'Erosão/Assoreamento', displayName: 'Erosão/Assoreamento', category: CATEGORY_SILTING_RIVERS, value: totalErosionSiltingUp })

        const totalNeuroSymptomsGarimpeiro = neuroSymptomsGarimpeiro(goldValue, txPrevalence)
        impacts.push({ label: 'Sintomas neuropsicológicos', displayName: 'Sintomas neuropsicológicos em garimpeiros', category: CATEGORY_MERCURY, value: totalNeuroSymptomsGarimpeiro })


        const totalLossQI = lossQI(goldValue, currentCountry.popRuralMunicipio, currentCountry.popUrbMunicipio, txPrevalence)
        impacts.push({ label: 'Perda de Qi em Fetos', displayName: 'Perda de Qi em Fetos', category: CATEGORY_MERCURY, value: totalLossQI })


        const reducer = (accum, obj) => accum + obj.value;
        const totalValue = impacts.reduce(reducer, 0)



        dispatch({ type: stateTypes.ADD_VALUE, payload: impacts })
        dispatch({ type: stateTypes.CHANGE_TOTALVALUE, payload: totalValue.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }) })
        history.push('/loading')
    }

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
                        <Col xs={12} sm={6}>
                            <label>{calculatorForm.labels.state}</label>
                            <select name="state" value={state} onChange={handleState}>
                                {stateList.map(({ sigla, id }) => (
                                    <option key={id} value={id}>{sigla}</option>
                                ))}
                            </select>
                        </Col>
                        <Col xs={12} sm={6}>
                            <label>{calculatorForm.labels.country}</label>
                            <select name="country" value={country} onChange={handleCountry}>
                                {counties.map(({ nome, id }) => (
                                    <option key={id} value={id}>{nome}</option>
                                ))}
                            </select>
                        </Col>
                    </Row>
                </Conditional>
                <Row>
                    <Col xs={6} sm={9}>
                        <label>{calculatorForm.labels.analysisUnit}</label>
                        <select name="analysisUnit" value={calculator.analysisUnit} onChange={handleAnalysisUnit}>
                            <option value={IMPACTED_AREA}>{calculatorForm.values.analysisUnit.impactedArea}</option>
                            <option value={AMOUNT_GOLD}>{calculatorForm.values.analysisUnit.amountOfGold}</option>
                        </select>
                    </Col>
                    <Col xs={6} sm={3}>
                        <TextField
                            label="Valor"
                            error={qtdAnalysis.error}
                            type="number"
                            value={qtdAnalysis.value}
                            onChange={handleQtdAnalysis}
                            name="valor" placeholder={analysisUnit === IMPACTED_AREA ? calculatorForm.values.qtdAnalysisUnit.hactare : calculatorForm.values.qtdAnalysisUnit.grams} />
                    </Col>
                </Row>
                <Row>
                    <Conditional check={knowRegion}>
                        <Col xs={12} sm={6}>
                            <label>{calculatorForm.labels.pitDepth}</label>
                            <select name="pitdepth" value={pitDepth} onChange={handlePitDepth}>
                                {dataPitDepth.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
                            </select>
                        </Col>
                    </Conditional>
                    <Col xs={12} sm={!knowRegion ? 6 : 6}>
                        <label>{calculatorForm.labels.extractionType}</label>
                        <select name="valuationMethod" value={valuatioMethod} onChange={handleValuationMethod}>
                            <option value={ALLUVIUM}>{calculatorForm.values.extractionType.openPit}</option>
                            <option value={FERRY}>{calculatorForm.values.extractionType.boat}</option>
                            <option value={PIT}>{calculatorForm.values.extractionType.pitMine}</option>
                        </select>
                    </Col>
                    <Col xs={12} sm={!knowRegion ? 6 : 12}>
                        <label>{calculatorForm.labels.valueHypothesis}</label>
                        <select name="txPrevalencia" value={txPrevalence} onChange={handleTxPrevalance}>
                            <option value="0.29">{calculatorForm.values.valueHypothesis.conservative}</option>
                            <option value="0.343">{calculatorForm.values.valueHypothesis.precautionaryPrinciple}</option>
                        </select>
                    </Col>
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