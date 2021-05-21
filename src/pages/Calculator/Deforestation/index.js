import { Link } from 'react-router-dom'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Container, Headline, Text } from 'pages/Calculator/ImpactsStyles'
import { ReactComponent as ImageExample } from 'assets/images/[calculadora]Infográfico1.svg';
import { ReactComponent as ImageExampleUS } from 'assets/images/[calculadora]Infográfico1_INGLES.svg';
import { useContext } from 'react';
import { AppContext } from 'utils/AppContext';
import ToBRL from 'utils/toBRL';
import { AMOUNT_GOLD, CATEGORY_DEFORESTATION, FERRY, IMPACTED_AREA } from '../Form/consts';
import { DataChart } from 'pages/Calculator/MonetaryImpacts' 
import MenuImpacts from '../Menu';
import goldToHecatere from 'utils/GoldToHectare';
import hectareToGold from 'utils/hectareToGold';
const Deforestation = () => {
    const {state} = useContext(AppContext)
    const { language, calculator } = state
    const { impacts } = language
    window.scrollTo(0,0)

    const impactsValues = state.calculator.values

    const reducer = ((acc, current) => acc + current.value)
    const sumTotal = (item) => ToBRL(item.reduce(reducer, 0))

    const dataDesforestation = impactsValues.filter(i => i.category === CATEGORY_DEFORESTATION)
    const impactsDesforestation = {
        data: dataDesforestation,
        total: sumTotal(dataDesforestation)
    }

    const hiddenMenu = calculator.valuatioMethod === FERRY ? [impacts.menu.deforestation] : []

    const hectareValue = calculator.analysisUnit === AMOUNT_GOLD ? goldToHecatere(Number(calculator.qtdAnalysis.value), calculator.pitDepth) : Number(calculator.qtdAnalysis.value)
    const goldValue = calculator.analysisUnit === IMPACTED_AREA ? hectareToGold(Number(calculator.qtdAnalysis.value), calculator.pitDepth) : Number(calculator.qtdAnalysis.value)
    
    const paragraphy_01 = impacts.deforestation.paragraphy_01.replace("$grams", goldValue).replace("$hectare", hectareValue)
    const paragraphy_02 = impacts.deforestation.paragraphy_02.replace("$hectare", hectareValue)
    
    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={4} md={3}>
                        <MenuImpacts active={impacts.menu.deforestation} hidden={hiddenMenu} />
                    </Col>
                    <Col xs={12} sm={8} md={9}>
                        <Headline>{impacts.deforestation.headline}</Headline>
                        <Text>
                            <div dangerouslySetInnerHTML={{__html: paragraphy_01 }} />
                        </Text>
                        <Text>
                            <div dangerouslySetInnerHTML={{__html: paragraphy_02 }} />
                        </Text>
                        {
                            language.type === 'enUS' ? (<ImageExampleUS style={{display: 'block', margin: '50px auto'}} />) : (<ImageExample style={{display: 'block', margin: '50px auto'}} />)
                        }
                        
                    </Col>
                </Row>
                <Row>
                    <Col xs={!2}>
                        <DataChart impact={impactsDesforestation} headline={impacts.deforestation.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} smOffset={3} sm={3}>
                        <Link to="/impacts/deforestation/references">
                            <Button variant="secondary">{impacts.buttons.references}</Button>
                        </Link>
                    </Col>
                    <Col xs={12} sm={3}>
                        <Link to="/impacts/silting-of-rivers">
                            <Button>{impacts.buttons.next}</Button>
                        </Link>
                    </Col>
                </Row>
            </Grid> 
        </Container>
    )
}

export default Deforestation