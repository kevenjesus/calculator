import { Link } from 'react-router-dom'
import { Headline, Text, ImpactedBox } from 'pages/Introduction/style'
import Btn01 from 'assets/images/[calculadora]botões_finais-01.svg'
import Btn02 from 'assets/images/[calculadora]botões_finais-02.svg'
import Btn03 from 'assets/images/[calculadora]botões_finais-03.svg'
import { Button } from 'theme'
import { Col, Row } from 'react-flexbox-grid'
import { useContext } from 'react'
import { AppContext } from 'utils/AppContext'

const IntroductionPage = () => {
    const { state } = useContext(AppContext)
    const { language } = state
    const { introduction } = language
    return (
        <>
            <Headline>{introduction.introduction.headline}</Headline>
            <Text>
                {introduction.introduction.paragraphy_01}
             </Text>
             <Text>{introduction.introduction.paragraphy_02}</Text>
            <ImpactedBox>
                <img src={Btn03} alt="" width="275" style={{marginTop: "-30px"}} />
                <div style={{marginLeft: '30px'}}>
                    <h2>{introduction.introduction.impacts[0].headline}</h2>
                    <Text>{introduction.introduction.impacts[0].text}</Text>
               </div>
            </ImpactedBox>
            <ImpactedBox>
                <img src={Btn02} alt="" width="275" style={{marginTop: "-30px"}} />
                <div style={{marginLeft: '30px'}}>
                    <h2>{introduction.introduction.impacts[1].headline}</h2>
                    <Text>{introduction.introduction.impacts[1].text}</Text>
               </div>
            </ImpactedBox>
            <ImpactedBox>
                <img src={Btn01} alt="" width="275" style={{marginTop: "-30px"}} />
                <div style={{marginLeft: '30px'}}>
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
                <Col sm={5}>
                    <Link to='/introduction/context-value'>
                        <Button variant="secondary">{introduction.buttons.moreContextValue}</Button>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default IntroductionPage;