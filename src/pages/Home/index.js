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
import { Container, ContainerBackground, Overlay } from './style'

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
                
                <ContainerPartner>
                    <img src={LogoMPF} width="150" height="80" alt="" />
                    <img src={LogoConservationStrategy} width="120"  alt="" />
                </ContainerPartner>
                <Row>
                    <Col sm={3} md={4}>
                        <label style={{color: 'white'}}>Ainda não conheço</label>
                        <Link to="/introduction">
                            <Button variant="secondary">Me leva para o passo-a-passo</Button>
                        </Link>
                        
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} md={4}>
                        <label style={{color: 'white'}}>Já conheço</label>
                        <Link to="/calculator">
                            <Button variant="default">me leva para a versão resumida</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </ContainerBackground>
    )
}

export default Home;