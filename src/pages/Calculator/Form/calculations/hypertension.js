import { ALLUVIUM, FERRY, PIT } from "../consts";

const CONSERVATIVE = 0.29


const hypertension = (gold, popRuralMunicipio, popUrbMunicipio, txPrevalence, densidadePop2060, isRegion, tipoGarimpo, tempoGarimpo) => {
    
    const ProporçãoHgAu = 2.6;
    
    let GrHgLiberadonaAgua
    if (tipoGarimpo === PIT && tempoGarimpo) { //Input Anos de Garimpo
        //console.log ('gold', gold,'tempoGarimpoPITt', tempoGarimpo)
        
        const perdaPercentHgNaAgua = txPrevalence === CONSERVATIVE ? 0.13 : 0.21;

        const QtdeGramasOuroAnoPoço = 23700;
        const QtdeOuroTotalPoço = QtdeGramasOuroAnoPoço * tempoGarimpo;
        GrHgLiberadonaAgua = perdaPercentHgNaAgua * ProporçãoHgAu * QtdeOuroTotalPoço

    }else if (tipoGarimpo === PIT && gold) { //input Ouro/Hectare
        //console.log ('gold', gold,'tempoGarimpoPITg', tempoGarimpo)
        
        const perdaPercentHgNaAgua = txPrevalence === CONSERVATIVE ? 0.13 : 0.21;
        GrHgLiberadonaAgua = perdaPercentHgNaAgua * ProporçãoHgAu * gold;

    }else if (tipoGarimpo === FERRY && tipoGarimpo) { //input Meses de garimpo de balsa
        //console.log ('gold', gold,'tempoGarimpoFERRYm', tempoGarimpo)

        const perdaPercentHgNaAgua = txPrevalence === CONSERVATIVE ? 0.22 : 0.35;
        const ProdOuroMesBalsa = 302;
        
        const ProdOuroTotalBalsa = tempoGarimpo * ProdOuroMesBalsa;
        GrHgLiberadonaAgua = perdaPercentHgNaAgua * ProporçãoHgAu * ProdOuroTotalBalsa;

    }else if (tipoGarimpo === FERRY && gold) { //input Ouro/Hectare
        //console.log ('gold', gold,'tempoGarimpoFERRYg', tempoGarimpo)

        const perdaPercentHgNaAgua = txPrevalence === CONSERVATIVE ? 0.22 : 0.35;
        GrHgLiberadonaAgua = perdaPercentHgNaAgua * ProporçãoHgAu * gold;

    }else if (tipoGarimpo === ALLUVIUM && gold) { //input Ouro/Hectare
        //console.log ('gold', gold,'tempoGarimpoALLUVIUMg', tempoGarimpo)

        const perdaPercentHgNaAgua = txPrevalence === CONSERVATIVE ? 0.13 : 0.21;
        GrHgLiberadonaAgua = perdaPercentHgNaAgua * ProporçãoHgAu * gold;

    }

    const methyladPercent = txPrevalence === CONSERVATIVE ? 0.11 : 0.22;
    const toMethylatedWater = methyladPercent * GrHgLiberadonaAgua;
    
    const Years = 50;
    const ruralIndividualWeight = 59.1;
    const urbanindividualWeight = 70;
    const levelMediumContaminationFish = 0.5;
    const AverageFishConsumptionPerDayInRuralGrams = 144.5;
    const consumptionMediumFishByDayInGramsUrban = 57;
    const densityPopulationalRegionNorth2060 = 6.00696;
    const PI = 3.14;
    const PropPessoasAcima20AnosporPopTotal = 0.58;
    const RiscoAcumuladoHipertensaoMercurio = 0.0121;
    const DuracaoDaIncapacidadeHipertensao = 52;
    const PesoDaIncapacidadeHipertensao = 0.246;
    const agwt = 1;
    const TxDesconto = 0.03;
    const bplusr = -0.07;
    const DALY1Hipertensao = 103599;
    const AnoIniciodaIncapacidadeHipertensao = 20;
    const constante = 0.1658;
    
    
    
    const individualAverageWeight = (popRuralMunicipio*ruralIndividualWeight) + (popUrbMunicipio*urbanindividualWeight);
    const daysIn50Years = (365*Years);
    
    const ingestionMediaDailyMicrogramMercuryUrban = (consumptionMediumFishByDayInGramsUrban * levelMediumContaminationFish) / urbanindividualWeight;
    const ingestionMediaDailyMicrogramMercuryRural = (AverageFishConsumptionPerDayInRuralGrams * levelMediumContaminationFish) / ruralIndividualWeight;
    const ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG = (popRuralMunicipio * ingestionMediaDailyMicrogramMercuryRural) + (popUrbMunicipio * ingestionMediaDailyMicrogramMercuryUrban);
    const ingestionMediaMercuryDaily1IndividualInGramsPerKG = ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG/1000000;
    const ingestionMediaDailyIndividualInGramsPerDaily = ingestionMediaMercuryDaily1IndividualInGramsPerKG*individualAverageWeight;
    const ingestionMediaMercuryEmYears = daysIn50Years * ingestionMediaDailyIndividualInGramsPerDaily;

    const TamanhoPop100kmRaio = isRegion ? (densidadePop2060 * Math.pow((PI * 100), 2)) : (densityPopulationalRegionNorth2060 * Math.pow((PI * 100), 2));

    
    const pessoasAfetadas = (toMethylatedWater/ingestionMediaMercuryEmYears);
    const toPopulationAffectedMercuryHair = pessoasAfetadas < TamanhoPop100kmRaio ? pessoasAfetadas : TamanhoPop100kmRaio;
    
    const PopPessoasAcima20AnosnaRegiao = toPopulationAffectedMercuryHair * PropPessoasAcima20AnosporPopTotal;
    
    const PessoasAcima20AnosNaRegiaoEm52Anos = RiscoAcumuladoHipertensaoMercurio * PopPessoasAcima20AnosnaRegiao;
    const TxIncidenciaHipertensao = (PessoasAcima20AnosNaRegiaoEm52Anos * 1000)/  toPopulationAffectedMercuryHair;
    
    //console.log('PessoasAcima20AnosNaRegiaoEm52Anos', PessoasAcima20AnosNaRegiaoEm52Anos)
    //console.log('toPopulationAffectedMercuryHair', toPopulationAffectedMercuryHair)
    

    const IncidenciaHipertensao = (TxIncidenciaHipertensao * toPopulationAffectedMercuryHair) / 1000;
    //console.log('Afetados mercurio no cabelo', toPopulationAffectedMercuryHair)
    //console.log('TxIncidenciaHipertensao', TxIncidenciaHipertensao)
    
    const calculo0 = IncidenciaHipertensao * PesoDaIncapacidadeHipertensao
    const calculo1 = (constante*Math.exp(TxDesconto*AnoIniciodaIncapacidadeHipertensao))/(Math.pow(bplusr,2))
    const calculo2 = bplusr*(DuracaoDaIncapacidadeHipertensao + AnoIniciodaIncapacidadeHipertensao);
    const calculo3 = bplusr*(DuracaoDaIncapacidadeHipertensao + AnoIniciodaIncapacidadeHipertensao)-1;
    const calculo4 = Math.exp(bplusr*AnoIniciodaIncapacidadeHipertensao)*(bplusr*AnoIniciodaIncapacidadeHipertensao-1);
    const calculo5 = (1-agwt)/TxDesconto;
    const calculo6 = (1-Math.exp(-TxDesconto*DuracaoDaIncapacidadeHipertensao));
    const dalyHipertensao = calculo0 *(agwt*calculo1*((Math.exp(calculo2)*calculo3)-calculo4)+calculo5*calculo6);

    //console.log('dalyHipertensao',dalyHipertensao)

    const DALY1CustoHipertensao = dalyHipertensao * DALY1Hipertensao;

     

    /*const DALY1CustoHipertensao =  PesoDaIncapacidadeHipertensao * dalyHipertensao;
    console.log('IncidenciaHipertensao',IncidenciaHipertensao)
    console.log('PesoDaIncapacidadeHipertensao',PesoDaIncapacidadeHipertensao)
    console.log('dalyHipertensao',dalyHipertensao)
    const DALY1CustoHipertensaoemBRL = DALY1Hipertensao * DALY1CustoHipertensao; */

    
    const CustoAnualTratamentoHipertensao = 293;
    const IncidenciaHipertensaoTratamento = (IncidenciaHipertensao * toPopulationAffectedMercuryHair) /1000;
    const CustoTotalTratamentoHipertensaoAnos = IncidenciaHipertensaoTratamento * DuracaoDaIncapacidadeHipertensao * CustoAnualTratamentoHipertensao;
    const CustoTotalDALYeTratamentoHipertensao = CustoTotalTratamentoHipertensaoAnos + DALY1CustoHipertensao;

    return CustoTotalDALYeTratamentoHipertensao


}

export default hypertension