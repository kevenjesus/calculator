import { useEffect, useCallback, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button, TextField } from 'theme'
import { Container } from './style'
import { ButtonFixed } from 'pages/Calculator/ImpactsStyles'
import { YES, IMPACTED_AREA, AMOUNT_GOLD, ALLUVIUM, FERRY, PIT, CATEGORY_DEFORESTATION, CATEGORY_MERCURY } from './consts'
import { AppContext, stateTypes } from 'utils/AppContext'
import Conditional from 'components/Conditional'
import RadioBoxConditional from 'components/RadioBoxConditional'
import normDist from 'utils/normDist'
import mockStates from 'mocks/state.json'
import mockCountries from 'mocks/countries.json'
import mockContry from 'mocks/country.json'


const Form = () => {
    const {state: stateContext, dispatch} = useContext(AppContext);
    const { calculator, language } = stateContext;
    const { 
        regionList, 
        knowRegion, 
        stateList, 
        state, 
        counties, 
        country,
        analysisUnit,
        qtdAnalysis,
        pitDepth,
        valuatioMethod,
        txPrevalence  } = calculator;    
    const { calculatorForm } = language;
    const history = useHistory();
    
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

    
    const getCounties = useCallback((uf) => {
        let dataCountries = [];
        mockCountries.forEach(m => {
            if(m.microrregiao.mesorregiao.UF.id === Number(uf)) {
                dataCountries.push(m);
            }
        })

        mockContry.forEach(country => {
            dataCountries.forEach(countries => {
                if(country.id === countries.id) {
                    countries.densidadePop2010 = country.densidadePop2010;
                    countries.densidadePop2060 = country.densidadePop2060;
                    countries.popUrbMunicipio = country.PopUrbMunicipio;
                    countries.popRuralMunicipio = country.PopRuralMunicipio;
                    countries.distanciaGarimpoCentro = country.Distancia_Garimpo_Centro;
                }
            })
        })

        console.log('dataCountries', dataCountries)

        dispatch({type: stateTypes.SET_COUNTIES, payload: dataCountries});
        dispatch({type: stateTypes.SET_COUNTRY, payload: dataCountries[0].id});
        
    }, [dispatch])

    useEffect(() => {
        const getStates = () => {
             const data = mockStates
             dispatch({type: stateTypes.SET_STATE_LIST, payload: data })
             dispatch({type: stateTypes.SET_STATE, payload: data[0]})
             getCounties(data[0].id)
          }
          if(state === '' && country === '') {
            getStates();
        }
          
    }, [getCounties, dispatch, state, country])


    const handleRegion = useCallback((e) => {
        const { value } = e.target;
        const regionListUpdate = regionList.map(r => {
            r.checked = false;
            if(r.value === Number(value)) {
                r.checked = !r.checked
            }
            return r;
        })
        dispatch({type: stateTypes.SET_REGION_LIST, payload: regionListUpdate})
        dispatch({type: stateTypes.SET_KNOW_REGION, payload: Number(value) === YES})
    }, [dispatch, regionList])

    const handleState = useCallback((e) => {
        const { value } = e.target;
        getCounties(value)
        dispatch({type: stateTypes.SET_STATE, payload: value})
        
    }, [getCounties, dispatch]);

    const handleCountry = useCallback((e) => {
        const { value } = e.target;
        dispatch({type: stateTypes.SET_COUNTRY, payload: value})
    }, [dispatch])

    const handleAnalysisUnit = useCallback((e) => {
        const { value } = e.target;
        dispatch({type: stateTypes.SET_ANALYS_UNIT, payload: Number(value) })
    }, [dispatch])

    const handleQtdAnalysis = useCallback((e) => {
        const { value } = e.target;
        dispatch({type: stateTypes.SET_QTD_ANALYS_UNIT, payload: { value, error: value === '' }})
    }, [dispatch])


    const handlePitDepth = useCallback((e) => {
        const { value } = e.target;
        dispatch({type: stateTypes.SET_PITDEPTH, payload: Number(value)})
    }, [dispatch]);

    const handleValuationMethod = useCallback((e) => {
        const { value } = e.target;
        dispatch({type: stateTypes.SET_VALUATION_METHOD, payload: Number(value)})
    }, [dispatch])

    const handleTxPrevalance = useCallback((e) => {
        const { value } = e.target;
        dispatch({type: stateTypes.SET_TX_PREVALENCE, payload: Number(value)})
    }, [dispatch])

    const checkFormIsInvalid = useCallback(() => {
        if(qtdAnalysis.value === '') {
            dispatch({type: stateTypes.SET_QTD_ANALYS_UNIT, payload: {...qtdAnalysis, error: true}});
            return true;
        } 
        return false;
    }, [dispatch, qtdAnalysis])

    
  const submitCalc = () => {

    const impacts = [];
    
    if(checkFormIsInvalid()) {
        return false;
    }
    
    // Metodo de valoração
    //--- custo de oportunidade

    // sem transboardamento = 1
    // com transboardamento = 12
    const overflow = 12

    function calcImpacto(valor, price) {
      const toHectare = (valor * overflow) * 0.0001907
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
    impacts.push({label: 'BioProspecção', displayName: 'BioProspecção', category: CATEGORY_DEFORESTATION, value: totalBioprospeccao});
    //console.log('valor bioproespecção', totalBioprospeccao)

    // impacto 2: carbono
    const totalCarbono = calcImpacto(Number(qtdAnalysis), 25*200)
    impacts.push({label: 'Carbono', displayName: 'Carbono', category: CATEGORY_DEFORESTATION, value: totalCarbono});
    //console.log('valor carbono',totalCarbono)

    // impacto 3: valor de uso
    const totalValorUso = calcImpacto(Number(qtdAnalysis), 59*17.75)
    impacts.push({label: 'Valor uso', displayName: 'Valor uso', category: CATEGORY_DEFORESTATION, value: totalValorUso});
    //console.log('valor de uso',totalValorUso)

    // impacto 4: Recreação
    const recreacao = calcImpacto(Number(qtdAnalysis), 10.2)
    const totalRecreacao = ValorPresente(0.03, 30, recreacao)
    impacts.push({label: 'Recreação', displayName: 'Recreação', category: CATEGORY_DEFORESTATION, value: totalRecreacao});
   // console.log('valor de recreação ', totalRecreacao)

    // impacto 5: Valor de existencia
    const valorExistencia = calcImpacto(Number(qtdAnalysis), 13.07)
    const totalValorExistencia = ValorPresente(0.03, 30, valorExistencia)
    impacts.push({label: 'Valor existencia', displayName: 'Valor existencia', category: CATEGORY_DEFORESTATION, value: totalRecreacao});
   // console.log('valor de valor de existencia', totalValorExistencia)

    // impacto 6: Perda de QI (mercurio na saude humana)
    ////// Parte 01: grama de mercúrio que é metilado

    const toMercurio = (Number(qtdAnalysis) * 1 * 2.6)
    const toMetiladoWater = toMercurio * 0.072;
    const toMetilado = toMetiladoWater * 0.03;

    //console.log('total metilado', toMetilado)

    ///// Parte 02: Consumo total de mercúrio do mesmo indivíduo
          const proporcaoRural = 0.61;
          const proporcaoUrbano = 0.39;
          const pesoIndividuoRural = 59.1;
          const pesoIndividuoUrbano = 70;
          const pesoMedioIndividuo = (proporcaoRural*pesoIndividuoRural)+(proporcaoUrbano*pesoIndividuoUrbano);
          const gramasMercurio = (0.98/10000000);
          const anos = 50
          const diasEm50Anos = (365*anos);
          const qtdGramasIndividuoDiaria = gramasMercurio*pesoMedioIndividuo
          const ingestaoDiaria = qtdGramasIndividuoDiaria*diasEm50Anos
        
          const nivelMedioContaminacaoPeixes = 0.5;
          const consumoMedioPeixePorDiaEmGramasRural = 144.5;
          const consumoMedioPeixePorDiaEmGramasUrbano = 57;
          const ingestaoMediaDiariaMicrogramaMercurioUrbano = (consumoMedioPeixePorDiaEmGramasUrbano*nivelMedioContaminacaoPeixes)/pesoIndividuoUrbano;
          const ingestaoMediaDiariaMicrogramaMercurioRural = (consumoMedioPeixePorDiaEmGramasRural*nivelMedioContaminacaoPeixes)/pesoIndividuoRural;
          const ingestaoMediaMercurioDiaria1IndividuoEmMicrogramasporkg = (proporcaoRural*ingestaoMediaDiariaMicrogramaMercurioRural)+(proporcaoUrbano*ingestaoMediaDiariaMicrogramaMercurioUrbano);
          const ingestaoMediaMercurioDiaria1IndividuoEmGramasporKg = ingestaoMediaMercurioDiaria1IndividuoEmMicrogramasporkg/1000000;
          const ingestaoMediaDiariaIndividuoEmGramaPorDia = ingestaoMediaMercurioDiaria1IndividuoEmGramasporKg*pesoMedioIndividuo;
          const ingestaoMediaMercurioEmAnos = (365*anos)*ingestaoMediaDiariaIndividuoEmGramaPorDia;


    //// Parte 03: Populaçao afetada
          const PI = 3.14;
          

          const individuosAfetados = toMetilado/ingestaoDiaria; 

          const densidadePopulacionalRegiaoNorte = 6.00696;
          const AreaEm500km = PI*Math.pow(500,2)
          const populacaoAfetadaEm500km2 = densidadePopulacionalRegiaoNorte*AreaEm500km;
         
          const totalPopulacaoAfetada = individuosAfetados < populacaoAfetadaEm500km2 ? individuosAfetados : populacaoAfetadaEm500km2;

          const taxaNatalidade = 18.8/1000;
          const nascidosVivosAfetados = totalPopulacaoAfetada*taxaNatalidade

          const concentracaoMediaMercurioCabelo = ingestaoMediaMercurioEmAnos/0.1;
          const desavioPadraoMedioMercurio = concentracaoMediaMercurioCabelo/2;

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
  
          // 0, 2, 4, 6, 8....36
          const disnorm0 = normDist(0, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm2 = normDist(2, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm4 = normDist(4, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm6 = normDist(6, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm8 = normDist(8, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm10 = normDist(10, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm12 = normDist(12, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm14 = normDist(14, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm16 = normDist(16, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm18 = normDist(18, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm20 = normDist(20, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm22 = normDist(22, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm24 = normDist(24, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm26 = normDist(26, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm28 = normDist(28, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm30 = normDist(30, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm32 = normDist(32, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm34 = normDist(34, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm36 = normDist(36, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm38 = normDist(38, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
          const disnorm40 = normDist(40, concentracaoMediaMercurioCabelo, desavioPadraoMedioMercurio, 1);
  
  
          const distNorm0ate2 = ((1 - disnorm0) - (1 - disnorm2)) * 1000 * 0.0005;
          const distNorm2ate4 = ((1 - disnorm2) - (1 - disnorm4)) * 1000 * 0.0022;
          const distNorm4ate6 = ((1 - disnorm4) - (1 - disnorm6)) * 1000 * 0.0034;
          const distNorm6ate8 = ((1 - disnorm6) - (1 - disnorm8)) * 1000 * 0.0046;
          const distNorm8ate10 = ((1 - disnorm8) - (1 - disnorm10)) * 1000 * 0.0066;
          const distNorm10ate12 = ((1 - disnorm10) - (1 - disnorm12)) * 1000 * 0.0079;
          const distNorm12ate14 = ((1 - disnorm12) - (1 - disnorm14)) * 1000 * 0.0101;
          const distNorm14ate16 = ((1 - disnorm14) - (1 - disnorm16)) * 1000 * 0.0116;
          const distNorm16ate18 = ((1 - disnorm16) - (1 - disnorm18)) * 1000 * 0.0131;
          const distNorm18ate20 = ((1 - disnorm18) - (1 - disnorm20)) * 1000 * 0.0156;
          const distNorm20ate22 = ((1 - disnorm20) - (1 - disnorm22)) * 1000 * 0.0173;
          const distNorm22ate24 = ((1 - disnorm22) - (1 - disnorm24)) * 1000 * 0.0199;
          const distNorm24ate26 = ((1 - disnorm24) - (1 - disnorm26)) * 1000 * 0.0218;
          const distNorm26ate28 = ((1 - disnorm26) - (1 - disnorm28)) * 1000 * 0.0237;
          const distNorm28ate30 = ((1 - disnorm28) - (1 - disnorm30)) * 1000 * 0.0267;
          const distNorm30ate32 = ((1 - disnorm30) - (1 - disnorm32)) * 1000 * 0.0288;
          const distNorm32ate34 = ((1 - disnorm32) - (1 - disnorm34)) * 1000 * 0.032;
          const distNorm34ate36 = ((1 - disnorm34) - (1 - disnorm36)) * 1000 * 0.0343;
          const distNorm36ate38 = ((1 - disnorm36) - (1 - disnorm38)) * 1000 * 0.0366;
          const distNorm38ate40 = ((1 - disnorm38) - (1 - disnorm40)) * 1000 * 0.0402;
  
          const txIncidencia = distNorm0ate2 + distNorm2ate4 + distNorm4ate6 + distNorm6ate8 + distNorm8ate10 + distNorm10ate12 + distNorm12ate14 +
              distNorm14ate16 + distNorm16ate18 + distNorm18ate20 + distNorm20ate22 + distNorm22ate24 + distNorm24ate26 + distNorm26ate28 +
              distNorm28ate30 + distNorm30ate32 + distNorm32ate34 + distNorm34ate36 + distNorm36ate38 + distNorm38ate40
  
  
          const incidencia = txIncidencia * (nascidosVivosAfetados / 1000)
          const incidenciaHomemMulher = incidencia * 2

          const PesoDaIncapacidadePorIncidencia = incidenciaHomemMulher*pesoDaIncapacidade;
          const calculo1 = (constante*Math.exp(txDesconto*anoIniciodaIncapacidade))/(Math.pow(bplusr,2))
          const calculo2 = bplusr*(duracaoDaIncapacidade+anoIniciodaIncapacidade);
          const calculo3 = bplusr*(duracaoDaIncapacidade+anoIniciodaIncapacidade)-1;
          const calculo4 = Math.exp(bplusr*anoIniciodaIncapacidade)*(bplusr*anoIniciodaIncapacidade-1);
          const calculo5 = (1-agwt)/txDesconto;
          const calculo6 = (1-Math.exp(-txDesconto*duracaoDaIncapacidade));
          const daly = PesoDaIncapacidadePorIncidencia*(agwt*calculo1*((Math.exp(calculo2)*calculo3)-calculo4)+calculo5*calculo6);
          const UmDalyReais = 103599;
          const totalPerdaQIFetos = daly*UmDalyReais;
          impacts.push({label: 'Perda de Qi em Fetos', displayName: 'Perda de Qi em Fetos', category: CATEGORY_MERCURY, value: totalPerdaQIFetos});

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
          const DALYAnosGarimpeiro = txPrevalence*PesoIncapacidadeNeuroGarimpeirosQtdGarimpeiros;
          const CustoTotalDALYGarimpeiros = UmDalyReais*DALYAnosGarimpeiro
          
          const CustoTotalGarimpeiros = CustoTotalDALYGarimpeiros+CustoTratamentoNeuroGarimpeiros 

          //Custo de aterramento de cava
          const ProdutividadeGramaPorToneladaMineiro = 0.4
         // const CustoFrete1escavadeiraMunicipio = 100 //aqui teremos um custo diferente para cada município. Usamos procv etc. Precisamos ver como incluir depois. Enquanto isso, botamos um valor qualquer

          const RelacaoMinerioEsteril = 7
          const DensidadeOuro = 2.76
          const PerdaOuroEscavacao = 2
          const ProfundidadeMediaTerraFertil = 0.4
          const CustoAterramentoCavaNormal = 1
         // const CustoAterramentoCavaFertil = 13
          const QtdeEscavadeiraM3porHora = 160
          const HorasEscavadeiraDia = 10
          const DiasAno = 365

          const TonSoloRevolvida = qtdAnalysis / ProdutividadeGramaPorToneladaMineiro
          const TonEsterilRevolvida = TonSoloRevolvida * RelacaoMinerioEsteril
          const TotalSoloRevolvida = TonSoloRevolvida + TonEsterilRevolvida
          const VolumeSemPerda = TotalSoloRevolvida / DensidadeOuro
          const VolumeComPerda = VolumeSemPerda * PerdaOuroEscavacao
          const Areaafetadam2 = VolumeComPerda / pitDepth
          const Areaafetadaha = Areaafetadam2 / 10000
          const GramadeOuroporHectare = qtdAnalysis / Areaafetadaha
          const KgdeOuroporHectare = GramadeOuroporHectare / 1000
          const ProfundidadeMediaTerraNormal = pitDepth - ProfundidadeMediaTerraFertil
          const VolumeTerraNormal = ProfundidadeMediaTerraNormal * Areaafetadaha
          const VolumeTerraFertil = ProfundidadeMediaTerraFertil * Areaafetadaha
          const CustoTotalAterramentoTerraNormal = VolumeTerraNormal * CustoAterramentoCavaNormal
          const QtdeEscavadeiraM3porano = DiasAno * HorasEscavadeiraDia * QtdeEscavadeiraM3porHora
          const VolumeEscavadeiraNoAno = VolumeTerraNormal-QtdeEscavadeiraM3porano
          const DiferencaVolumeEscavadeiraNoAno = VolumeEscavadeiraNoAno < 0 ? 0 : VolumeEscavadeiraNoAno




          history.push('/loading')
          
        }

    return (
        <Container>
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <label>{calculatorForm.labels.knowRegion}</label>
                        <RadioBoxConditional state={regionList} setState={handleRegion} />
                    </Col>
                </Row>
                <Conditional check={knowRegion}>
                    <Row>
                        <Col xs={12} sm={6}>
                            <label>{calculatorForm.labels.state}</label>
                            <select name="state" value={state} onChange={handleState}>
                            {
                                stateList.map(({sigla, id}) => (
                                    <option key={id} value={id}>{sigla}</option>
                                ))
                            }
                            </select>
                        </Col>
                        <Col xs={12} sm={6}>
                            <label>{calculatorForm.labels.country}</label>
                            <select name="country" value={country} onChange={handleCountry}>
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
                    <Col xs={6} sm={9}>
                        <label>{calculatorForm.labels.analysisUnit}</label>
                        <select name="analysisUnit" value={calculator.analysisUnit} onChange={handleAnalysisUnit}>
                            <option value={IMPACTED_AREA}>{calculatorForm.values.analysisUnit.impactedArea}</option>
                            <option value={AMOUNT_GOLD}>{calculatorForm.values.analysisUnit.amountOfGold}</option>
                        </select>
                    </Col>
                    <Col xs={6} sm={3}>
                        <TextField 
                            label="Valor" 
                            error={qtdAnalysis.error} 
                            type="number" 
                            value={qtdAnalysis.value} 
                            onChange={handleQtdAnalysis} 
                            name="valor" placeholder={analysisUnit === IMPACTED_AREA ? calculatorForm.values.qtdAnalysisUnit.hactare : calculatorForm.values.qtdAnalysisUnit.grams} />
                    </Col>
                </Row>
                <Row>
                    <Conditional check={knowRegion}>
                        <Col xs={12} sm={6}>
                            <label>{calculatorForm.labels.pitDepth}</label>
                            <select name="pitdepth" value={pitDepth} onChange={handlePitDepth}>
                                {
                                    dataPitDepth.map(({label, value}) => <option key={value} value={value}>{label}</option>)
                                }
                            </select>
                        </Col>
                    </Conditional>
                    <Col xs={12} sm={!knowRegion ? 6 : 6}>
                        <label>{calculatorForm.labels.extractionType}</label>
                        <select name="valuationMethod" value={valuatioMethod} onChange={handleValuationMethod}>
                            <option value={ALLUVIUM}>{calculatorForm.values.extractionType.openPit}</option>
                            <option value={FERRY}>{calculatorForm.values.extractionType.boat}</option>
                            <option value={PIT}>{calculatorForm.values.extractionType.pitMine}</option>
                        </select>
                    </Col>
                    <Col xs={12} sm={!knowRegion ? 6 : 12}>
                        <label>{calculatorForm.labels.valueHypothesis}</label>
                        <select name="txPrevalencia" value={txPrevalence} onChange={handleTxPrevalance}>
                            <option value="0.29">{calculatorForm.values.valueHypothesis.conservative}</option>
                            <option value="0.343">{calculatorForm.values.valueHypothesis.precautionaryPrinciple}</option>
                        </select>
                    </Col>
                </Row>
                
                <ButtonFixed>
                    <Grid>
                        <Row>
                            <Col xs={12} smOffset={4} mdOffset={0} sm={4} md={3}>
                                <Button onClick={submitCalc}>{calculatorForm.labels.btnCalulator}</Button>
                            </Col>
                        </Row>
                    </Grid>
                </ButtonFixed>
                

            </Grid>
       </Container>
    )
}

export default Form;