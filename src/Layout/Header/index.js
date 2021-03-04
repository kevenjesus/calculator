import { ContainerHeader, Container, LogoContainer, LogoName, LogoSlogan, BarMenu } from './style'
import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { ReactComponent as Bar } from 'assets/icons/bar.svg'
import Sidebar from 'Layout/Sidebar'
import { useState } from 'react'

const Header = () => {
    const [visibleSidebar, setVisibleSidebar] = useState(false);
    return (
        <>
        <ContainerHeader>
            <Container>
                <LogoContainer>
                    <Logo />
                    <div style={{marginLeft: '10px'}}>
                        <LogoName>Calculadora</LogoName>
                        <LogoSlogan>impactos do garimpo</LogoSlogan>
                    </div>
                </LogoContainer>
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