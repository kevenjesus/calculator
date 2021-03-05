import { Link } from 'react-router-dom'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Container, Menu, MenuItem, Headline, Text } from 'pages/Calculator/ImpactsStyles'
import { ReactComponent as ImageExample } from 'assets/images/example.svg';

const SiltingOfRivers = () => {
    window.scrollTo(0,0)
    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={4} md={3}>
                        <Menu>
                            <Link to="/impacts/deforestation">
                                <MenuItem>Desmatamento</MenuItem>
                            </Link>
                            <MenuItem active>Assoreamento dos rios</MenuItem>
                            <Link to="/impacts/mercury-contamination">
                                <MenuItem>Contaminação por mercúrio</MenuItem>
                            </Link>
                            <Link to="/impacts/monetary-impacts">
                                <MenuItem last>Impactos monetários</MenuItem>
                            </Link>
                        </Menu>
                    </Col>
                    <Col xs={12} sm={8} md={9}>
                        <Headline>Assoreamento dos rios</Headline>
                        <Text>
                        A extraçã o de <strong>1000 kg de ouro</strong> gera o assoreamento de <strong>150 m³</strong>, em média
                        </Text>
                        <Text>
                            O assoreamento de <strong>5 hectares</strong> leva a perdas de oportunidade de realização de outras atividades sustentáveis, como pesca e turismo.
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
                        <Link to="/impacts/mercury-contamination">
                            <Button>Prosseguir</Button>
                        </Link>
                    </Col>
                </Row>
            </Grid> 
        </Container>
    )
}

export default SiltingOfRivers