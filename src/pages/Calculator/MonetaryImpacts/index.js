import { useState, useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Checkbox } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { OPPORTUNITY_COST, REPLACEMENT_COST_OF_AREA_RECOVERY, DEFORESTATION, MERCURY_IMPACTED, PIT_DEPTH } from 'pages/Calculator/Form/consts'
import { Container, Menu, MenuItem, Headline, ButtonFixed, HiddenSm } from 'pages/Calculator/ImpactsStyles'
import { Monetary, MonetaryType, Label, FormGroup } from './style'
import Alert from 'components/Alert'
import Chart from 'components/Chart'

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
        checked: false
    },
    {
        name: 'impactCategory',
        label: 'Escavação / Abertura de cava',
        value: PIT_DEPTH,
        checked: false
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
    const [valuatioMethod, setValuationMethod] = useState(OPPORTUNITY_COST)
    const [impactedCategories, setImpactedCategories] = useState(dataimpactCategories)
    const [impactedVisuaization, setImpactedVisualization] = useState(dataImpactedVisualization)
    const history = useHistory();
    const handleValuationMethod = useCallback((e) => {
        const { value } = e.target;
        setValuationMethod(Number(value))
    }, [setValuationMethod])

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

    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={4}>
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
                    <Col xs={12} sm={8}>
                        <Headline>Impactos monetários</Headline>
                        <Row>
                            <Col xs={12} sm={6}>
                                <FormGroup>
                                    <Label>Método de valoração</Label>
                                    <select name="valuationMethod" value={valuatioMethod} onChange={handleValuationMethod}>
                                        <option value={OPPORTUNITY_COST}>Custo de oportunidade</option>
                                        <option value={REPLACEMENT_COST_OF_AREA_RECOVERY}>Custo de reposição ou recuperação de área</option>
                                    </select>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={6}>
                                <FormGroup>
                                    <Label>Valor total monetário</Label>
                                    <Monetary>R$ 1.500.000,00</Monetary>
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
                <Chart />
                
                <ButtonFixed join>
                    <Button onClick={() => history.push('/')}>fazer novo calculo</Button>
                    <Button variant="secondary" onClick={() => window.print()}>imprimir relatórios</Button>
                </ButtonFixed>

               
                
            </Grid> 
        </Container>
    )
}

export default MonetaryImpacts