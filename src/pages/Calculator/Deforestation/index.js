import { Link } from 'react-router-dom'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Container, Headline, Text } from 'pages/Calculator/ImpactsStyles'
import { ReactComponent as InfoPorugues } from 'assets/images/[calculadora]Infografico1_PORTUGUES.svg';
import { ReactComponent as InfoEnglish } from 'assets/images/[calculadora]Infografico1_INGLES.svg';
import { ReactComponent as InfoSpanish } from 'assets/images/[calculadora]Infografico1_ESPANHOL.svg';
import { useContext } from 'react';
import { AppContext } from 'utils/AppContext';
import ToBRL from 'utils/toBRL';
import toUSD from 'utils/toUSD'
import { ALLUVIUM, CATEGORY_DEFORESTATION, FERRY, IMPACTED_AREA } from '../Form/consts';
import { DataChart } from 'pages/Calculator/MonetaryImpacts' 
import MenuImpacts from '../Menu';
import convertAllinGold from 'utils/convertAllinGold';
import convertAllinHectare from 'utils/convertAllinHectare';
import { countries_region, BRAZIL } from 'components/CountrySelect';
import Header from 'layout/Header';


const InfoComponent = ({language}) => {
    if(language === 'enUS') {
        return <InfoEnglish style={{display: 'block', margin: '50px auto'}} />
    }else if(language === 'esES') {
        return <InfoSpanish style={{display: 'block', margin: '50px auto'}} />
    }else {
        return <InfoPorugues style={{display: 'block', margin: '50px auto'}} />
    }
}

const Deforestation = () => {
    const {state} = useContext(AppContext)
    const { language, calculator, country_region, priceUSDtoBRL } = state
    const { valuatioMethod, qtdAnalysis, pitDepth } = calculator
    const { impacts } = language

  
    const isBrazil = country_region && country_region.country === countries_region[BRAZIL].country

    window.scrollTo(0,0)

    const impactsValues = state.calculator.values

    const reducer = ((acc, current) => acc + current.value)
    const sumTotal = (item) => isBrazil && priceUSDtoBRL ? ToBRL(item.reduce(reducer, 0)) : toUSD(item.reduce(reducer, 0))

    const dataDesforestation = impactsValues.filter(i => i.category === CATEGORY_DEFORESTATION)
    const impactsDesforestation = {
        data: dataDesforestation,
        total: sumTotal(dataDesforestation)
    }
 
    
    

    const likeMining = valuatioMethod // FERRY, PIT or ALLUVION
    const valueLikeMining = qtdAnalysis.value // gold, hactare, months, years
    const typeValueLikeMining = calculator.analysisUnit // AMOUNT_GOLD / IMPACTED_AREA / YEARS_OF_MINING / MONTHS_OF_MINING

    const hiddenMenu = calculator.valuatioMethod === FERRY ? [impacts.menu.deforestation] : []
    const { hectare: hectareWithoutOverflow, value: hectare } = convertAllinHectare(country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth)

    const hectareValue = Math.round(hectare * 100) / 100
    const goldValue = Math.round(convertAllinGold(country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth))

    let withoutOverflow;
    let parentsText;

    if(language.type === 'ptBR') {
        parentsText = '(transbordamento).'
    }else if(language.type === 'enUS') {
        parentsText = '(overflow).'
    }else {
        parentsText = '(desbordamiento).'
    }

    if(likeMining === ALLUVIUM && typeValueLikeMining === IMPACTED_AREA) {
        withoutOverflow = likeMining
        if(language.type === 'ptBR') {
            parentsText = '(transbordamento, que não foi incluído nessa análise).'
        }else if(language.type === 'enUS') {
            parentsText = '(overflow, which was not included in this analysis).'
        }else {
            parentsText = '(desbordamiento, que no se incluyó en este análisis).'
        }
    }

    withoutOverflow = Math.round(hectareWithoutOverflow * 100) / 100
    
    const paragraphy_01 = impacts.deforestation.paragraphy_01.replace("$grams", goldValue).replace("$hectare", hectareValue).replace("$withoutOverflow", withoutOverflow)
    const paragraphy_02 = impacts.deforestation.paragraphy_02.replace("$hectare", hectareValue)

    // o que o usuario digita == aluvião e tamanho do garimpo
    // hectare convertido pelo ouro == aluviao e a quantidade de gramas de ouro
    // heacte fixo por pais sem transbordamento == poço
    // hectare com transbordamento == 
    
    return (
        <>
        <Header />
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={4} md={3}>
                        <MenuImpacts active={impacts.menu.deforestation} hidden={hiddenMenu} />
                    </Col>
                    <Col xs={12} sm={8} md={9}>
                        <Headline>{impacts.deforestation.headline}</Headline>
                        <Text>
                            <div dangerouslySetInnerHTML={{__html: `${paragraphy_01} ${parentsText}` }} />
                        </Text>
                        <Text>
                            <div dangerouslySetInnerHTML={{__html: paragraphy_02 }} />
                        </Text>
                         <InfoComponent language={language.type} />
                        
                    </Col>
                </Row>
                <Row>
                    <Col xs={!2}>
                        <DataChart impact={impactsDesforestation} headline={impacts.deforestation.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} />
                    </Col>
                </Row>
                <br />
                <br />
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
        </>
    )
}

export default Deforestation