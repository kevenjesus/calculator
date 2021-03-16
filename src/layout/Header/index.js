import { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ContainerHeader, Container, LogoContainer, LogoName, LogoSlogan, BarMenu, MenuShow } from './style'
import { Language, LanguageLabel, Menuitem } from 'layout/Sidebar/style'
import { AppContext } from 'utils/AppContext';
import Sidebar from 'layout/Sidebar'

import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { ReactComponent as Bar } from 'assets/icons/bar.svg'
import { ReactComponent as Portuguese } from 'assets/icons/portuguese.svg'
import { ReactComponent as Spanish } from 'assets/icons/spanish.svg'
import { ReactComponent as Usa } from 'assets/icons/usa.svg'

const Header = () => {
    const [visibleSidebar, setVisibleSidebar] = useState(false);
    const [notRender, setNoteRender] = useState(false);
    const {state} = useContext(AppContext)
    const location = useLocation();
    const { language } = state;
    const { header } = language;
    
    useEffect(() => {
        const { pathname } = location;
        const isRender = ['/introduction'].findIndex(a => a === pathname);
        setNoteRender(isRender);
    }, [location])

    if(!notRender) {
        return null;
    }
    
    return (
        <>
        <ContainerHeader>
            <Container>
                <LogoContainer>
                    <Logo />
                    <div style={{marginLeft: '10px'}}>
                        <LogoName>{header.naming}</LogoName>
                        <LogoSlogan>{header.slogan}</LogoSlogan>
                    </div>
                </LogoContainer>

                <MenuShow>
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
                <Menuitem href="https://www.conservation-strategy.org/" target="_blank">{header.linkWebsite}</Menuitem>
                </MenuShow>
                <BarMenu onClick={() => setVisibleSidebar(true)}>
                    <Bar />
                </BarMenu>
            </Container>
        </ContainerHeader>
        <Sidebar visible={visibleSidebar} onClose={() => setVisibleSidebar(false)} />
        </>
    )
}

export default Header