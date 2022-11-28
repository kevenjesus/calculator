import { useState, useRef, useContext, useCallback, useEffect } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Headline } from 'pages/Introduction/style'
import { AppContext, stateTypes } from 'utils/AppContext'
import { IMPACTED_AREA, AMOUNT_GOLD, YEARS_OF_MINING, ALLUVIUM, FERRY, QTD_FERRY } from 'pages/Calculator/Form/consts'
import { TextField } from 'theme'
import ExtractionType from './ExtractionType'
import Conditional from 'components/Conditional'
import { useAlert } from 'react-alert'



const AnalysisUnit = () => {
    const [ state, setState ] = useState(IMPACTED_AREA);
    const { state: stateContext, dispatch} = useContext(AppContext);
    const { language, calculator} = stateContext
    const { pitDepth, valuatioMethod } = calculator;
    const {introduction, calculatorForm} = language
    const ref = useRef();
    const alert = useAlert()
    const dataPitDepth = [
        {
            label: '2,5 '+calculatorForm.values.pitDepth.meters+' ('+language.defaultValue+')',
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
        alert.removeAll()
        if(value === '' || Number(value) > 0) {
            dispatch({type: stateTypes.SET_QTD_ANALYS_UNIT, payload: { value, error: value === '' }})
            alert.error(<span style={{textTransform: 'initial'}}>Por favor. Preencha o valor de unidade</span>)
        }
    }, [dispatch, alert])

    useEffect(() => {
        const form = JSON.parse(sessionStorage.getItem('@Calculator/form'))
        
        if(valuatioMethod === ALLUVIUM) {
            if(form && form.analysisUnit) {
                setState(form.analysisUnit)
            }else {
                setState(IMPACTED_AREA)
                dispatch({type: stateTypes.SET_ANALYS_UNIT, payload: IMPACTED_AREA })
            }
            
        }else if(valuatioMethod === FERRY) {
            if(form && form.analysisUnit) {
                setState(form.analysisUnit)
            }else {
                setState(QTD_FERRY)
                dispatch({type: stateTypes.SET_ANALYS_UNIT, payload: QTD_FERRY })
            }
            
        }else {
            if(form && form.analysisUnit) {
                setState(form.analysisUnit)
            }else {
                setState(YEARS_OF_MINING)
                dispatch({type: stateTypes.SET_ANALYS_UNIT, payload: YEARS_OF_MINING })
            }
            
        }
    }, [dispatch, valuatioMethod])

    let placeholder;
    if(state === AMOUNT_GOLD) {
        placeholder = calculatorForm.values.qtdAnalysisUnit.grams
    }else if(state === IMPACTED_AREA) {
        placeholder = calculatorForm.values.qtdAnalysisUnit.hactare
    }else if (state === YEARS_OF_MINING) {
        placeholder = calculatorForm.values.qtdAnalysisUnit.years
    }else {
        placeholder = calculatorForm.values.qtdAnalysisUnit.ferry
    }


    return (
        <>
            <Headline>{introduction.analysisUnit.headline}</Headline>
            
            <Row center="sm">
                <Col md={8}>
                <label>{introduction.analysisUnit.chooseOption}</label>
            <Row>
                <ExtractionType type={valuatioMethod} state={state} translate={introduction} handleState={handleState} />
            
                <Col xs={12} smOffset={valuatioMethod === ALLUVIUM ? 2 : 0} sm={4}>
                    <br />
                    <TextField 
                        ref={ref}
                        error={stateContext.calculator.qtdAnalysis.error}
                        label={`${introduction.analysisUnit.input_qtdAnalysis} ${placeholder}`} 
                        type="number" 
                        placeholder={placeholder}
                        onChange={handleQtdAnalysis}
                        value={stateContext.calculator.qtdAnalysis.value} />
                </Col>
                <Conditional check={valuatioMethod === ALLUVIUM}>
                    <Col xs={12} sm={4}> 
                        <br />
                        <label>* {introduction.pitDepth.headline}</label>
                        <select name="pitdepth" value={pitDepth} onChange={handlePitDepth}>
                            {
                                dataPitDepth.map(({label, value}) => <option key={value} value={value}>{label}</option>)
                            }
                        </select>
                    </Col>
                </Conditional>
            </Row>
            </Col>
            </Row>
        </>
    )
}

export default AnalysisUnit;