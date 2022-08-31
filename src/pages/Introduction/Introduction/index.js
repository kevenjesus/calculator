import { Link } from 'react-router-dom'
import { Headline, Text, ImpactedBox } from 'pages/Introduction/style'
import Btn01 from 'assets/images/[calculadora]botões_finais-01.svg'
import Btn02 from 'assets/images/[calculadora]botões_finais-02.svg'
import Btn03 from 'assets/images/[calculadora]botões_finais-03.svg'
import { Button } from 'theme'
import { Col, Row } from 'react-flexbox-grid'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from 'utils/AppContext'

import Image from 'assets/images/(PT)Mapa_700dpi.jpeg'
import { countries_region } from 'components/CountrySelect'

const IntroductionPage = () => {
    const [isBrazil, setIsBrazil] = useState(false)
    const { state } = useContext(AppContext)
    const { language, country_region } = state
    const { introduction } = language
    
    useEffect(() => {
        if(country_region) {
            const selectedBrazil = country_region.country === countries_region[0].country
            setIsBrazil(selectedBrazil)
        }
    }, [country_region])


    return (
        <>
            <Headline>{introduction.introduction.headline}</Headline>
            {
                isBrazil && (
                    <>
                        <Text>
                            {introduction.introduction.paragraphy_01}
                        </Text>
                        <img src={Image} style={{width: 850, display: 'block', margin: '40px auto', maxWidth: '100%'}} alt="" />
                        <Text>{introduction.introduction.paragraphy_02}</Text>
                    </>
                )
            }
            
             
            <ImpactedBox>
                <img src={Btn03} alt="" width="220" style={{marginTop: "-30px"}} />
                <div>
                    <h2>{introduction.introduction.impacts[0].headline}</h2>
                    <Text>{introduction.introduction.impacts[0].text}</Text>
               </div>
            </ImpactedBox>
            <ImpactedBox>
                <img src={Btn02} alt="" width="220" style={{marginTop: "-30px"}} />
                <div>
                    <h2>{introduction.introduction.impacts[1].headline}</h2>
                    <Text>{introduction.introduction.impacts[1].text}</Text>
               </div>
            </ImpactedBox>
            <ImpactedBox>
                <img src={Btn01} alt="" width="220" style={{marginTop: "-30px"}} />
                <div>
                    <h2>{introduction.introduction.impacts[2].headline}</h2>
                    <Text>{introduction.introduction.impacts[2].text}</Text>
               </div>
            </ImpactedBox>
            <Text>
                {introduction.introduction.paragraphy_03}
            </Text>
            <Text>
                {introduction.introduction.paragraphy_04}
            </Text>
            <Row>
                <Col sm={3} lg={2}>
                    <Link to='/introduction/context-value'>
                        <Button variant="secondary">{introduction.buttons.moreContextValue}</Button>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default IntroductionPage;