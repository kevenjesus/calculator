import { Container, Overlay, CloseButton, Language, LanguageLabel, Menuitem } from './style'
import { ReactComponent as Close } from 'assets/icons/close.svg'
import { ReactComponent as Portuguese } from 'assets/icons/portuguese.svg'
import { ReactComponent as Spanish } from 'assets/icons/spanish.svg'
import { ReactComponent as Usa } from 'assets/icons/usa.svg'

const Sidebar = ({visible, onClose}) => {
    return (
        <>
            <Container visible={visible}>
                <CloseButton onClick={onClose}>
                    <Close />
                </CloseButton>

                <Language>
                    <Portuguese />
                    <LanguageLabel>Português</LanguageLabel>
                </Language>
                <Language>
                    <Spanish />
                    <LanguageLabel>Espanol</LanguageLabel>
                </Language>
                <Language>
                    <Usa />
                    <LanguageLabel>English</LanguageLabel>
                </Language>
                <Menuitem>Ir para o site</Menuitem>
            </Container>
            <Overlay visible={visible} onClick={onClose} />
        </>
    )
}

export default Sidebar;