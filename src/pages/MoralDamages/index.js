import { Headline, Text } from 'pages/Calculator/ImpactsStyles'
import { Go } from 'pages/Introduction/style'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import { AppContext } from 'utils/AppContext'
import { Container } from './style'
import { ReactComponent as GoBack } from 'assets/icons/goBack.svg'
import { Col, Row } from 'react-flexbox-grid'
import { Button } from 'theme'
import { Link } from 'react-router-dom'
const MoralDamages = () => {
    const {state} = useContext(AppContext)
    const {language} = state
    const history = useHistory()
    window.scrollTo(0,0)
    return (
        <Container>
             <Go onClick={() => history.push('/impacts/deforestation')}>
                    <GoBack />
                    <span>{language.comeBack}</span>
                </Go>
            <Headline>
            DANO MORAL AMBIENTAL
            </Headline>
            <Text>
            Por Suzane Girondi Culau Merlo
            </Text>
            <br />
            <Text>
            Os danos ambientais medidos pela calculadora de impacto são estimados segundo uma perspectiva social, em que uma piora no ambiente gera consequências diretas para os seres humanos, tanto em termos de saúde, como de diminuição de oportunidade de renda e bem-estar. Há diversos distúrbios, incluindo indiretos, causados pelo garimpo ilegal em contextos de invasão de áreas protegidas e Terras Indígenas, como rupturas sociais internas e conflitos diretos com garimpeiros. 
            </Text>
            <Text>
            Métodos de valoração econômica são limitados para valorar estes tipos de impacto, por questões relacionadas à ponderação de valores pela renda e tamanho da população, ao fato de que os direitos sobre as áreas invadidas não estão em negociação, além do evidente obstáculo para se conferir um valor monetário à lesão de direito estranho ao patrimônio do indivíduo, conectado a violação de um interesse existencial.
            </Text>
            <Text>
            Apesar da possibilidade de indenização por dano moral ser indiscutível, são vislumbrados inúmeros desafios a este instituto, destacando-se a dificuldade ou impossibilidade de sua avaliação em pecúnia, a dificuldade de se compensar com moeda o sofrimento, a dor, e o arbítrio conferido ao julgador na fixação do valor da reparação. Com efeito, nossos Tribunais enfrentam notória dificuldade para quantificação do dano moral, dado o elemento eminentemente subjetivo de análise e a inexistência de parâmetros máximos e mínimos, ou mesmo fórmula matemático-econômica, no ordenamento jurídico, que possibilite ao jurista uma posição considerada mais prática.
            </Text>

            <Text>
            Há clara sinalização, na jurisprudência, de que eventual tentativa de se estabelecer critérios “tarifários” ou “tabelados”, para quantificação do dano moral, possui alto risco de ser considerada inconstitucional, fato que dificulta, de antemão, a tentativa de se criar tais parâmetros na construção da calculadora de impacto.
            </Text>
            
            <Text>
            Este entendimento sobre a impossibilidade de tarifação do dano moral põe em relevo a importância da análise dos reflexos e repercussões existentes nas peculiaridades de cada caso que chega ao Judiciário. Existem, no entanto, critérios extraídos da jurisprudência para a quantificação do dano moral, tais como a extensão e gravidade do dano, a situação econômica das partes, o grau culpa do ofensor, os princípios da razoabilidade e proporcionalidade, os efeitos e repercussões do dano, a intensidade e a duração do dano, o caráter pedagógico-punitivo da medida, a possibilidade de recuperação do dano e o tempo decorrido entre o dano e a recuperação ou compensação ambiental. Tais critérios não representam um rol exaustivo, devendo o Magistrado indicar, forma fundamentada, em cada decisão, os parâmetros e pesos utilizados para fixação do valor indenizatório.
            </Text>

            <Text>
            Sendo assim, há evidente dificuldade de se atribuir valores matemático-econômicos gerais para tentar aquilatar a dimensão do dano moral antes dos fatos, o que poderia trazer modulações mecanicistas e idênticas que deixam de considerar a complexidade do ser humano, que se afasta de fórmulas cartesianas. Além disso, eventual tentativa de se estabelecer um sistema tarifário aos danos morais, além de carecer de embasamento legal, teria alto risco de ser considerada inconstitucional pelos nossos Tribunais.
            </Text>

            <Row>
                <Col md={3}>
                    <Link to="/impacts/monetary-impacts">
                        <Button variant="secondary">Voltar</Button>
                    </Link>
                    
                </Col>
            </Row>

        </Container>
    )
}

export default MoralDamages