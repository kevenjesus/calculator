import { ALLUVIUM, FERRY, PIT } from "../consts";

const CONSERVATIVE = 0.29;

const heartAttack = (gold, popRuralMunicipio, popUrbMunicipio, txPrevalence, densidadePop2060, isRegion, tipoGarimpo, tempoGarimpo) => {

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

    }else if (tipoGarimpo === FERRY && tempoGarimpo) { //input Meses de garimpo de balsa
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
    const Beta = 0.04;
    const PI = 3.14;
    const proHomensAcima40AnosporPopTotal = 0.12;
    const PropHomensAcima40AnosporComInfarto = 0.0016;
    const FracaoAtribuivelInfarto = 0.40;
    const agwt = 1;
    const TxDesconto = 0.03;
    const bplusr = -0.07;
    const DALY1CustoInfarto = 103599;
    const AnoIniciodaIncapacidadeInfarto = 40;
    const constante = 0.1658;
    const DuracaoIncapacidadeInfarto = 27;
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
    //console.log('TxIncidenciaInfarto', TxIncidenciaInfarto)
    const IncidenciaInfarto = (TxIncidenciaInfarto * toPopulationAffectedMercuryHair) / 1000;

    //console.log('Incidencia Infarto', IncidenciaInfarto)
    
    
    const calculo0 = IncidenciaInfarto * PesoDaIncapacidadeInfarto;
    const calculo1 = (constante*Math.exp(TxDesconto*AnoIniciodaIncapacidadeInfarto))/(Math.pow(bplusr,2))
    const calculo2 = bplusr*(DuracaoIncapacidadeInfarto + AnoIniciodaIncapacidadeInfarto);
    const calculo3 = bplusr*(DuracaoIncapacidadeInfarto + AnoIniciodaIncapacidadeInfarto)-1;
    const calculo4 = Math.exp(bplusr*AnoIniciodaIncapacidadeInfarto)*(bplusr*AnoIniciodaIncapacidadeInfarto-1);
    const calculo5 = (1-agwt)/TxDesconto;
    const calculo6 = (1-Math.exp(-TxDesconto*DuracaoIncapacidadeInfarto));

    //console.log('calculo6',calculo6)

    const dalyInfarInfarto = calculo0 * (agwt*calculo1*((Math.exp(calculo2)*calculo3)-calculo4)+calculo5*calculo6);
    //console.log('daly Infar Infarto', dalyInfarInfarto)
    
    const DALYInfarto =  dalyInfarInfarto * DALY1CustoInfarto;

    
    const CustoAnualTratamentoInfarto = 2300;
    const IncidenciaInfartoTratamento = (TxIncidenciaInfarto * toPopulationAffectedMercuryHair) /1000;
    const CustoTotalTratamentoInfartoAnos = IncidenciaInfartoTratamento * DuracaoIncapacidadeInfarto * CustoAnualTratamentoInfarto;
    const CustoTotalDALYeTratamentoInfarto = CustoTotalTratamentoInfartoAnos + DALYInfarto;

    return CustoTotalDALYeTratamentoInfarto
}

export default heartAttack