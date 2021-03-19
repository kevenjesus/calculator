import { useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Headline, Text } from 'pages/Introduction/style'
import { ItemType, Title, Paragraphy, Thumbnail } from './style'
import Image from 'assets/images/example2.svg'

const ALLUVIUM = 'ALLUVIUM'
const FERRY = 'FERRY';
const PIT = 'PIT';

const ValuationMethod = () => {
    const [state, setState] = useState(ALLUVIUM);
    return (
        <>
            <Headline>Tipo de garimpo</Headline>
            <Text>
                Existem diferentes perspectivas econômicas para o cálculo  valor dos impactos sociais e ambientais. Elas se baseiam em:
            </Text>

                <label style={{textAlign: 'left'}}>* Escolha uma opção</label>
            <Row>
                <Col md={4}>
                    <ItemType active={state === ALLUVIUM} onClick={() => setState(ALLUVIUM)}>
                        <Title>Aluvião</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col md={4}>
                    <ItemType active={state === FERRY} onClick={() => setState(FERRY)}>
                        <Title>Balsa</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col md={4}>
                    <ItemType active={state === PIT} onClick={() => setState(PIT)}>
                        <Title>Poço</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
                        </Paragraphy>
                    </ItemType>
                </Col>
            </Row>
        </>
    )
}

export default ValuationMethod;