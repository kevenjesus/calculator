import { Link } from 'react-router-dom'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Container, Menu, MenuItem, Headline, Text } from 'pages/Calculator/ImpactsStyles'
import { ReactComponent as ImageExample } from 'assets/images/example.svg';
const Deforestation = () => {
    window.scrollTo(0,0)
    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={4}>
                        <Menu>
                            <MenuItem active>Desmatamento</MenuItem>
                            <Link to="/impacts/silting-of-rivers">
                                <MenuItem>Assoreamento dos rios</MenuItem>
                            </Link>
                            <Link to="/impacts/mercury-contamination">
                                <MenuItem>Contaminação por mercúrio</MenuItem>
                            </Link>
                            <Link to="/impacts/monetary-impacts">
                                <MenuItem last>Impactos monetários</MenuItem>
                            </Link>
                        </Menu>
                    </Col>
                    <Col xs={12} sm={8}>
                        <Headline>Desmatamento</Headline>
                        <Text>
                            A extração de <strong>1000 kg de ouro</strong> gera o desmatamento de <strong>5 hectares</strong>, em média.
                        </Text>
                        <Text>
                            O desmatamento de <strong>5 hectares</strong> leva a perdas de oportunidade de realização de outras atividades sustentáveis, como concessões florestais e agroflorestas, além de serviços ecossistêmicos de regulação, como sequestro de carbono e controle de erosão.
                        </Text>
                        <ImageExample style={{display: 'block', margin: '50px auto'}} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} smOffset={3} sm={3}>
                        <Button variant="secondary">Referencias</Button>
                    </Col>
                    <Col xs={12} sm={3}>
                        <Button variant="secondary">Hipoteses</Button>
                    </Col>
                    <Col xs={12} sm={3}>
                        <Link to="/impacts/silting-of-rivers">
                            <Button>Prosseguir</Button>
                        </Link>
                    </Col>
                </Row>
            </Grid> 
        </Container>
    )
}

export default Deforestation