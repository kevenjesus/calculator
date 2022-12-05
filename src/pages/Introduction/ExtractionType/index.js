import { useCallback, useContext, useEffect } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Headline, Text } from 'pages/Introduction/style'
import { ItemType, Title, Paragraphy, Thumbnail } from './style'
import { AppContext, stateTypes } from 'utils/AppContext'
import Aluviao from 'assets/images/aluviao-min.jpg'
import Poco from 'assets/images/poco-min.jpg'
import Balsa from 'assets/images/Balsa-min.jpg'
import RetortaIMG from 'assets/images/retorta.jpeg'
import { ALLUVIUM, FERRY, NO, PIT, YES } from 'pages/Calculator/Form/consts'
import RadioBoxConditional from 'components/RadioBoxConditional'

const ExtrationType = () => {
    const {state, dispatch} = useContext(AppContext);
    const { calculator, language } = state
    const { retort } = calculator
    const { introduction } = language

    const handleOption = useCallback((value) => {
        dispatch({type: stateTypes.SET_VALUATION_METHOD, payload: value})
    }, [dispatch])

    const handleRetort = useCallback((e) => {
        const { value } = e.target
        const retort_update = retort.map(r => {
            r.checked = false
            if (r.value === Number(value)) {
                r.checked = !r.checked
            }
            return r
        })
        dispatch({type: stateTypes.SET_RETORT, payload: retort_update})
    }, [dispatch, retort])

    useEffect(() => {
        const dataRetort = [
            {
                name: 'retort',
                label: language.calculatorForm.commons.yes,
                value: YES,
                checked: false
            },
            {
                name: 'retort',
                label: language.calculatorForm.commons.no,
                value: NO,
                checked: true
            },
        ]
        dispatch({type: stateTypes.SET_RETORT, payload: dataRetort})
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Headline>{introduction.extractionType.headline}</Headline>
          

            <label style={{textAlign: 'left'}}>{introduction.analysisUnit.chooseOption}</label>
            <Row>
                <Col md={4}>
                    <ItemType active={calculator.valuatioMethod === ALLUVIUM} onClick={() => handleOption(ALLUVIUM)}>
                        <Title>{introduction.extractionType.values[0].type}</Title>
                        <Thumbnail src={Aluviao} alt="" />
                        <Paragraphy>
                        {introduction.extractionType.values[0].text}
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col md={4}>
                    <ItemType active={calculator.valuatioMethod === FERRY} onClick={() => handleOption(FERRY)}>
                    <Title>{introduction.extractionType.values[1].type}</Title>
                        <Thumbnail src={Balsa} alt="" />
                        <Paragraphy>
                        {introduction.extractionType.values[1].text}
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col md={4}>
                    <ItemType active={calculator.valuatioMethod === PIT} onClick={() => handleOption(PIT)}>
                    <Title>{introduction.extractionType.values[2].type}</Title>
                        <Thumbnail src={Poco} alt="" />
                        <Paragraphy>
                            {introduction.extractionType.values[2].text}
                        </Paragraphy>
                    </ItemType>
                </Col>
            </Row>
          
            <Text>
                {introduction.extractionType.text}
            </Text>                        
            <br />
            <br />
            <Row center="xs">
                <Col md={6}>
                <ItemType style={{display: 'flex'}}>
                    <Thumbnail width={200} src={RetortaIMG} style={{marginRight: '32px'}} alt="" />
                    <div style={{textAlign: 'left'}}>
                    <Title style={{textAlign: 'left', marginBottom: 0, height: 50}}>{introduction.extractionType.values[3].type}</Title>
                    <RadioBoxConditional state={retort} setState={handleRetort} />
                    <Paragraphy>
                        {introduction.extractionType.values[3].text}
                    </Paragraphy>
                    </div>
                </ItemType>
                </Col>
            </Row>
            <br />
            <br />
        </>
    )
}

export default ExtrationType;