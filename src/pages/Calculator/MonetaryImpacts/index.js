import { useState, useCallback, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Checkbox } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { DEFORESTATION, MERCURY_IMPACTED, PIT_DEPTH } from 'pages/Calculator/Form/consts'
import { Container, Menu, MenuItem, Headline, ButtonFixed, HiddenSm } from 'pages/Calculator/ImpactsStyles'
import { Monetary, MonetaryType, Label, FormGroup } from './style'
import Alert from 'components/Alert'
import Chart from 'components/Chart'
import { AppContext } from 'utils/AppContext'

const dataimpactCategories = [
    {
        name: 'impactCategory',
        label: 'Decapeamento / desmatamento',
        value: DEFORESTATION,
        checked: true
    },
    {
        name: 'impactCategory',
        label: 'Impactos do mercúrio',
        value: MERCURY_IMPACTED,
        checked: true
    },
    {
        name: 'impactCategory',
        label: 'Escavação / Abertura de cava',
        value: PIT_DEPTH,
        checked: true
    },
]

const dataImpactedVisualization = [
    {
        name: 'impactedVisualization',
        label: 'Impacto 01',
        value: 1,
        checked: true
    },
    {
        name: 'impactedVisualization',
        label: 'Impacto 01',
        value: 2,
        checked: false
    },
    {
        name: 'impactedVisualization',
        label: 'Impacto 01',
        value: 3,
        checked: false
    },
    {
        name: 'impactedVisualization',
        label: 'Impacto 04',
        value: 4,
        checked: true
    },
    {
        name: 'impactedVisualization',
        label: 'Impacto 05',
        value: 5,
        checked: true
    },
    {
        name: 'impactedVisualization',
        label: 'Impacto 6',
        value: 6,
        checked: true
    },
]

const CheckboxConditional = ({state, setState}) => {
    return (
        <>
            {
                state.map(({name, label, value, checked}) => (
                    <Checkbox key={value} name={name} checked={checked} value={value} onChange={setState}>
                        {label}
                    </Checkbox>
                ))
            }
        </>
    )
}


const MonetaryImpacts = () => {
    const [impactedCategories, setImpactedCategories] = useState(dataimpactCategories)
    const [impactedVisuaization, setImpactedVisualization] = useState(dataImpactedVisualization)
    const {state} = useContext(AppContext);
    const history = useHistory();

    const handleImpactedCategories = useCallback((e) => {
        const { value } = e.target;
        const impactedCategoriesUpdate = impactedCategories.map(r => {
            if(r.value === Number(value)) {
                r.checked = !r.checked
            }
            return r;
        })
        setImpactedCategories(impactedCategoriesUpdate);
    }, [setImpactedCategories, impactedCategories])

    const handleImpactedVisualization = useCallback((e) => {
        const { value } = e.target;
        const impactedVisualizationUpdate = impactedVisuaization.map(r => {
            if(r.value === Number(value)) {
                r.checked = !r.checked
            }
            return r;
        })
        setImpactedVisualization(impactedVisualizationUpdate);
    }, [setImpactedVisualization, impactedVisuaization])

    window.scrollTo(0,0)

    const valueTotal = state.calculator.totalValue

    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={4} md={3}>
                        <Menu>
                            <Link to="/impacts/deforestation">
                                <MenuItem>Desmatamento</MenuItem>
                            </Link>
                            <Link to="/impacts/silting-of-rivers">
                                <MenuItem>Assoreamento dos rios</MenuItem>
                            </Link>
                            <Link to="/impacts/mercury-contamination">
                                <MenuItem>Contaminação por mercúrio</MenuItem>
                            </Link>
                            <MenuItem active last>Impactos monetários</MenuItem>
                        </Menu>
                    </Col>
                    <Col xs={12} sm={8} md={9}>
                        <Headline>Impactos monetários</Headline>
                        <Row>
                        
                            <Col xs={12} sm={6}>
                                <FormGroup>
                                    <Label>Valor total monetário</Label>
                                    <Monetary>{valueTotal}</Monetary>
                                    <MonetaryType>*Por 1000 gramas de ouro</MonetaryType>
                                </FormGroup>
                            </Col>
                            
                            <Col xs={12}>
                                <Label>Categorias de impacto</Label>
                                <CheckboxConditional state={impactedCategories} setState={handleImpactedCategories} />
                            </Col>
                            <HiddenSm>
                                <Col xs={12}>
                                    <Label>Visualização de impactos</Label>
                                    <CheckboxConditional state={impactedVisuaization} setState={handleImpactedVisualization} />
                                </Col>
                            </HiddenSm>
                        </Row>
                        <HiddenSm>
                            <Alert>
                                É possivel apenas visualizar 4 impactos por vez no smartphone.
                            </Alert>
                        </HiddenSm>
                    </Col>
                </Row>
                <Chart data={state.calculator.values} />
                
                <ButtonFixed>
                    <Grid>
                        <Row between="sm" start="md">
                            <Col xs={6} mdOffset={3} md={3}>
                                <Button onClick={() => history.push('/calculator')}>fazer novo calculo</Button>
                            </Col>
                            <Col xs={6} md={3}>
                                <Button variant="secondary" onClick={() => window.print()}>imprimir relatórios</Button>
                            </Col>
                        </Row>
                    </Grid>
                </ButtonFixed>
            </Grid> 
        </Container>
    )
}

export default MonetaryImpacts