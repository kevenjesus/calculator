import { Headline, Text } from 'pages/Introduction/style'
import { ContainerPartner } from './style'
import LogoMPF from 'assets/images/mpf.png'
import LogoConservationStrategy from 'assets/images/logo.svg'

const About = () => {
    return (
        <>
            <Headline>Sobre</Headline>
            <Text>
            A calculadora de impactos é fruto de uma parceria entre <strong>CSF</strong> e <strong>MPF</strong> com o objetivo de tornar-se uma ferramenta analítica e pedagógica que descreve os <strong>impactos do garimpo ilegal de ouro</strong> e o passo-a-passo para sua mensuração.
            </Text>
            <ContainerPartner>
                <img src={LogoMPF} width="150" alt="" />
                <img src={LogoConservationStrategy} width="150" alt="" />
            </ContainerPartner>
        </>
    )
}

export default About;