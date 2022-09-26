/* eslint-disable react/jsx-no-target-blank */
import Header from 'layout/Header'
import { ContainerPartner } from 'pages/Introduction/About/style'
import { Headline, Text } from 'pages/Introduction/style'
import { useContext } from 'react'
import { Col, Row } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import { Button } from 'theme'
import { AppContext } from 'utils/AppContext'
import LogoMPF from 'assets/images/mpf-logo-ministerio-publico-federal.png'
import LogoConservationStrategy from 'assets/images/logo.svg'
import MetodologiaIMG from 'assets/images/metodologia.png'
import { Container, ContainerBackground, Embed, Img, Overlay } from './style'
import { BRAZIL, countries_region } from 'components/CountrySelect'

const Home = () => {
    const { state } = useContext(AppContext)
    const { language, country_region } = state
    const { introduction } = language
    const isBrazil = country_region && country_region.country === countries_region[BRAZIL].country

    console.log(country_region)
    return (
        <>
            <ContainerBackground>
                <Header theme="dark" />
                <Overlay />
                <Container>
                    <Headline color="white">{introduction.about.headline}</Headline>
                    <Text color="white">
                        {introduction.about.text}
                    </Text>

                    <Row style={{marginTop: 20}}>
                        <Col md={4}> 
                        <ContainerPartner>
                           {isBrazil && <img src={LogoMPF} width="150" height="80" alt="" />}
                            <img src={LogoConservationStrategy} width="120"  alt="" />
                        </ContainerPartner>
                        <label style={{color: 'white'}}>{language.iDontKnowYet}</label>
                            <Link to="/introduction">
                                <Button variant="secondary">{language.buttonIntroduction}</Button>
                            </Link>

                            <label style={{color: 'white'}}>{language.iAlreadyKnow}</label>
                            <Link to="/calculator">
                                <Button variant="default">{language.buttonResumeCalculator}</Button>
                            </Link>
                        </Col>
                        <Col md={5} mdOffset={1}>
                            <Embed>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/iRJmh62xHxU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </Embed>
                            <Button style={{marginTop: 37}} onClick={() => window.open('https://www.youtube.com/watch?v=sVlf8GCF-SU&list=PLBfu1mD9hk678ePbwqO1Aq3gugwzrhXTx')} variant="default">Ver outros videos sobre garimpo ilegal</Button>
                        
                            
                        </Col>
                    </Row>
                </Container>
            </ContainerBackground>
            <Container>
                
                <Row middle="md">
                    <Col xs={12} md={2}>
                        <Img src="https://www.conservation-strategy.org/sites/default/files/field-required-image/Page%201.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={3}>
                        <Headline style={{textAlign: 'left', marginBottom: '32px'}}>Artigo científico</Headline>
                        <Button onClick={() => window.open('https://www.conservation-strategy.org/sites/default/files/field-file/ijerph-18-11869.pdf')}>Baixar em pdf</Button>
                    </Col>
           
                
                    <Col xs={12} md={2} mdOffset={1}>
                        <Img src={MetodologiaIMG} alt="" />
                    </Col>
                    <Col xs={12} md={3}>
                        <Headline style={{textAlign: 'left', marginBottom: '32px'}}>Metodologia</Headline>
                        <Button onClick={() => window.open('https://www.conservation-strategy.org/sites/default/files/field-file/Metodologia%20de%20Valorac%CC%A7a%CC%83o%20de%20Impactos%20do%20Garimpo%20Ilegal%20de%20Ouro%20na%20Amazo%CC%82nia_0.pdf')}>Baixar em pdf</Button>
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}

export default Home;