import { Container, Overlay, CloseButton, Language, LanguageLabel, Menuitem } from './style'
import { ReactComponent as Close } from 'assets/icons/close.svg'
import { ReactComponent as Portuguese } from 'assets/icons/portuguese.svg'
import { ReactComponent as Spanish } from 'assets/icons/spanish.svg'
import { ReactComponent as Usa } from 'assets/icons/usa.svg'
import { useCallback, useContext } from 'react'
import { AppContext, stateTypes } from 'utils/AppContext'
import ptBR from 'utils/pt_BR'
import es_ES from 'utils/es_ES'
import en_US from 'utils/en_US'
import { Link } from 'react-router-dom'

const Sidebar = ({visible, onClose, theme = 'white'}) => {
    const {state, dispatch} = useContext(AppContext)
    const { language } = state;
    const { header } = language;

    const handleRegion = useCallback((file) => {
        dispatch({type: stateTypes.SET_LANGUAGE, payload: file })
    }, [dispatch])
    return (
        <>
            <Container visible={visible}>
                <CloseButton onClick={onClose}>
                    <Close />
                </CloseButton>

                <Language onClick={() => handleRegion(ptBR)}>
                    <Portuguese />
                    <LanguageLabel>Português</LanguageLabel>
                </Language>
                <Language onClick={() => handleRegion(es_ES)}>
                    <Spanish />
                    <LanguageLabel>Espanol</LanguageLabel>
                </Language>
                <Language onClick={() => handleRegion(en_US)}>
                    <Usa />
                    <LanguageLabel>English</LanguageLabel>
                </Language>
                <Menuitem theme={theme}>
                    <Link to="/team">
                        Equipe
                    </Link>
                </Menuitem>
                <Menuitem theme={theme} href="https://www.conservation-strategy.org/" target="_blank">{header.linkWebsite}</Menuitem>
            </Container>
            <Overlay visible={visible} onClick={onClose} />
        </>
    )
}

export default Sidebar;