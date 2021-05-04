import { Link } from 'react-router-dom'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Container, Menu, MenuItem, Headline, Text } from 'pages/Calculator/ImpactsStyles'
import { ReactComponent as ImageExample } from 'assets/images/[calculadora]infografico3.svg';
import { ReactComponent as ImageExampleUS } from 'assets/images/[calculadora]infografico3_INGLES.svg';
import { AppContext } from 'utils/AppContext';
import { useContext } from 'react';

const MercuryContamination = () => {
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
                            <Link to="/impacts/deforestation">
                                <MenuItem>{impacts.menu.deforestation}</MenuItem>
                            </Link>
                            <Link to="/impacts/silting-of-rivers">
                                <MenuItem>{impacts.menu.siltingOfRivers}</MenuItem>
                            </Link>
                            <MenuItem active>{impacts.menu.mercuryContamination}</MenuItem>
                            <Link to="/impacts/monetary-impacts">
                                <MenuItem last>{impacts.menu.monetaryImpacts}</MenuItem>
                            </Link>
                        </Menu>
                    </Col>
                    <Col xs={12} sm={8} md={9}>
                        <Headline>{impacts.mercuryContamination.headline}</Headline>
                        <Text>
                        {impacts.mercuryContamination.paragraphy_01}
                        </Text>
                        <Text>
                        {impacts.mercuryContamination.paragraphy_02}              
                        </Text>
                        { language.type === 'enUS' ? <ImageExampleUS style={{display: 'block', margin: '50px auto'}} /> : <ImageExample style={{display: 'block', margin: '50px auto'}} />}
                    </Col>
                </Row>
                
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
    )
}

export default MercuryContamination