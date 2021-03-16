import { useState, useRef, useContext, useCallback } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Headline } from 'pages/Introduction/style'
import { ItemType, Title, Paragraphy, Thumbnail } from './style'
import { AppContext, stateTypes } from 'utils/AppContext'
import { IMPACTED_AREA, AMOUNT_GOLD } from 'pages/Calculator/Form/consts'
import { TextField } from 'theme'
import Image from 'assets/images/example2.svg'

const AnalysisUnit = () => {
    const [state, setState] = useState(IMPACTED_AREA);
    const {state: stateContext, dispatch} = useContext(AppContext);
    const ref = useRef();
    
    const handleState = useCallback((go) => {
        setState(go);
        dispatch({type: stateTypes.SET_ANALYS_UNIT, payload: go })

        const refTop = ref.current.getBoundingClientRect().top;
        window.scrollTo(refTop, 1000);
    },[dispatch]);

    const handleQtdAnalysis = useCallback((e) => {
        const { value } = e.target;
        dispatch({type: stateTypes.SET_QTD_ANALYS_UNIT, payload: { value, error: value === '' }})
    }, [dispatch])

    return (
        <>
            <Headline>Qual base de informação você usará para o cálculo de impacto?</Headline>
            
            <Row center="sm">
                <Col md={8}>
                <label>* Escolha uma opção</label>
            <Row>
                <Col xs={6}>
                    <ItemType active={state === AMOUNT_GOLD} onClick={() => handleState(AMOUNT_GOLD)}>
                        <Title>Quantidade de ouro</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col xs={6}>
                    <ItemType active={state === IMPACTED_AREA} onClick={() => handleState(IMPACTED_AREA)}>
                        <Title>Tamanho do garimpo</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col xs={12} sm={4}>
                    <TextField 
                        ref={ref}
                        error={stateContext.calculator.qtdAnalysis.error}
                        label={`* Digite o valor em ${state === AMOUNT_GOLD ? 'gramas' : 'hectares'}`} 
                        type="text" 
                        placeholder={state === AMOUNT_GOLD ? 'quantidade de gramas' : 'quantos hectares'}
                        onChange={handleQtdAnalysis}
                        value={stateContext.calculator.qtdAnalysis.value} />
                </Col>
            </Row>
            </Col>
            </Row>
        </>
    )
}

export default AnalysisUnit;