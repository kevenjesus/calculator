const CONSERVATIVE = 0.29

const hypertension = (gold, popRuralMunicipio, popUrbMunicipio, txPrevalence, densidadePop2060, isRegion) => {

    const perdaPercentHgNaAgua = txPrevalence === CONSERVATIVE ? 0.13 : 0.21;
    const methyladPercent = txPrevalence === CONSERVATIVE ? 0.11 : 0.22;
   
    const proportionHgToAu = 2.6;
    const grHgLiberadonaAgua = perdaPercentHgNaAgua * proportionHgToAu * gold;
    const toMethylatedWater = methyladPercent * grHgLiberadonaAgua;
    
    const Years = 50;
    const ruralIndividualWeight = 59.1;
    const urbanindividualWeight = 70;
    const levelMediumContaminationFish = 0.5;
    const AverageFishConsumptionPerDayInRuralGrams = 144.5;
    const consumptionMediumFishByDayInGramsUrban = 57;
    const densityPopulationalRegionNorth2060 = 6.00696;
    const Beta = 0.04;
    const PI = 3.14;
    const PropPessoasAcima20AnosporPopTotal = 0.58;
    const PropPessoasAcima20AnosporComHipertensao = 0.0009;
    const FracaoAtribuivelHipertensao = 0.26;
    const agwt = 1;
    const TxDesconto = 0.03;
    const bplusr = -0.07;
    const DALY1CustoInfarto = 103599;
    const AnoIniciodaIncapacidadeHipertensao = 46;
    const constante = 0.1658;
    const DuracaoDaIncapacidadeHipertensao = 26;
    const PesoDaIncapacidadeHipertensao = 0.246;
    
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
    //console.log('toPopulationAffectedMercuryHair', toPopulationAffectedMercuryHair)
    const PopPessoasAcima20AnosnaRegiao = toPopulationAffectedMercuryHair * PropPessoasAcima20AnosporPopTotal;
    //console.log('PopPessoasAcima20AnosnaRegiao', PopPessoasAcima20AnosnaRegiao)
    
    const PopPessoasAcima20AnosnaRegiaocomInfarto = PopPessoasAcima20AnosnaRegiao * PropPessoasAcima20AnosporComHipertensao;
    //console.log('PopPessoasAcima20AnosnaRegiaocomInfarto', PopPessoasAcima20AnosnaRegiaocomInfarto)
    const PessoasAcima20AnosnaRegiaoComHipertensaoMercurio = PopPessoasAcima20AnosnaRegiaocomInfarto * FracaoAtribuivelHipertensao;
    //console.log('PessoasAcima20AnosnaRegiaoComHipertensaoMercurio', PessoasAcima20AnosnaRegiaoComHipertensaoMercurio)
    const PessoasAcima20AnosNaRegiaoEm32Anos = PessoasAcima20AnosnaRegiaoComHipertensaoMercurio * DuracaoDaIncapacidadeHipertensao;
    //console.log('PessoasAcima20AnosNaRegiaoEm32Anos', PessoasAcima20AnosNaRegiaoEm32Anos)
    const TxIncidenciaHipertensao = (PessoasAcima20AnosNaRegiaoEm32Anos * 1000)/  toPopulationAffectedMercuryHair;
    //console.log('TxIncidenciaHipertensao', TxIncidenciaHipertensao)
    const IncidenciaHipertensao = (TxIncidenciaHipertensao * toPopulationAffectedMercuryHair) / 1000;
    //console.log('IncidenciaHipertensao', IncidenciaHipertensao)
    const calculo0 = (IncidenciaHipertensao * 2) * PesoDaIncapacidadeHipertensao
    
    
    
    const sub1Calc1 = Math.pow(bplusr,2);
    const sub1Calc2 = Math.exp(TxDesconto*AnoIniciodaIncapacidadeHipertensao);
    const calculo1 = (constante * sub1Calc2)/ sub1Calc1;
    const calculo2 = bplusr*(DuracaoDaIncapacidadeHipertensao + AnoIniciodaIncapacidadeHipertensao);
    const calculo3 = bplusr*(DuracaoDaIncapacidadeHipertensao + AnoIniciodaIncapacidadeHipertensao)-1;
    const sub4Calc1 = Math.exp(bplusr*AnoIniciodaIncapacidadeHipertensao);
    const calculo4 = sub4Calc1 * (bplusr*AnoIniciodaIncapacidadeHipertensao-1);
    const calculo5 = (1-agwt)/TxDesconto;
    const calculo6 = (1-Math.exp(-TxDesconto*DuracaoDaIncapacidadeHipertensao));
    const calculo7 = (agwt*calculo1*((Math.exp(calculo2)*calculo3)-calculo4)+calculo5*calculo6);
    
    const DALY1CustoHipertensao =  IncidenciaHipertensao * PesoDaIncapacidadeHipertensao * calculo7
    //console.log('calculo7', calculo7)
    //console.log('IncidenciaHipertensao', IncidenciaHipertensao)
    //console.log('PesoDaIncapacidadeHipertensao', PesoDaIncapacidadeHipertensao)
    //console.log('DALY1CustoHipertensao', DALY1CustoHipertensao)
    
    const DALY1CustoHipertensaoemBRL = DALY1CustoInfarto * DALY1CustoHipertensao;

    
    const CustoAnualTratamentoHipertensao = 293;
    const IncidenciaHipertensaoTratamento = (IncidenciaHipertensao * toPopulationAffectedMercuryHair) /1000;
    const CustoTotalTratamentoHipertensaoAnos = IncidenciaHipertensaoTratamento * DuracaoDaIncapacidadeHipertensao * CustoAnualTratamentoHipertensao;
    const CustoTotalDALYeTratamentoHipertensao = CustoTotalTratamentoHipertensaoAnos + DALY1CustoHipertensaoemBRL;

    return CustoTotalDALYeTratamentoHipertensao


}

export default hypertension
















