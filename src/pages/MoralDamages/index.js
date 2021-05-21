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
                Danos Morais
            </Headline>
            <Text>
                Os danos ambientais medidos pela calculadora de impacto são estimados segundo uma perspectiva
                social e econômica, em que uma piora no ambiente gera consequências diretas para os seres humanos,
                tanto em termos de saúde, como de diminuição de oportunidade de renda e bem-estar. Entretanto, há
                diversos distúrbios causados pelo garimpo ilegal, principalmente em contextos de invasão de áreas
                protegidas e Terras Indígenas, que levam a rupturas do tecido social e conflitos diretos com garimpeiros.
                Métodos de valoração econômica têm limitações para valorar estes tipos de impacto, tanto por
                questões relacionadas à ponderação de valores pela renda e tamanho da população, como pela questão
                de que os direitos sobre as áreas invadidas não estão em negociação.
            </Text>
            <Text>
                Além dos valores de danos materiais ligados a impactos sociais e ambientais, existe no Brasil,
                adicionalmente, a indenização por dano moral. A quantificação da indenização por dano moral
                ambiental deve observar critérios como: extensão e gravidade do dano; a situação econômica das
                partes; o grau culpa do ofensor; repercussões do fato; o caráter pedagógico-punitivo da medida; o
                tempo decorrido entre o dano e a recuperação ou compensação ambiental.
            </Text>
            <Text>
                Há sinalização na jurisprudência de que uma tentativa de se estabelecer critérios “tarifários” ou
                “tabelados”, para quantificação do dano moral, possui alto risco de ser considerada inconstitucional.
                Mesmo não sendo permitido “tabelar” os danos morais como uma parcela dos danos socioambientais,
                buscamos aqui trazer elementos para se construir uma noção da magnitude que os danos morais podem
                ser reconhecidos, em comparação aos danos materiais socioambientais, especialmente para casos em
                que os danos ocorrem em áreas protegidas.
            </Text>

            <Text>
                Trazemos como exemplo, o valor de indenizações arbitradas em acidente da Petrobrás em 16 de julho
                de 2000 1 . O derramamento de óleo cru ocorrido, durante operação de transferência de petróleo de
                terminal marítimo em São Francisco do Sul (SC) para a Refinaria Presidente Getúlio Vargas (REFAR), no
                Paraná, despejou aproximadamente 4 milhões de litros de óleo, atingindo os rios Barigui e Iguaçu, e
                causado danos ambientais de grande monta, com prejuízos principalmente à flora, à fauna e às águas.
                As repercussões não se deram apenas no plano ambiental, mas também atingiram a população.
            </Text>
            
            <Text>
                Os danos materiais ambientais avaliados somaram mais de 217 milhões de Reais, referentes a impactos
                a animais, vegetação, solo, ar e água. 2 Os danos morais, por sua vez, foram fixados em R$ 400.000.000 3 ,
                ou seja, praticamente o dobro do valor dos danos materiais.
            </Text>

            <Text>
                Tribunal Regional da 4ª Região (TRF-4). Apelação Cível Nº 5082462-38.2014.4.04.7000/PR. Apelante: Petrobrás
                (Réu). Apelante: Amar-Associação de Defesa do Meio Ambiente de Araucaria (Autor).
            </Text>

            <Text>
                2 Danos causados aos mamíferos: R$1.000.000, aves R$3.000.000, anfíbios: R$3.000.000, vegetação
                R$100.000.000, peixes 10.000.000, qualidade do ar 708.750, solo R$68.825, águas subterrâneas R$100.000.000.
            </Text>

            <Text>
                3 Destinada ao Fundo de Reparação de Bens Lesados previsto pelo art. 13 da Lei nº 7.347/85
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