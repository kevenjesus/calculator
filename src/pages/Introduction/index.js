import { useState, useCallback, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { ABOUT, INTRODUCTION, HOW_USE_CALCULATOR, REGION, OVERFLOW, VALUATION_METHOD, ANALYSIS_UNIT, PIT_DEPTH } from './consts'
import { Container, Header, Language, LanguageContainer, ButtonsFixed, Go } from './style'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'

import { ReactComponent as Portuguese } from 'assets/icons/portuguese.svg'
import { ReactComponent as Spanish } from 'assets/icons/spanish.svg'
import { ReactComponent as Usa } from 'assets/icons/usa.svg'
import { ReactComponent as GoBack } from 'assets/icons/goBack.svg'

import About from './About'
import IntroductionPage from './Introduction'
import HowUseCalculator from './HowUseCalculator'
import Region from './Region'
import ValuationMethod from './ValuationMethod'
import AnalysisUnit from './AnalysisUnit'
import PitDepth from './PitDepth'
import Overflow from './Overflow'
import { AppContext, stateTypes } from 'utils/AppContext';


const Content = ({step}) => {
    switch(step) {
        case ABOUT:
        default:
            return <About />
        case INTRODUCTION:
            return <IntroductionPage />
        case HOW_USE_CALCULATOR:
            return <HowUseCalculator />
        case REGION:
            return <Region />
        case VALUATION_METHOD:
            return <ValuationMethod />
        case ANALYSIS_UNIT:
            return <AnalysisUnit />
        case PIT_DEPTH:
            return <PitDepth />
        case OVERFLOW:
            return <Overflow />
    }
}


const Introduction = () => {
    const [step, setStep] = useState(null);
    const {state, dispatch} = useContext(AppContext) 
    const {calculator} = state;
    const history = useHistory();

    useEffect(() => {
        const { location } = history;
        const { state } = location
        if(state) {
            setStep(state.step);
        }else {
            setStep(ABOUT)
        }
    }, [history])

    const NextStep = useCallback(() => {
        if(step === ANALYSIS_UNIT) {
            if(calculator.qtdAnalysis.value === '') {
                dispatch({type: stateTypes.SET_QTD_ANALYS_UNIT, payload: {...calculator.qtdAnalysis, error: true}});
            }else if(!calculator.knowRegion) {
                history.push('/loading')
            }else {
                setStep(step+1)
            }
        }else if(step === OVERFLOW ) {
            history.push('/loading')
        }else {
            setStep(step+1)
        }
    }, [step, setStep, history, dispatch, calculator]);

    const PreviosStep = useCallback(() => {
        setStep(step+-1);
    }, [step, setStep]);

    const SkipIntroduction = useCallback(() => {
        history.push('/calculator')
    }, [history])
    
    return (
        <Container>
            <Header>
                <Go hidden={step === ABOUT} onClick={PreviosStep}>
                    <GoBack />
                    <span>Voltar</span>
                </Go>
                <LanguageContainer>
                    <Language>
                        <Portuguese />
                    </Language>
                    <Language>
                        <Spanish />
                    </Language>
                    <Language>
                        <Usa />
                    </Language>
                </LanguageContainer>
            </Header>
            <Content 
                step={step} />
            <ButtonsFixed>
                <Grid>
                    <Row between="sm">
                        <Col xs={6} sm={4} md={3}>
                            <Button variant="default" onClick={SkipIntroduction}>Pular introdução</Button>
                        </Col>
                        <Col xs={6} sm={4} md={3}>
                            <Button onClick={NextStep}>Prosseguir</Button>
                        </Col>
                    </Row>
                </Grid>
            </ButtonsFixed>
        </Container>
    )
    
}

export default Introduction;