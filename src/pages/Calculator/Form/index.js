import { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button } from 'theme'
import { Container } from './style'
import { ButtonFixed } from 'pages/Calculator/ImpactsStyles'
import { YES, NO, IMPACTED_AREA, AMOUNT_GOLD, OPPORTUNITY_COST, REPLACEMENT_COST_OF_AREA_RECOVERY, TX_PREVALENCE_MAX } from './consts'
import Conditional from 'components/Conditional'
import RadioBoxConditional from 'components/RadioBoxConditional'
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


const Form = () => {
    const [regionList, setRegionList] = useState(dataRegion)
    const [knowRegion, setKnowRegion] = useState(true);
    const [stateList, setStateList] = useState([]);
    const [state, setState] = useState('');
    const [counties, setCounties] = useState([]);
    const [country, setCountry] = useState('');
    const [analysisUnit, setAnalysisUnit] = useState(IMPACTED_AREA);
    const [qtdAnalysis, setQtdAnalysis] = useState("1000");
    const [overflowList, setOverflowList] = useState(dataOverflow);
    const [overflow, setOverflow] = useState(NO);
    const [pitDepth, setPitDepth] = useState(2.5);
    const [valuatioMethod, setValuationMethod] = useState(OPPORTUNITY_COST)
    const [txPrevalencia, setTxPrevalencia] = useState(TX_PREVALENCE_MAX)

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

    const handleQtdAnalysis = useCallback((e) => {
        const { value } = e.target;
        setQtdAnalysis(value)
    })

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

    const handleTxPrevalencia = useCallback((e) => {
        const { value } = e.target;
        setTxPrevalencia(Number(value));
    }, [])

    
  const submitCalc = () => {
    
    // Metodo de valoração
    //--- custo de oportunidade

    // sem transboardamento = 1
    // com transboardamento = 12
    const multOverflow = overflow === '0' ? 12 : 1;

    function calcImpacto(valor, price) {
      const toHectare = (valor * multOverflow) * 0.0001907
      return toHectare * price
    }

    // taxa, periodo, 
    function ValorPresente(rate, nper, pmt) {
      rate = rate / 100.0;
      return pmt / rate * (1 - Math.pow(1 + rate, -nper));
  }

    // impacto 1: bioprospeccao
    const bioprospeccao = calcImpacto(Number(qtdAnalysis), 56.52)
    const totalBioprospeccao = ValorPresente(0.03, 30, bioprospeccao)
    //console.log('valor bioproespecção', totalBioprospeccao)

    // impacto 2: carbono
    const totalCarbono = calcImpacto(Number(qtdAnalysis), 25*200)
    //console.log('valor carbono',totalCarbono)

    // impacto 3: valor de uso
    const totalValorUso = calcImpacto(Number(qtdAnalysis), 59*17.75)
    //console.log('valor de uso',totalValorUso)

    // impacto 4: Recreação
    const recreacao = calcImpacto(Number(qtdAnalysis), 10.2)
    const totalRecreacao = ValorPresente(0.03, 30, recreacao)
   // console.log('valor de recreação ', totalRecreacao)

    // impacto 5: Valor de existencia
    const valorExistencia = calcImpacto(Number(qtdAnalysis), 13.07)
    const totalValorExistencia = ValorPresente(0.03, 30, valorExistencia)
   // console.log('valor de valor de existencia', totalValorExistencia)

    // impacto 6: Perda de QI (mercurio na saude humana)
    ////// Parte 01: grama de mercúrio que é metilado

    const toMercurio = (Number(qtdAnalysis) * 1 * 2.6)
    const toMetiladoWater = toMercurio * 0.072;
    const toMetilado = toMetiladoWater * 0.03;

    //console.log('total metilado', toMetilado)

    ///// Parte 02: Consumo total de mercúrio do mesmo indivíduo
          const pesoMedioIndividuo = 62.41;
          const gramasMercurio = (0.98/10000000);
          const diasEm50Anos = (365*50);
          const qtdGramasIndividuoDiaria = gramasMercurio*pesoMedioIndividuo

          const ingestaoDiaria = qtdGramasIndividuoDiaria*diasEm50Anos

    //// Parte 03: Populaçao afetada
          const PI = 3.14;
          

          const individuosAfetados = toMetilado/ingestaoDiaria; 

          const densidadePopulacionalRegiaoNorte = 6.00696;
          const AreaEm500km = PI*Math.pow(500,2)
          const populacaoAfetadaEm500km2 = densidadePopulacionalRegiaoNorte*AreaEm500km;
         
          const totalPopulacaoAfetada = individuosAfetados < populacaoAfetadaEm500km2 ? individuosAfetados : populacaoAfetadaEm500km2;

          const taxaNatalidade = 18.8/1000;
          const nascidosVivosAfetados = totalPopulacaoAfetada*taxaNatalidade

          const concentracaoMedoaMercurioCabelo = ingestaoDiaria/0.1;
          const desavioPadraoMedioMercurio = concentracaoMedoaMercurioCabelo/2;

          // valores fixos
          // valor final disnorm (0, 5.9, 2.95) = 0.022750132

           
          const pesoDaIncapacidade = 0.361;
          const agwt = 1;
          const constante = 0.1658;
          const txDesconto = 0.03;
          const anoIniciodaIncapacidade = 0;
          const beta = 0.04;
          const bplusr = -0.07;
          const duracaoDaIncapacidade = 72;
          const TxIncidencia = 4.13564; // fixo aguardando distnorm
          //const incidencia = TxIncidencia*(nascidosVivosAfetados/1000);
          const incidencia = TxIncidencia*(0.145088113/1000);
          const incidenciaTotalHomemeMulher = incidencia*2;
          const PesoDaIncapacidadePorIncidencia = incidenciaTotalHomemeMulher*pesoDaIncapacidade;
          const calculo1 = (constante*Math.exp(txDesconto*anoIniciodaIncapacidade))/(Math.pow(bplusr,2))
          const calculo2 = bplusr*(duracaoDaIncapacidade+anoIniciodaIncapacidade);
          const calculo3 = bplusr*(duracaoDaIncapacidade+anoIniciodaIncapacidade)-1;
          const calculo4 = Math.exp(bplusr*anoIniciodaIncapacidade)*(bplusr*anoIniciodaIncapacidade-1);
          const calculo5 = (1-agwt)/txDesconto;
          const calculo6 = (1-Math.exp(-txDesconto*duracaoDaIncapacidade));
          const daly = PesoDaIncapacidadePorIncidencia*(agwt*calculo1*((Math.exp(calculo2)*calculo3)-calculo4)+calculo5*calculo6);
          const UmDalyReais = 103599;
          const totalDalyPerdaQI = daly*UmDalyReais;

          // TRATAMENTO - sintomas neuropscicológicos em garimpeiros
          const QtdGramasGarimpeiroAno = 150.45;
          const QtdeGarimpeirosTotal = (qtdAnalysis / QtdGramasGarimpeiroAno);
          const ProbNeuroGarimpeiros = 0.72;
          const QtdeGarimpeirosAfetados = ProbNeuroGarimpeiros * QtdeGarimpeirosTotal;
          const CustoTratamentoNeuroporGarimpeiro  = 2244;
          const CustoTratamentoNeuroGarimpeiros = CustoTratamentoNeuroporGarimpeiro*QtdeGarimpeirosAfetados;

          // DALY - sintomas neuropscicológicos em garimpeiros	

          const PesoIncapacidadeNeuroGarimpeiros = 0.368;
          const PesoIncapacidadeNeuroGarimpeirosQtdGarimpeiros = PesoIncapacidadeNeuroGarimpeiros * QtdeGarimpeirosTotal;
          const DALYAnosGarimpeiro = txPrevalencia*PesoIncapacidadeNeuroGarimpeirosQtdGarimpeiros;
          const CustoTotalDALYGarimpeiros = UmDalyReais*DALYAnosGarimpeiro
          
          const CustoTotalGarimpeiros = CustoTotalDALYGarimpeiros+CustoTratamentoNeuroGarimpeiros 

          
        }

    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <label>Você sabe a localização do garimpo?</label>
                        <RadioBoxConditional state={regionList} setState={handleRegion} />
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
                        <input type="text" value={qtdAnalysis} onChange={handleQtdAnalysis} name="valor" placeholder={analysisUnit === IMPACTED_AREA ? 'Hectares' : 'Gramas'} />
                    </Col>
                    <Conditional check={knowRegion}>
                        <Col xs={12} sm={5}>
                            <label>Houve Transbordamento?</label>
                            <RadioBoxConditional state={overflowList} setState={handleOverflow} />
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
                    <Col xs={12} sm={!knowRegion ? 7 : 6}>
                        <label>Método de valoração</label>
                        <select name="valuationMethod" value={valuatioMethod} onChange={handleValuationMethod}>
                            <option value={OPPORTUNITY_COST}>Custo de oportunidade</option>
                            <option value={REPLACEMENT_COST_OF_AREA_RECOVERY}>Custo de reposição ou recuperação de área</option>
                        </select>
                    </Col>
                    <Col xs={12}>
                        <label>Taxa de prevalência</label>
                        <select name="txPrevalencia" value={txPrevalencia} onChange={handleTxPrevalencia}>
                            <option value="0.237">Minimo</option>
                            <option value="0.29">Médio</option>
                            <option value="0.343">Máximo</option>
                        </select>
                    </Col>
                </Row>
                
                <ButtonFixed>
                    <Row>
                        <Col xs={12} smOffset={4} mdOffset={0} sm={4} md={3}>
                            <Button onClick={submitCalc}>Calcular impactos</Button>
                        </Col>
                    </Row>
                </ButtonFixed>
                

            </Grid>
       </Container>
    )
}

export default Form;