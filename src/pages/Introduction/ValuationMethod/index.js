import { useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Headline, Text } from 'pages/Introduction/style'
import { ItemType, Title, Paragraphy, Thumbnail } from './style'
import Image from 'assets/images/example2.svg'

const ValuationMethod = () => {
    const [state, setState] = useState(0);
    return (
        <>
            <Headline>Método de valoração de impactos</Headline>
            <Text>
                Existem diferentes perspectivas econômicas para o cálculo  valor dos impactos sociais e ambientais. Elas se baseiam em:
            </Text>

            
            <Row center="sm">
                <Col md={8}>

                <label style={{textAlign: 'left'}}>* Escolha uma opção</label>
            <Row>
                <Col xs={6}>
                    <ItemType active={state === 0} onClick={() => setState(0)}>
                        <Title>Custo de oportunidade</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col xs={6}>
                    <ItemType active={state === 1} onClick={() => setState(1)}>
                        <Title>Custo de reposição ou recuperação</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
                        </Paragraphy>
                    </ItemType>
                </Col>
            </Row>
            </Col>
            </Row>
        </>
    )
}

export default ValuationMethod;