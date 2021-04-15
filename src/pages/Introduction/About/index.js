import { Headline, Text } from 'pages/Introduction/style'
import { ContainerPartner } from './style'
import LogoMPF from 'assets/images/mpf.png'
import LogoConservationStrategy from 'assets/images/logo.svg'
import { useContext } from 'react'
import { AppContext } from 'utils/AppContext'

const About = () => {
    const { state } = useContext(AppContext)
    const { language } = state
    const { introduction } = language
    return (
        <>
            <Headline>{introduction.about.headline}</Headline>
            <Text>
                {introduction.about.text}
            </Text>
            <ContainerPartner>
                <img src={LogoMPF} width="150" alt="" />
                <img src={LogoConservationStrategy} width="150" alt="" />
            </ContainerPartner>
        </>
    )
}

export default About;