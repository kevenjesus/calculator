import { useCallback, useContext } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Headline, Text } from 'pages/Introduction/style'
import { ItemType, Title, Paragraphy, Thumbnail } from './style'
import { AppContext, stateTypes } from 'utils/AppContext'
import Image from 'assets/images/example2.svg'
import { ALLUVIUM, FERRY, PIT } from 'pages/Calculator/Form/consts'

const ValuationMethod = () => {
    const {state, dispatch} = useContext(AppContext);
    const { calculator } = state

    const handleOption = useCallback((value) => {
        dispatch({type: stateTypes.SET_VALUATION_METHOD, payload: value})
    }, [dispatch])
    return (
        <>
            <Headline>Tipo de garimpo</Headline>
          

                <label style={{textAlign: 'left'}}>* Escolha uma opção</label>
            <Row>
                <Col md={4}>
                    <ItemType active={calculator.valuatioMethod === ALLUVIUM} onClick={() => handleOption(ALLUVIUM)}>
                        <Title>Aluvião</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col md={4}>
                    <ItemType active={calculator.valuatioMethod === FERRY} onClick={() => handleOption(FERRY)}>
                        <Title>Balsa</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col md={4}>
                    <ItemType active={calculator.valuatioMethod === PIT} onClick={() => handleOption(PIT)}>
                        <Title>Poço</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
                        </Paragraphy>
                    </ItemType>
                </Col>
            </Row>
            <Text>
                caso não seja especificado o tipo, serão considerados os impactos do tipo de garimpo mais comum na Amazônia, o garimpo de aluvião
            </Text>
        </>
    )
}

export default ValuationMethod;