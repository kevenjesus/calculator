import { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { ABOUT, INTRODUCTION, CONTEXT_VALUATION, HOW_USE_CALCULATOR, REGION, OVERFLOW, VALUATION_METHOD, ANALYSIS_UNIT, PIT_DEPTH } from './consts'
import { YES, NO } from 'pages/Calculator/Form/consts'
import { Container, Header, Language, LanguageContainer, ButtonsFixed, Go } from './style'
import { Button } from 'theme'
import { Grid, Row, Col } from 'react-flexbox-grid'

import { ReactComponent as Portuguese } from 'assets/icons/portuguese.svg'
import { ReactComponent as Spanish } from 'assets/icons/spanish.svg'
import { ReactComponent as Usa } from 'assets/icons/usa.svg'
import { ReactComponent as GoBack } from 'assets/icons/goBack.svg'

import About from './About'
import IntroductionPage from './Introduction'
import ContextValue from './ContextValue'
import HowUseCalculator from './HowUseCalculator'
import Region from './Region'
import ValuationMethod from './ValuationMethod'
import AnalysisUnit from './AnalysisUnit'
import PitDepth from './PitDepth'
import Overflow from './Overflow'

import axios from 'axios'

const dataRegion = [
    {
        name: 'region',
        label: 'Sim',
        value: YES,
        checked: true
    },
    {
        name: 'region',
        label: 'Não',
        value: NO,
        checked: false
    },
]

const Content = ({step, knowRegion, regionList, stateList, state, country, counties, handleRegion, handleState, handleCountry}) => {
    switch(step) {
        case ABOUT:
        default:
            return <About />
        case INTRODUCTION:
            return <IntroductionPage />
        case CONTEXT_VALUATION:
            return <ContextValue />
        case HOW_USE_CALCULATOR:
            return <HowUseCalculator />
        case REGION:
            return <Region 
                    knowRegion={knowRegion}
                    regionList={regionList}
                    stateList={stateList}
                    state={state}
                    country={country}
                    counties={counties} 
                    handleRegion={handleRegion}
                    handleState={handleState}
                    handleCountry={handleCountry} />
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
    const [step, setStep] = useState(ABOUT);
    const [regionList, setRegionList] = useState(dataRegion)
    const [knowRegion, setKnowRegion] = useState(true);
    const [stateList, setStateList] = useState([]);
    const [state, setState] = useState('');
    const [counties, setCounties] = useState([]);
    const [country, setCountry] = useState('');
    const history = useHistory();

    const getCounties = useCallback(async (uf) => {
        await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
          .then(({data}) => {
            setCounties(data)
            setCountry(data[0].id)
          })
    }, [])

    useEffect(() => {
        const getStates = async () => {
            await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/regioes/1/estados')
              .then(({data}) => {
                setStateList(data)
                setState(data[0].id)
                getCounties(data[0].id)
              })
          }
          getStates();
    }, [getCounties])


    const handleRegion = useCallback((e) => {
        const { value } = e.target;
        const regionListUpdate = regionList.map(r => {
            r.checked = false;
            if(r.value === Number(value)) {
                r.checked = !r.checked
            }
            return r;
        })
        setRegionList(regionListUpdate)
        setKnowRegion(Number(value) === YES);
    }, [setRegionList, setKnowRegion, regionList])

    const handleState = useCallback((e) => {
        const { value } = e.target;
        getCounties(value)
        setState(value)
        
    }, [getCounties]);

    const handleCountry = useCallback((e) => {
        const { value } = e.target;
        setCountry(value)
    }, [])

    const NextStep = useCallback(() => {
        if(step === 8) {
            localStorage.setItem("introduction", true)
            history.push('/loading')
        }else {
            setStep(step+1)
        }
    }, [step, setStep]);

    const PreviosStep = useCallback(() => {
        setStep(step+-1);
    }, [step, setStep]);
    
    return (
        <Container>
            <Header>
                <Go hidden={step === 0} onClick={PreviosStep}>
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
                step={step} 
                knowRegion={knowRegion}
                regionList={regionList} 
                stateList={stateList} 
                state={state} 
                counties={counties} 
                country={country} 
                handleRegion={handleRegion} 
                handleState={handleState} 
                handleCountry={handleCountry} />
            <ButtonsFixed>
                <Grid>
                    <Row between="sm">
                        <Col xs={6} sm={4} md={3}>
                            <Button variant="default">Pular introdução</Button>
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