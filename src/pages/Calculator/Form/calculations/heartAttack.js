const CONSERVATIVE = 0.29;

const heartAttack = (gold, popRuralMunicipio, popUrbMunicipio, txPrevalence, densidadePop2060, isRegion) => {
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
    const proHomensAcima40AnosporPopTotal = 0.12;
    const PropHomensAcima40AnosporComInfarto = 0.0016;
    const FracaoAtribuivelInfarto = 0.40;
    const agwt = 1;
    const TxDesconto = 0.03;
    const bplusr = -0.07;
    const DALY1CustoInfarto = 103599;
    const AnoIniciodaIncapacidadeInfarto = 56;
    const constante = 0.1658;
    const DuracaoIncapacidadeInfarto = 16;
    const PesoDaIncapacidadeInfarto = 0.439;
    
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
    
    const PopHomensAcima40AnosnaRegiao = toPopulationAffectedMercuryHair * proHomensAcima40AnosporPopTotal;
    
    const PopHomensAcima40AnosnaRegiaocomInfarto = PopHomensAcima40AnosnaRegiao * PropHomensAcima40AnosporComInfarto;
    const HomensAcima40AnosnaRegiaoComInfartoMercurio = PopHomensAcima40AnosnaRegiaocomInfarto * FracaoAtribuivelInfarto;
    const HomensAcima40aAnosNaRegiaoEm32Anos = HomensAcima40AnosnaRegiaoComInfartoMercurio * DuracaoIncapacidadeInfarto;
    const TxIncidenciaInfarto = (HomensAcima40aAnosNaRegiaoEm32Anos * 1000)/  toPopulationAffectedMercuryHair;
    const IncidenciaInfarto = (TxIncidenciaInfarto * toPopulationAffectedMercuryHair) / 1000;
    
    const sub1Calc1 = Math.pow(bplusr,2);
    const sub1Calc2 = Math.exp(TxDesconto*AnoIniciodaIncapacidadeInfarto);
    const calculo1 = (constante * sub1Calc2)/ sub1Calc1;
    const calculo2 = bplusr*(DuracaoIncapacidadeInfarto + AnoIniciodaIncapacidadeInfarto);
    const calculo3 = bplusr*(DuracaoIncapacidadeInfarto + AnoIniciodaIncapacidadeInfarto)-1;
    const sub4Calc1 = Math.exp(bplusr*AnoIniciodaIncapacidadeInfarto);
    const calculo4 = sub4Calc1 * (bplusr*AnoIniciodaIncapacidadeInfarto-1);
    const calculo5 = (1-agwt)/TxDesconto;
    const calculo6 = (1-Math.exp(-TxDesconto*DuracaoIncapacidadeInfarto));
    const calculo7 = (agwt*calculo1*((Math.exp(calculo2)*calculo3)-calculo4)+calculo5*calculo6);
    
    const DALYInfarto =  IncidenciaInfarto * PesoDaIncapacidadeInfarto * calculo7

    const DALYInfartoemBRL = DALY1CustoInfarto * DALYInfarto;

    const CustoAnualTratamentoInfarto = 2300;
    const IncidenciaInfartoTratamento = (TxIncidenciaInfarto * toPopulationAffectedMercuryHair) /1000;
    const CustoTotalTratamentoInfartoAnos = IncidenciaInfartoTratamento * DuracaoIncapacidadeInfarto * CustoAnualTratamentoInfarto;
    const CustoTotalDALYeTratamentoInfarto = CustoTotalTratamentoInfartoAnos + DALYInfartoemBRL;

    return CustoTotalDALYeTratamentoInfarto
}

export default heartAttack