import { useState, useRef } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Headline } from 'pages/Introduction/style'
import { ItemType, Title, Paragraphy, Thumbnail } from './style'
import Image from 'assets/images/example2.svg'

const AnalysisUnit = () => {
    const [state, setState] = useState(0);
    const ref = useRef();
    
    const handleState = (go) => {
        setState(go);
        const refTop = ref.current.getBoundingClientRect().top;
        window.scrollTo(refTop, 1000);
    }

    return (
        <>
            <Headline>Qual base de informação você usará para o cálculo de impacto?</Headline>
            
            <Row center="sm">
                <Col md={8}>
                <label style={{textAlign: 'left'}}>* Escolha uma opção</label>
            <Row>
                <Col xs={6}>
                    <ItemType active={state === 0} onClick={() => handleState(0)}>
                        <Title>Quantidade de ouro</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col xs={6}>
                    <ItemType active={state === 1} onClick={() => handleState(1)}>
                        <Title>Tamanho do garimpo</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col xs={12} sm={4}>
                    <label ref={ref} style={{textAlign: 'left'}}>* Digite o valor em {state === 0 ? 'gramas' : 'hectares'}</label>
                    <input type="text" placeholder={state === 0 ? 'quantidade de gramas' : 'quantos hectares'} />
                </Col>
            </Row>
            </Col>
            </Row>
        </>
    )
}

export default AnalysisUnit;