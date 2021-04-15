import { useState, useRef, useContext, useCallback } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Headline } from 'pages/Introduction/style'
import { ItemType, Title, Paragraphy, Thumbnail } from './style'
import { AppContext, stateTypes } from 'utils/AppContext'
import { IMPACTED_AREA, AMOUNT_GOLD } from 'pages/Calculator/Form/consts'
import { TextField } from 'theme'
import Image from 'assets/images/example2.svg'


const AnalysisUnit = () => {
    const [ state, setState ] = useState(IMPACTED_AREA);
    const { state: stateContext, dispatch} = useContext(AppContext);
    const { language, calculator} = stateContext
    const { pitDepth } = calculator;
    const {introduction, calculatorForm} = language
    const ref = useRef();
    
    const dataPitDepth = [
        {
            label: '2,5 '+calculatorForm.values.pitDepth.meters+'',
            value: 2.5
        },
        {
            label: '5 '+calculatorForm.values.pitDepth.meters+'',
            value: 5
        },
        {
            label: '7,5 '+calculatorForm.values.pitDepth.meters+'',
            value: 7.5
        },
        {
            label: '10 '+calculatorForm.values.pitDepth.meters+'',
            value: 10
        },
        {
            label: '12,5 '+calculatorForm.values.pitDepth.meters+'',
            value: 12.5
        },
        {
            label: '15 '+calculatorForm.values.pitDepth.meters+'',
            value: 15
        },
        {
            label: '17,5 '+calculatorForm.values.pitDepth.meters+'',
            value: 17.5
        },
        {
            label: '20 '+calculatorForm.values.pitDepth.meters+'',
            value: 20
        },
    ]

    const handlePitDepth = useCallback((e) => {
        const { value } = e.target;
        dispatch({type: stateTypes.SET_PITDEPTH, payload: Number(value)})
    }, [dispatch]);

    const handleState = useCallback((go) => {
        setState(go);
        dispatch({type: stateTypes.SET_ANALYS_UNIT, payload: go })

        const refTop = ref.current.getBoundingClientRect().top;
        window.scrollTo(refTop, 1000);
    },[dispatch]);

    const handleQtdAnalysis = useCallback((e) => {
        const { value } = e.target;
        if(value === '' || Number(value) > 0) {
            dispatch({type: stateTypes.SET_QTD_ANALYS_UNIT, payload: { value, error: value === '' }})
        }
    }, [dispatch])

    return (
        <>
            <Headline>{introduction.analysisUnit.headline}</Headline>
            
            <Row center="sm">
                <Col md={8}>
                <label>{introduction.analysisUnit.chooseOption}</label>
            <Row>
                <Col xs={6}>
                    <ItemType active={state === AMOUNT_GOLD} onClick={() => handleState(AMOUNT_GOLD)}>
                        <Title>{introduction.analysisUnit.goldType.headline}</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            {introduction.analysisUnit.goldType.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
                <Col xs={6}>
                    <ItemType active={state === IMPACTED_AREA} onClick={() => handleState(IMPACTED_AREA)}>
                    <Title>{introduction.analysisUnit.goldMiningSize.headline}</Title>
                        <Thumbnail src={Image} alt="" />
                        <Paragraphy>
                            {introduction.analysisUnit.goldMiningSize.text}
                        </Paragraphy>
                    </ItemType>
                </Col>
            
                <Col xs={12} smOffset={2} sm={4}>
                    <br />
                    <TextField 
                        ref={ref}
                        error={stateContext.calculator.qtdAnalysis.error}
                        label={`* Digite o valor em ${state === AMOUNT_GOLD ? calculatorForm.values.qtdAnalysisUnit.grams : calculatorForm.values.qtdAnalysisUnit.hactare}`} 
                        type="number" 
                        placeholder={state === AMOUNT_GOLD ? calculatorForm.values.qtdAnalysisUnit.grams : calculatorForm.values.qtdAnalysisUnit.hactare}
                        onChange={handleQtdAnalysis}
                        value={stateContext.calculator.qtdAnalysis.value} />
                </Col>
                <Col xs={12} sm={4}> 
                    <br />
                    <label>* {introduction.pitDepth.headline}</label>
                    <select name="pitdepth" value={pitDepth} onChange={handlePitDepth}>
                        {
                            dataPitDepth.map(({label, value}) => <option key={value} value={value}>{label}</option>)
                        }
                    </select>
                </Col>
            </Row>
            </Col>
            </Row>
        </>
    )
}

export default AnalysisUnit;