import { Link } from 'react-router-dom'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Container, Headline, Text } from 'pages/Calculator/ImpactsStyles'
import { ReactComponent as InfoPorugues } from 'assets/images/[calculadora]infografico3_PORTUGUÊS.svg';
import { ReactComponent as InfoEnglish } from 'assets/images/[calculadora]infografico3_INGLES.svg';
import { ReactComponent as InfoSpanish } from 'assets/images/[calculadora]infografico3_ESPANHOL.svg';
import { AppContext } from 'utils/AppContext';
import { useContext } from 'react';
import { CATEGORY_MERCURY, FERRY } from '../Form/consts';
import ToBRL from 'utils/toBRL';
import { DataChart } from '../MonetaryImpacts';
import MenuImpacts from '../Menu';
import popSize100kmRadius from 'utils/popSize100kmRadius';
import { BRAZIL, countries_region } from 'components/CountrySelect';
import toUSD from 'utils/toUSD';
import * as S from './style'
import fixedCalcultions from 'hooks/fixedCalculations';
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

const MercuryContamination = () => {
    const {state} = useContext(AppContext)
    
    const { language, calculator, country_region, priceUSDtoBRL } = state
    const { counties, country, knowRegion, notMonetary } = calculator
    const { impacts } = language

    const { general } = fixedCalcultions(country_region)
    const { densityPopulationalRegionNorth2060 } = general

    const isBrazil = country_region && country_region.country === countries_region[BRAZIL].country

    window.scrollTo(0,0)

    const impactsValues = state.calculator.values

    const reducer = ((acc, current) => acc + current.value)
    const sumTotal = (item) => isBrazil && priceUSDtoBRL ? ToBRL(item.reduce(reducer, 0)) : toUSD(item.reduce(reducer, 0))

    const dataMercury = impactsValues.filter(i => i.category === CATEGORY_MERCURY)

    const impactsMercury = {
        data: dataMercury,
        total: sumTotal(dataMercury)
    }

    const hiddenMenu = calculator.valuatioMethod === FERRY ? [impacts.menu.deforestation] : []
    const currentCountry = counties.find(c => c.id === Number(country))
    const popDensity2060 = knowRegion ? currentCountry.popDensity2060  : densityPopulationalRegionNorth2060;
    const people = Math.round(popSize100kmRadius(knowRegion, popDensity2060, country_region))
    const paragraphy_01 = impacts.mercuryContamination.paragraphy_01.replace("$people", people.toLocaleString('pt-BR'))

    window.scroll(0, 0)

    return (
        <>
        <Header />
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
                        <InfoComponent language={language.type} />
                    </Col>
                </Row>
                
                <Row>
                    <Col xs={12}>
                        <DataChart impact={impactsMercury} headline={impacts.mercuryContamination.headline} txtTotalNonetary={impacts.monetaryImpacts.labels.finalValue} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h2>{language.not_monetary_headline}</h2>
                        <br />
                        <S.TableResponsive>
                        <S.Table>
                            <thead>
                                <tr>
                                    <S.Th width="800px">{language.not_monetary_type}</S.Th>
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
                <br />
                <br />
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
        </>
    )
}

export default MercuryContamination