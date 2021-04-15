import { Link } from 'react-router-dom'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Container, Menu, MenuItem, Headline, Text } from 'pages/Calculator/ImpactsStyles'
import { ReactComponent as ImageExample } from 'assets/images/[calculadora]Infográfico1.svg';
import { useContext } from 'react';
import { AppContext } from 'utils/AppContext';
const Deforestation = () => {
    const {state} = useContext(AppContext)
    const { language } = state
    const { impacts } = language
    window.scrollTo(0,0)
    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={4} md={3}>
                        <Menu>
                            <MenuItem active>{impacts.menu.deforestation}</MenuItem>
                            <Link to="/impacts/silting-of-rivers">
                                <MenuItem>{impacts.menu.siltingOfRivers}</MenuItem>
                            </Link>
                            <Link to="/impacts/mercury-contamination">
                                <MenuItem>{impacts.menu.mercuryContamination}</MenuItem>
                            </Link>
                            <Link to="/impacts/monetary-impacts">
                                <MenuItem last>{impacts.menu.monetaryImpacts}</MenuItem>
                            </Link>
                        </Menu>
                    </Col>
                    <Col xs={12} sm={8} md={9}>
                        <Headline>{impacts.deforestation.headline}</Headline>
                        <Text>
                            {impacts.deforestation.paragraphy_01}
                        </Text>
                        <Text>
                        {impacts.deforestation.paragraphy_02}
                        </Text>
                        <ImageExample style={{display: 'block', margin: '50px auto'}} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} smOffset={3} sm={3}>
                        <Button variant="secondary">{impacts.buttons.references}</Button>
                    </Col>
                    <Col xs={12} sm={3}>
                        <Link to="/impacts/silting-of-rivers">
                            <Button>{impacts.buttons.next}</Button>
                        </Link>
                    </Col>
                </Row>
            </Grid> 
        </Container>
    )
}

export default Deforestation