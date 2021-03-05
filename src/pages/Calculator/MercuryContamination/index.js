import { Link } from 'react-router-dom'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Container, Menu, MenuItem, Headline, Text } from 'pages/Calculator/ImpactsStyles'
import { ReactComponent as ImageExample } from 'assets/images/example.svg';

const MercuryContamination = () => {
    window.scrollTo(0,0)
    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={4}>
                        <Menu>
                            <Link to="/impacts/deforestation">
                                <MenuItem>Desmatamento</MenuItem>
                            </Link>
                            <Link to="/impacts/silting-of-rivers">
                                <MenuItem>Assoreamento dos rios</MenuItem>
                            </Link>
                            <MenuItem active>Contaminação por mercúrio</MenuItem>
                            <Link to="/impacts/monetary-impacts">
                                <MenuItem last>Impactos monetários</MenuItem>
                            </Link>
                        </Menu>
                    </Col>
                    <Col xs={12} sm={8}>
                        <Headline>Contaminação por mercúrio</Headline>
                        <Text>
                        O mercúrio é um elemento presente na natureza, com concentrações que podem variar, por exemplo, dependendo da cor dos rios e do nível de desmatamento.                
                        </Text>
                        <Text>
                        Entretanto, o garimpo despeja toneladas de mercúrio nos rios, contaminando ecossistêmas, peixes e humanos.                
                        </Text>
                        <Text>
                        A extração de 1000 kg de ouro despeja 6000 kg (14%), em media nos rios.
        Destes, 3% é metilada, caindo na cadeia alimentar – sendo estocada principalmente em peixes carnívoros.
                        </Text>
                        <Text>
                        Em média, 0,42% do mercúrio despejado, ao longo de 100 anos de ciclo de vida, acabará sendo consumido por humanos.
        Em média, a população dentro da área de influência do garimpo tem uma contaminação aumentada de 2ug/g para 6ug/g
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
                        <Link to="/impacts/monetary-impacts">
                            <Button>Prosseguir</Button>
                        </Link>
                    </Col>
                </Row>
            </Grid> 
        </Container>
    )
}

export default MercuryContamination