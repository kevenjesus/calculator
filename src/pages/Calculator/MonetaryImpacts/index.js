import {  useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { CATEGORY_DEFORESTATION, CATEGORY_MERCURY, CATEGORY_SILTING_RIVERS } from 'pages/Calculator/Form/consts'
import { Container, Menu, MenuItem, Headline, ButtonFixed } from 'pages/Calculator/ImpactsStyles'
import { Monetary, MonetaryType, Label, FormGroup, Card } from './style'
import Chart from 'components/Chart'
import { AppContext } from 'utils/AppContext'
import ToBRL from 'utils/toBRL'

// const dataimpactCategories = [
//     {
//         name: 'impactCategory',
//         label: 'Decapeamento / desmatamento',
//         value: DEFORESTATION,
//         checked: true
//     },
//     {
//         name: 'impactCategory',
//         label: 'Impactos do mercúrio',
//         value: MERCURY_IMPACTED,
//         checked: true
//     },
//     {
//         name: 'impactCategory',
//         label: 'Escavação / Abertura de cava',
//         value: PIT_DEPTH,
//         checked: true
//     },
// ]

// const dataImpactedVisualization = [
//     {
//         name: 'impactedVisualization',
//         label: 'Impacto 01',
//         value: 1,
//         checked: true
//     },
//     {
//         name: 'impactedVisualization',
//         label: 'Impacto 01',
//         value: 2,
//         checked: false
//     },
//     {
//         name: 'impactedVisualization',
//         label: 'Impacto 01',
//         value: 3,
//         checked: false
//     },
//     {
//         name: 'impactedVisualization',
//         label: 'Impacto 04',
//         value: 4,
//         checked: true
//     },
//     {
//         name: 'impactedVisualization',
//         label: 'Impacto 05',
//         value: 5,
//         checked: true
//     },
//     {
//         name: 'impactedVisualization',
//         label: 'Impacto 6',
//         value: 6,
//         checked: true
//     },
// ]

// const CheckboxConditional = ({state, setState}) => {
//     return (
//         <>
//             {
//                 state.map(({name, label, value, checked}) => (
//                     <Checkbox key={value} name={name} checked={checked} value={value} onChange={setState}>
//                         {label}
//                     </Checkbox>
//                 ))
//             }
//         </>
//     )
// }

const DataChart = ({impact, headline, hiddenMonetary, txtTotalNonetary}) => {
    const { total, data } = impact
    return (
        <Card>
            <Row>
                <Col xs={8}>
                    <h2>{headline}</h2>
                </Col>
                {!hiddenMonetary ?
                <Col xs={4} style={{textAlign: 'right'}}>
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
    // const [impactedCategories, setImpactedCategories] = useState(dataimpactCategories)
    // const [impactedVisuaization, setImpactedVisualization] = useState(dataImpactedVisualization)
    const {state} = useContext(AppContext);
    const {language} = state
    const {impacts} = language
    const history = useHistory();

    // const handleImpactedCategories = useCallback((e) => {
    //     const { value } = e.target;
    //     const impactedCategoriesUpdate = impactedCategories.map(r => {
    //         if(r.value === Number(value)) {
    //             r.checked = !r.checked
    //         }
    //         return r;
    //     })
    //     setImpactedCategories(impactedCategoriesUpdate);
    // }, [setImpactedCategories, impactedCategories])

    // const handleImpactedVisualization = useCallback((e) => {
    //     const { value } = e.target;
    //     const impactedVisualizationUpdate = impactedVisuaization.map(r => {
    //         if(r.value === Number(value)) {
    //             r.checked = !r.checked
    //         }
    //         return r;
    //     })
    //     setImpactedVisualization(impactedVisualizationUpdate);
    // }, [setImpactedVisualization, impactedVisuaization])

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

    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={4} md={3}>
                    <Menu>
                            <Link to="/impacts/deforestation">
                                <MenuItem>{impacts.menu.deforestation}</MenuItem>
                            </Link>
                            <Link to="/impacts/silting-of-rivers">
                                <MenuItem>{impacts.menu.siltingOfRivers}</MenuItem>
                            </Link>
                            <Link to="/impacts/mercury-contamination">
                                <MenuItem>{impacts.menu.mercuryContamination}</MenuItem>
                            </Link>
                            <MenuItem last active>{impacts.menu.monetaryImpacts}</MenuItem>
                        </Menu>
                    </Col>
                    <Col xs={12} sm={8} md={9}>
                        <Headline>{impacts.monetaryImpacts.headline}</Headline>
                        <Row>
                        
                            <Col xs={12} sm={6}>
                                <FormGroup>
                                    <Label>{impacts.monetaryImpacts.labels.finalValue}</Label>
                                    <Monetary>{valueTotal}</Monetary>
                                    <MonetaryType>{`${impacts.monetaryImpacts.labels.typeText} 1000 ${impacts.monetaryImpacts.labels.typeGold}`}</MonetaryType>
                                </FormGroup>
                            </Col>
                          
                        </Row>
                    </Col>
                </Row>
           

               <DataChart impact={allImpacts} headline="Resumo" hiddenMonetary />
               <DataChart impact={impactsDesforestation} headline={impacts.deforestation.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} />
               <DataChart impact={impactsSiltingRivers} headline={impacts.siltingOfRivers.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} />
               <DataChart impact={impactsMercury} headline={impacts.mercuryContamination.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} />

                
                <ButtonFixed>
                    <Grid>
                        <Row between="sm" start="md">
                            <Col xs={6} mdOffset={3} md={3}>
                                <Button onClick={() => history.push('/calculator')}>{impacts.buttons.newCalculation}</Button>
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