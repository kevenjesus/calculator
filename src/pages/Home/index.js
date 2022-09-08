/* eslint-disable react/jsx-no-target-blank */
import Header from 'layout/Header'
import { ContainerPartner } from 'pages/Introduction/About/style'
import { Headline, Text } from 'pages/Introduction/style'
import { useContext } from 'react'
import { Col, Row } from 'react-flexbox-grid'
import { useHistory } from 'react-router-dom'
import { Button } from 'theme'
import { AppContext } from 'utils/AppContext'
import LogoMPF from 'assets/images/mpf-logo-ministerio-publico-federal.png'
import LogoConservationStrategy from 'assets/images/logo.svg'
import { Container, ContainerBackground, Embed, Overlay } from './style'
import { BRAZIL, countries_region } from 'components/CountrySelect'
import PrintPage from 'assets/images/print_page.png'

const Home = () => {
    const { state } = useContext(AppContext)
    const { language, country_region } = state
    const { introduction } = language
    const isBrazil = country_region && country_region.country === countries_region[BRAZIL].country
    const history = useHistory()

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
                            <Button onClick={() => history.push('/introduction')} variant="secondary">{language.buttonIntroduction}</Button>

                            <label style={{color: 'white'}}>{language.iAlreadyKnow}</label>
                            <Button onClick={() => history.push('/calculator')} variant="default">{language.buttonResumeCalculator}</Button>
                        </Col>
                        <Col md={5} mdOffset={1} style={{position: 'relative'}}> 
                            <Embed>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/iRJmh62xHxU?rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </Embed>
                            <Button style={{marginTop: 37}} onClick={() =>  window.open('https://www.youtube.com/watch?v=sVlf8GCF-SU&list=PLBfu1mD9hk678ePbwqO1Aq3gugwzrhXTx')} variant="default">Ver outros videos sobre garimpo ilegal</Button>
                            <img onClick={() => window.open('https://pubmed.ncbi.nlm.nih.gov/34831624/')} style={{cursor: 'pointer', position: 'absolute', top: 0, right: '-130px'}} src={PrintPage} title="National library of Medicine" alt="National library of Medicine" width={100} />
                        </Col>
                    </Row>
                </Container>
            </ContainerBackground>
        </>
    )
}

export default Home;