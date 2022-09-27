import { Container, SocialMedia, MediaLink } from './style'
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg'
import { ReactComponent as Twitter } from 'assets/icons/twitter.svg'
import { ReactComponent as Youtube } from 'assets/icons/youtube.svg'
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg'
import { ReactComponent as Linkedin } from 'assets/icons/linkedin.svg'

const Footer = () => {
    return (
        <Container>
            © CSF All rights reserved
            <SocialMedia>
                <MediaLink href="https://www.facebook.com/conservationstrategyfund" target="_blank" title="Seguir no facebook">
                    <Facebook />
                </MediaLink>
                <MediaLink href="https://twitter.com/numbers4nature" target="_blank" title="Seguir no twitter">
                    <Twitter />
                </MediaLink>
                <MediaLink href="https://www.youtube.com/user/numbers4nature" target="_blank" title="seguir no Youtube">
                    <Youtube />
                </MediaLink>
                <MediaLink href="https://www.instagram.com/conservationstrategyfund/" target="_blank" title="Seguir no instagram">
                    <Instagram />
                </MediaLink>
                <MediaLink href="https://www.linkedin.com/company/conservation-strategy-fund/" target="_blank" title="Seguir no linkedin">
                    <Linkedin />
                </MediaLink>
            </SocialMedia>
        </Container>
    )
}

export default Footer;