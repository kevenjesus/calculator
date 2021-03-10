import { Headline, Text } from 'pages/Introduction/style'

const HowUseCalculator = () => {
    return (
        <>
            <Headline>Como utilizar a calculadora</Headline>
            <Text>
                Precisamos que você inclua algumas informações sobre o contexto para que a calculadora possa estimar o valor dos impactos de forma mais precisa
            </Text>
            <Text>
                Caso não tenha informações específicas, não tem problema, serão incluídos automaticamente valores médios de contexto e impacto e resultados e suas explicações serão gerados na sequencia.
            </Text>
        </>
    )
}

export default HowUseCalculator;