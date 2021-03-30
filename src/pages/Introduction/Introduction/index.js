import { Link } from 'react-router-dom'
import { Headline, Text, ImpactedBox } from 'pages/Introduction/style'
import Image from 'assets/images/teste.svg'
import { Button } from 'theme'
import { Col, Row } from 'react-flexbox-grid'

const IntroductionPage = () => {
    return (
        <>
            <Headline>Introdução</Headline>
            <Text>
                O <strong>garimpo ilegal</strong> na Amazônia vem crescendo nos últimos anos, puxado pela alta do preço do ouro no mercado internacional.
             </Text>
             <Text>A atividade gera impactos sobre:</Text>
            <ImpactedBox>
                <img src={Image} alt="" />
                <div style={{marginLeft: '30px'}}>
                    <h2>Desmatamento</h2>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at </Text>
               </div>
            </ImpactedBox>
            <ImpactedBox>
                <img src={Image} alt="" />
                <div style={{marginLeft: '30px'}}>
                    <h2>Assoreamento dos rios</h2>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at </Text>
               </div>
            </ImpactedBox>
            <ImpactedBox>
                <img src={Image} alt="" />
                <div style={{marginLeft: '30px'}}>
                    <h2>Contaminação por mercurio</h2>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at </Text>
               </div>
            </ImpactedBox>
            <Text>
                A calculadora estima valores para cada um desses impactos. Os valores dependem do contexto.&nbsp;
            </Text>
            <Row>
                <Col sm={5}>
                    <Link to='/introduction/context-value'>
                        <Button variant="secondary">Saiba mais (contexto e valor)</Button>
                    </Link>
                </Col>
            </Row>
            
            
            
        </>
    )
}

export default IntroductionPage;