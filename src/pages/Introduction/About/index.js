import { Headline, Text } from 'pages/Introduction/style'
import { ReactComponent as ImageExample } from 'assets/images/example.svg'

const About = () => {
    return (
        <>
            <Headline>Sobre</Headline>
            <Text>
            A calculadora de impactos é fruto de uma parceria entre <strong>CSF</strong> e <strong>MPF</strong> com o objetivo de tornar-se uma ferramenta analítica e pedagógica que descreve os <strong>impactos do garimpo ilegal de ouro</strong> e o passo-a-passo para sua mensuração.
            </Text>
            <ImageExample width="400" height="350" style={{display: 'block', margin: '50px auto'}} />
        </>
    )
}

export default About;