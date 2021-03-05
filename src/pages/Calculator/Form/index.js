import { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button, RadioBox } from 'theme'
import { Container } from './style'
import { ButtonFixed } from 'pages/Calculator/ImpactsStyles'
import { YES, NO, IMPACTED_AREA, AMOUNT_GOLD, OPPORTUNITY_COST, REPLACEMENT_COST_OF_AREA_RECOVERY } from './consts'
import Conditional from 'components/Conditional'
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

const dataOverflow = [
    {
        name: 'overflow',
        label: 'Sim',
        value: YES,
        checked: true
    },
    {
        name: 'overflow',
        label: 'Não',
        value: NO,
        checked: false
    },
]

const dataPitDepth = [
    {
        label: '2,5 metros',
        value: 2.5
    },
    {
        label: '5 metros',
        value: 5
    },
    {
        label: '7,5 metros',
        value: 7.5
    },
    {
        label: '10 metros',
        value: 10
    },
    {
        label: '12,5 metros',
        value: 12.5
    },
    {
        label: '15 metros',
        value: 15
    },
    {
        label: '17,5 metros',
        value: 17.5
    },
    {
        label: '20 metros',
        value: 20
    },
]

const RadioBoxCondicional = ({state, setState}) => {
    return (
        <>
            {
                state.map(({name, label, value, checked}) => (
                    <RadioBox key={label} name={name} checked={checked} value={value} onChange={setState}>
                        {label}
                    </RadioBox>
                ))
            }
        </>
    )
}


const Form = () => {
    const [regionList, setRegionList] = useState(dataRegion)
    const [knowRegion, setKnowRegion] = useState(true);
    const [stateList, setStateList] = useState([]);
    const [state, setState] = useState('');
    const [counties, setCounties] = useState([]);
    const [country, setCountry] = useState('');
    const [analysisUnit, setAnalysisUnit] = useState(IMPACTED_AREA);
    const [overflowList, setOverflowList] = useState(dataOverflow);
    const [overflow, setOverflow] = useState(NO);
    const [pitDepth, setPitDepth] = useState(2.5);
    const [valuatioMethod, setValuationMethod] = useState(OPPORTUNITY_COST)

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

    const handleAnalysisUnit = useCallback((e) => {
        const { value } = e.target;
        setAnalysisUnit(Number(value));
    }, [])

    const handleOverflow = useCallback((e) => {
        const { value } = e.target;
        const overflowListUpdate = overflowList.map(r => {
            r.checked = false;
            if(r.value === Number(value)) {
                r.checked = !r.checked
            }
            return r;
        })
        setOverflowList(overflowListUpdate)
        setOverflow(Number(value) === YES);
    }, [setOverflowList, setOverflow, overflowList])

    const handlePitDepth = useCallback((e) => {
        const { value } = e.target;
        setPitDepth(Number(value))
    }, []);

    const handleValuationMethod = useCallback((e) => {
        const { value } = e.target;
        setValuationMethod(Number(value))
    }, [])

    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <label>Você sabe a localização do garimpo?</label>
                        <RadioBoxCondicional state={regionList} setState={handleRegion} />
                    </Col>
                </Row>
                <Conditional check={knowRegion}>
                    <Row>
                        <Col xs={12} sm={6}>
                            <label>Região</label>
                            <select name="state" value={state} onChange={handleState}>
                            {
                                stateList.map(({sigla, id}) => (
                                    <option key={id} value={id}>{sigla}</option>
                                ))
                            }
                            </select>
                        </Col>
                        <Col xs={12} sm={6}>
                            <label>Municipio</label>
                            <select name="state" value={country} onChange={handleCountry}>
                                {
                                    counties.map(({nome, id}) => (
                                        <option key={id} value={id}>{nome}</option>
                                    ))
                                }
                            </select>
                        </Col>
                    </Row>
                </Conditional>
                <Row>
                    <Col xs={6} sm={4}>
                        <label>Unidade de analise</label>
                        <select name="analysisUnit" value={analysisUnit} onChange={handleAnalysisUnit}>
                            <option value={IMPACTED_AREA}>Área impactada</option>
                            <option value={AMOUNT_GOLD}>Quantidade de ouro </option>
                        </select>
                    </Col>
                    <Col xs={6} sm={3}>
                        <label>Valor</label>
                        <input type="text" name="valor" placeholder={analysisUnit === IMPACTED_AREA ? 'Hectares' : 'Gramas'} />
                    </Col>
                    <Conditional check={knowRegion}>
                        <Col xs={12} sm={5}>
                            <label>Houve Transbordamento?</label>
                            <RadioBoxCondicional state={overflowList} setState={handleOverflow} />
                        </Col>
                    </Conditional>
                </Row>
                <Row>
                    <Conditional check={knowRegion}>
                        <Col xs={12} sm={6}>
                            <label>Profundidade da cava</label>
                            <select name="pitdepth" value={pitDepth} onChange={handlePitDepth}>
                                {
                                    dataPitDepth.map(({label, value}) => <option key={value} value={value}>{label}</option>)
                                }
                            </select>
                        </Col>
                    </Conditional>
                    <Col xs={12} sm={6}>
                        <label>Método de valoração</label>
                        <select name="valuationMethod" value={valuatioMethod} onChange={handleValuationMethod}>
                            <option value={OPPORTUNITY_COST}>Custo de oportunidade</option>
                            <option value={REPLACEMENT_COST_OF_AREA_RECOVERY}>Custo de reposição ou recuperação de área</option>
                        </select>
                    </Col>
                </Row>
                
                <ButtonFixed>
                    <Row>
                        <Col xs={12} smOffset={4} sm={4}>
                            <Button onClick={() => history.push('/loading')}>Calcular impactos</Button>
                        </Col>
                    </Row>
                </ButtonFixed>
                

            </Grid>
       </Container>
    )
}

export default Form;