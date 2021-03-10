import { Headline, Text } from 'pages/Introduction/style'

const ContextValue = () => {
    return (
        <>
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
        </>
    )
}

export default ContextValue;