import {  useCallback, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { AMOUNT_GOLD, CATEGORY_DEFORESTATION, CATEGORY_MERCURY, CATEGORY_SILTING_RIVERS, FERRY, IMPACTED_AREA, YEARS_OF_MINING } from 'pages/Calculator/Form/consts'
import { Container, Headline, ButtonFixed, HiddenPrint } from 'pages/Calculator/ImpactsStyles'
import { Monetary, MonetaryType, Label, FormGroup, Card } from './style'
import Chart from 'components/Chart'
import { AppContext, stateTypes } from 'utils/AppContext'
import ToBRL from 'utils/toBRL'
import MenuImpacts from '../Menu'
import calcResults from '../Form/calcResults'


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


const MonetaryImpacts = () => {
    const {state, dispatch} = useContext(AppContext);
    const {language, calculator} = state
    const { calculatorForm } = language
    const { txPrevalence } = calculator
    const {impacts} = language
    const history = useHistory();

    window.scrollTo(0,0)

    const valueTotal = state.calculator.totalValue
    const impactsValues = state.calculator.values

    const reducer = ((acc, current) => acc + current.value)
    const sumTotal = (item) => ToBRL(item.reduce(reducer, 0))

    const dataDesforestation = impactsValues.filter(i => i.category === CATEGORY_DEFORESTATION)
    const dataSiltingRivers = impactsValues.filter(i => i.category === CATEGORY_SILTING_RIVERS)
    const dataMercury = impactsValues.filter(i => i.category === CATEGORY_MERCURY)


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
        ],
        total: sumTotal(impactsValues)
    }

    const handleTxPrevalance = useCallback((e) => {
        const { value } = e.target
        dispatch({ type: stateTypes.SET_TX_PREVALENCE, payload: Number(value) })
    }, [dispatch])

    useEffect(() => {
    
        calcResults(state, dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [txPrevalence])
    

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

    const hiddenMenu = calculator.valuatioMethod === FERRY ? [impacts.menu.deforestation] : []
    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={4} md={3}>
                        <HiddenPrint>
                            <MenuImpacts active={impacts.menu.monetaryImpacts} hidden={hiddenMenu} />
                        </HiddenPrint>
                    </Col>
                    
                    
                    <Col xs={12} sm={8} md={9}>
                        <Headline>{impacts.monetaryImpacts.headline}</Headline>
                        <Row>
                            <Col xs={12} sm={6}>
                                <FormGroup>
                                    <Label>{impacts.monetaryImpacts.labels.finalValue}</Label>
                                    <Monetary>{valueTotal}</Monetary>
                                    <MonetaryType>{`${impacts.monetaryImpacts.labels.typeText} ${calculator.qtdAnalysis.value} ${typeAnalysis.toLowerCase()}`}</MonetaryType>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={6}>
                                <label>{calculatorForm.labels.valueHypothesis}</label>
                                <select name="txPrevalencia" value={txPrevalence} onChange={handleTxPrevalance}>
                                    <option value="0.29">{calculatorForm.values.valueHypothesis.conservative}</option>
                                    <option value="0.343">{calculatorForm.values.valueHypothesis.precautionaryPrinciple}</option>
                                </select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
           

               <DataChart impact={allImpacts} headline={language.resume} hiddenMonetary />
               {
                   !hiddenMenu && <DataChart impact={impactsDesforestation} headline={impacts.deforestation.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} />
               }
               
               <DataChart impact={impactsSiltingRivers} headline={impacts.siltingOfRivers.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} />
               <DataChart impact={impactsMercury} headline={impacts.mercuryContamination.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} />

                
                <ButtonFixed>
                    <Grid>
                        <Row between="sm" start="md">
                            <Col xs={6} mdOffset={3} md={3}>
                                <Button onClick={() => history.push('/')}>{impacts.buttons.newCalculation}</Button>
                            </Col>
                            <Col xs={6} md={3}>
                                <Button variant="secondary" onClick={() => window.print()}>{impacts.buttons.printReports}</Button>
                            </Col>
                        </Row>
                    </Grid>
                </ButtonFixed>
            </Grid> 
        </Container>
    )
}

export default MonetaryImpacts