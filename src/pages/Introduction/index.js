import {  useCallback, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { ABOUT, INTRODUCTION, HOW_USE_CALCULATOR, EXTRATION_TYPE, ANALYSIS_UNIT } from './consts'
import { Container, Header, ButtonsFixed, Go } from './style'
import { Button } from 'theme'
import { Row, Col, Grid } from 'react-flexbox-grid'

import { ReactComponent as GoBack } from 'assets/icons/goBack.svg'

import IntroductionPage from './Introduction'
import HowUseCalculator from './HowUseCalculator'
import ExtrationType from './ExtractionType'
import AnalysisUnit from './AnalysisUnit'
import { AppContext, stateTypes } from 'utils/AppContext';
import calcResults from 'pages/Calculator/Form/calcResults';
import { useAlert } from 'react-alert';


const Content = ({step}) => {
    switch(step) {
        case INTRODUCTION:
        default:
            return <IntroductionPage />
        case HOW_USE_CALCULATOR:
            return <HowUseCalculator />
        case EXTRATION_TYPE:
            return <ExtrationType />
        case ANALYSIS_UNIT:
            return <AnalysisUnit />
    }
}


const Introduction = () => {
    const {state, dispatch} = useContext(AppContext) 
    const {calculator, introduction, language, priceUSDtoBRL} = state;
    const { step } = introduction
    const history = useHistory();
    const alert = useAlert();

    useEffect(() => {
        const { location } = history
        const { state } = location
        if(state) {
            dispatch({type: stateTypes.SET_STEP, payload: { step: state.step}});
        }else {
            dispatch({type: stateTypes.SET_STEP, payload: { step: INTRODUCTION}});
        }
    }, [history, dispatch])

    const NextStep = useCallback(() => {
        if(step === ANALYSIS_UNIT) {
            alert.removeAll()
            if(calculator.qtdAnalysis.value === '') {
                dispatch({type: stateTypes.SET_QTD_ANALYS_UNIT, payload: {...calculator.qtdAnalysis, error: true}});
                alert.error(<span style={{textTransform: 'initial'}}>Por favor. Preencha o valor de unidade</span>)
            }else {
                calcResults(state, dispatch, priceUSDtoBRL)
                history.push('/loading')
            }
        }else {
            dispatch({type: stateTypes.SET_STEP, payload: { step: step+1}});
        }
    }, [state, step, dispatch, history, calculator, alert, priceUSDtoBRL]);

    const PreviosStep = useCallback(() => {
        dispatch({type: stateTypes.SET_STEP, payload: { step: step-1}});
    }, [step, dispatch]);

    const SkipIntroduction = useCallback(() => {
        history.push('/calculator')
    }, [history])

    if(step === null || step === undefined) {
        return false;
    }
    
    return (
        <Container>
            <Header>
                <Go hidden={step === ABOUT} onClick={PreviosStep}>
                    <GoBack />
                    <span>{language.comeBack}</span>
                </Go>
            </Header>
            <Content 
                step={step} />
            <ButtonsFixed>
                <Grid>
                <Row between="sm">
                    <Col xs={6} sm={4} md={3}>
                        <Button variant="default" onClick={SkipIntroduction}>{language.introduction.buttons.skip}</Button>
                    </Col>
                    <Col xs={6} sm={4} md={3}>
                        <Button onClick={NextStep}>{language.introduction.buttons.next}</Button>
                    </Col>
                </Row>
                </Grid>
            </ButtonsFixed>
        </Container>
    )
    
}

export default Introduction;