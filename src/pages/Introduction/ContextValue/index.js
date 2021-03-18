import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Headline, Text } from 'pages/Introduction/style'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Container, ButtonsFixed } from '../style'
import { HOW_USE_CALCULATOR } from '../consts'

const ContextValue = () => {
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

    return (
        <Container>
            <Headline>Valor e contexto</Headline>
            <Text>
            A calculadora estima valores para cada um destes impactos. O conceito de “valor” se refere à importância social de uma variação na qualidade ambiental sobre o nível de bem-estar da população.
            </Text>
            <Text>
                Por exemplo:
            </Text>
            <Text>
                <strong>- Com e sem poluição</strong>
            </Text>
            <Text>
                <strong>- Variação biofísica (ecossistema, peixes, clima)</strong>
            </Text>
            <Text>
                <strong>- Variação no bem-estar social</strong>
            </Text>
            <Text>
            A importância da variação de um impacto depende do contexto em que ocorre. Quanto mais pessoas deixam de usar um recurso natural, maior será o valor de sua perda. Quanto mais escasso o recurso natural, maior o seu valor
            </Text>

            <ButtonsFixed>
                <Grid>
                    <Row between="sm">
                        <Col xs={6} sm={4} md={3}>
                            <Button variant="default" onClick={SkipIntroduction}>Pular introdução</Button>
                        </Col>
                        <Col xs={6} sm={4} md={3}>
                            <Button onClick={NextStep}>Prosseguir</Button>
                        </Col>
                    </Row>
                </Grid>
            </ButtonsFixed>
        </Container>
    )
}

export default ContextValue;