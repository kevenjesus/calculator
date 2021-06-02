import { Link } from 'react-router-dom'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Container, Headline, Text } from 'pages/Calculator/ImpactsStyles'
import { ReactComponent as ImageExample } from 'assets/images/[calculadora]infografico3.svg';
import { ReactComponent as ImageExampleUS } from 'assets/images/[calculadora]infografico3_INGLES.svg';
import { AppContext } from 'utils/AppContext';
import { useContext } from 'react';
import { CATEGORY_MERCURY, FERRY } from '../Form/consts';
import ToBRL from 'utils/toBRL';
import { DataChart } from '../MonetaryImpacts';
import MenuImpacts from '../Menu';
import popSize100kmRadius from 'utils/popSize100kmRadius';

const MercuryContamination = () => {
    const {state} = useContext(AppContext)
    const { language, calculator } = state
    const { counties, country, knowRegion } = calculator
    const { impacts } = language
    window.scrollTo(0,0)

    const impactsValues = state.calculator.values

    const reducer = ((acc, current) => acc + current.value)
    const sumTotal = (item) => ToBRL(item.reduce(reducer, 0))

    const dataMercury = impactsValues.filter(i => i.category === CATEGORY_MERCURY)

    const impactsMercury = {
        data: dataMercury,
        total: sumTotal(dataMercury)
    }

    const hiddenMenu = calculator.valuatioMethod === FERRY ? [impacts.menu.deforestation] : []
    const currentCountry = counties.find(c => c.id === Number(country))
    const popDensity2060 = knowRegion ? currentCountry.popDensity2060  : 6.0;
    const people = Math.round(popSize100kmRadius(knowRegion, popDensity2060))
    const paragraphy_01 = impacts.mercuryContamination.paragraphy_01.replace("$people", people.toLocaleString('pt-BR'))

    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={4} md={3}>
                        <MenuImpacts active={impacts.menu.mercuryContamination} hidden={hiddenMenu} />
                    </Col>
                    <Col xs={12} sm={8} md={9}>
                        <Headline>{impacts.mercuryContamination.headline}</Headline>
                        <Text>
                        <div dangerouslySetInnerHTML={{__html: paragraphy_01 }} />  
                        
                        </Text>
                        <Text>
                        {impacts.mercuryContamination.paragraphy_02} 
                        </Text>
                        { language.type === 'enUS' ? <ImageExampleUS style={{display: 'block', margin: '50px auto'}} /> : <ImageExample style={{display: 'block', margin: '50px auto'}} />}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <DataChart impact={impactsMercury} headline={impacts.mercuryContamination.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} smOffset={3} sm={3}>
                        <Link to="/impacts/mercury-contamination/references">
                            <Button variant="secondary">{impacts.buttons.references}</Button>
                        </Link>
                    </Col>
                    <Col xs={12} sm={3}>
                        <Link to="/impacts/monetary-impacts">
                            <Button>{impacts.buttons.next}</Button>
                        </Link>
                    </Col>
                </Row>
            </Grid> 
        </Container>
    )
}

export default MercuryContamination