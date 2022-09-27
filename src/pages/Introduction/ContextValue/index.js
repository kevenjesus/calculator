import { useCallback, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Headline, Text } from 'pages/Introduction/style'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Container, ButtonsFixed } from '../style'
import { HOW_USE_CALCULATOR } from '../consts'
import { AppContext } from 'utils/AppContext'
import { ReactComponent as Image } from 'assets/images/[calculadora]ilustra1.svg'

const ContextValue = () => {
    const { state } = useContext(AppContext)
    const { language } = state
    const { introduction } = language
    const history = useHistory();
    const SkipIntroduction = useCallback(() => {
        history.push('/calculator')
    }, [history])
    
    const NextStep = useCallback(() => {
        history.push({
            pathname: '/introduction',
            state: {step: HOW_USE_CALCULATOR }
        })
    }, [history])

    window.scrollTo(0,0)

    return (
        <Container>
            <Headline>{introduction.contextValue.headline}</Headline>
            <Text>
            {introduction.contextValue.paragraphy_01}            
            </Text>
            <Text>
            {introduction.contextValue.paragraphy_02} 
            </Text>
            <Text>
                <strong>{introduction.contextValue.paragraphy_03} </strong>
            </Text>
            <Text>
                <strong>{introduction.contextValue.paragraphy_04} </strong>
            </Text>
            <Text>
                <strong>{introduction.contextValue.paragraphy_05} </strong>
            </Text>
            <Text>
            {introduction.contextValue.paragraphy_06} 
            </Text>

            <Image />

            <ButtonsFixed>
                <Grid>
                    <Row between="sm">
                        <Col xs={6} sm={4} md={3}>
                            <Button variant="default" onClick={SkipIntroduction}>{introduction.buttons.skip}</Button>
                        </Col>
                        <Col xs={6} sm={4} md={3}>
                            <Button onClick={NextStep}>{introduction.buttons.next}</Button>
                        </Col>
                    </Row>
                </Grid>
            </ButtonsFixed>
        </Container>
    )
}

export default ContextValue;