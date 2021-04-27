import { useState, useEffect, useContext, useCallback } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { ContainerHeader, Container, LogoContainer, LogoName, LogoSlogan, BarMenu, MenuShow, LogoBase } from './style'
import { Language, LanguageLabel, Menuitem } from 'layout/Sidebar/style'
import { AppContext, stateTypes } from 'utils/AppContext';
import Sidebar from 'layout/Sidebar'
import ptBR from 'utils/pt_BR'
import enUS from 'utils/en_US'
import esES from 'utils/es_ES'

import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { ReactComponent as Bar } from 'assets/icons/bar.svg'
import { ReactComponent as Portuguese } from 'assets/icons/portuguese.svg'
import { ReactComponent as Spanish } from 'assets/icons/spanish.svg'
import { ReactComponent as Usa } from 'assets/icons/usa.svg'

const Header = ({theme = 'white'}) => {
    const [visibleSidebar, setVisibleSidebar] = useState(false);
    const [notRender, setNoteRender] = useState(-1);
    const [lang, setLanguage] = useState('pt');
    const {state, dispatch} = useContext(AppContext)
    const location = useLocation();
    const { language } = state;
    const { header } = language;
    
    useEffect(() => {
        const { pathname } = location;
        const paths = [];

        const isRender = paths.findIndex(a => a === pathname);
        setNoteRender(isRender);
    }, [location])

    const handleRegion = useCallback((langString, file) => {
        setLanguage(langString)
        dispatch({type: stateTypes.SET_LANGUAGE, payload: file })
    }, [dispatch])


    if(notRender >= 0) {
        return null;
    }

    document.title = `${header.naming} ${header.slogan ? `- ${header.slogan}`: '' }`;
    
    return (
        <>
        <ContainerHeader theme={theme}>
            <Container>
                <LogoContainer>
                    <Link to="/calculator">
                        <Logo />
                    </Link>
                    <LogoBase>
                        <LogoName theme={theme} isPtBR={lang === 'en'}>{header.naming}</LogoName>
                        <LogoSlogan theme={theme}>{header.slogan}</LogoSlogan>
                    </LogoBase>
                </LogoContainer>

                <MenuShow>
                <Language onClick={() => handleRegion('pt', ptBR)}>
                    <Portuguese />
                    <LanguageLabel>Português</LanguageLabel>
                </Language>
                <Language onClick={() => handleRegion('es', esES)}>
                    <Spanish />
                    <LanguageLabel>Espanol</LanguageLabel>
                </Language>
                <Language onClick={() => handleRegion('en', enUS)}>
                    <Usa />
                    <LanguageLabel>English</LanguageLabel>
                </Language>
                <Menuitem theme={theme} href="https://www.conservation-strategy.org/" target="_blank">{header.linkWebsite}</Menuitem>
                </MenuShow>
                <BarMenu onClick={() => setVisibleSidebar(true)}>
                    <Bar stroke={theme === 'white' ? '#000': '#fff'} />
                </BarMenu>
            </Container>
        </ContainerHeader>
        <Sidebar visible={visibleSidebar} onClose={() => setVisibleSidebar(false)} />
        </>
    )
}

export default Header