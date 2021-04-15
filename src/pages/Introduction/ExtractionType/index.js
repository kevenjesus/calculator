import { useCallback, useContext } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Headline, Text } from 'pages/Introduction/style'
import { ItemType, Title, Paragraphy, Thumbnail } from './style'
import { AppContext, stateTypes } from 'utils/AppContext'
import Image from 'assets/images/example2.svg'
import { ALLUVIUM, FERRY, PIT } from 'pages/Calculator/Form/consts'

const ExtrationType = () => {
    const {state, dispatch} = useContext(AppContext);
    const { calculator, language } = state
    const { introduction } = language

    const handleOption = useCallback((value) => {
        dispatch({type: stateTypes.SET_VALUATION_METHOD, payload: value})
    }, [dispatch])
    return (
        <>
            <Headline>{introduction.extractionType.headline}</Headline>
          

            <label style={{textAlign: 'left'}}>* Escolha uma opção</label>
            <Row>
                <Col md={4}>
                    <ItemType active={calculator.valuatioMethod === ALLUVIUM} onClick={() => handleOption(ALLUVIUM)}>
                        <Title>{introduction.extractionType.values[0].type}</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                        {introduction.extractionType.values[0].text}
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col md={4}>
                    <ItemType active={calculator.valuatioMethod === FERRY} onClick={() => handleOption(FERRY)}>
                    <Title>{introduction.extractionType.values[1].type}</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                        {introduction.extractionType.values[1].text}
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col md={4}>
                    <ItemType active={calculator.valuatioMethod === PIT} onClick={() => handleOption(PIT)}>
                    <Title>{introduction.extractionType.values[2].type}</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                        {introduction.extractionType.values[2].text}
                        </Paragraphy>
                    </ItemType>
                </Col>
            </Row>
            <Text>
                {introduction.extractionType.text}
            </Text>
        </>
    )
}

export default ExtrationType;