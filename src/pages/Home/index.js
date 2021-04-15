import { Headline, Text } from 'pages/Introduction/style'
import { useContext } from 'react'
import { Col, Row } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import { Button } from 'theme'
import { AppContext } from 'utils/AppContext'
import { Container, ContainerBackground, Overlay } from './style'

const Home = () => {
    const { state } = useContext(AppContext)
    const { language } = state
    const { introduction } = language
    return (
        <ContainerBackground>
            <Overlay />
            <Container>
            <Headline color="white">{introduction.about.headline}</Headline>
            <Text color="white">
                {introduction.about.text}
            </Text>
                <Row>
                    <Col sm={3}>
                        <label style={{color: 'white'}}>Ainda não conheço</label>
                        <Link to="/introduction">
                            <Button variant="secondary">Me leva para o passo-a-passo</Button>
                        </Link>
                        
                    </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <label style={{color: 'white'}}>Ainda não conheço</label>
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