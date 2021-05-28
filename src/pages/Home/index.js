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
import { Container, ContainerBackground, Embed, Overlay } from './style'

const Home = () => {
    const { state } = useContext(AppContext)
    const { language } = state
    const { introduction } = language
    return (
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
                        <img src={LogoMPF} width="150" height="80" alt="" />
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
                        <a href="https://www.youtube.com/watch?v=sVlf8GCF-SU&list=PLBfu1mD9hk678ePbwqO1Aq3gugwzrhXTx" target="_blank">
                            <Button style={{marginTop: 37}} variant="default">Ver outros videos sobre garimpo ilegal</Button>
                        </a>
                        
                    </Col>
                </Row>
            </Container>
        </ContainerBackground>
    )
}

export default Home;