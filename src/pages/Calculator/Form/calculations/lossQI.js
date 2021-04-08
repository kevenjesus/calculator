import normDist from 'utils/normDist'

const CONSERVATIVE = 0.29

// impacto 6: Perda de QI (mercury na saude humana)
    ////// Parte 01: grama de mercúrio que é metilado

const lossQI = (gold, popRuralMunicipio, popUrbMunicipio, txPrevalence, densidadePop2060, isRegion) => {
  //console.log(gold, popRuralMunicipio, popUrbMunicipio, txPrevalence, densidadePop2060, isRegion)

    
    const perdaPercentHgNaAgua = txPrevalence === CONSERVATIVE ? 0.13 : 0.21;
    const methyladPercent = txPrevalence === CONSERVATIVE ? 0.11 : 0.22;

    const proportionHgToAu = 2.6;
    



    const grHgLiberadonaAgua = perdaPercentHgNaAgua * proportionHgToAu * gold;
    const toMethylatedWater = methyladPercent * grHgLiberadonaAgua;

    ///// Parte 02: Consumo total de mercúrio do mesmo indivíduo

    const Years = 50;
    const birthRate = 18.8;
    const ruralIndividualWeight = 59.1;
    const urbanindividualWeight = 70;
    const levelMediumContaminationFish = 0.5;
    const AverageFishConsumptionPerDayInRuralGrams = 144.5;
    const consumptionMediumFishByDayInGramsUrban = 57;
    const densityPopulationalRegionNorth2060 = 6.00696;
    const PI = 3.14;

    const individualAverageWeight = (popRuralMunicipio*ruralIndividualWeight)+(popUrbMunicipio*urbanindividualWeight);
    const mercuryGrams = (0.98/10000000);
    const daysIn50Years = (365*Years);
    const qtdGramsindividualDaily = mercuryGrams*individualAverageWeight
    const dailyIntake = qtdGramsindividualDaily*daysIn50Years
  
    
    
    
    const ingestionMediaDailyMicrogramMercuryUrban = (consumptionMediumFishByDayInGramsUrban * levelMediumContaminationFish) / urbanindividualWeight;
    const ingestionMediaDailyMicrogramMercuryRural = (AverageFishConsumptionPerDayInRuralGrams * levelMediumContaminationFish) / ruralIndividualWeight;
    const ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG = (popRuralMunicipio * ingestionMediaDailyMicrogramMercuryRural) + (popUrbMunicipio * ingestionMediaDailyMicrogramMercuryUrban);
    //console.log('IngestaoMediaMercurioDiaria1IndividuoEmMicrogramasporkg', ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG)
    const ingestionMediaMercuryDaily1IndividualInGramsPerKG = ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG/1000000;
    const ingestionMediaDailyIndividualInGramsPerDaily = ingestionMediaMercuryDaily1IndividualInGramsPerKG*individualAverageWeight;
    const ingestionMediaMercuryEmYears = (365*Years)*ingestionMediaDailyIndividualInGramsPerDaily;
    const concentrationMediaMercuryHair = ingestionMediaMercuryEmYears/0.1;
    const deflectionPatternAverageMercury = concentrationMediaMercuryHair/2;

    //console.log('DesvioPadraoMeioMercurio', deflectionPatternAverageMercury)

    //console.log('tem regiao?', isRegion)

    const TamanhoPop100kmRaio = isRegion ? (densidadePop2060 * Math.pow((PI * 100), 2)) : (densityPopulationalRegionNorth2060 * Math.pow((PI * 100), 2));
    //console.log('TamanhoPop100kmRaio', TamanhoPop100kmRaio)
    const pessoasAfetadas = (toMethylatedWater/ingestionMediaMercuryEmYears);
    const toPopulationAffectedMercuryHair = pessoasAfetadas < TamanhoPop100kmRaio ? pessoasAfetadas : TamanhoPop100kmRaio;
    const affectedLiveBirths = toPopulationAffectedMercuryHair*birthRate;
    const popNascVivos = affectedLiveBirths/1000;
    //console.log('popNascVivos', popNascVivos)
  
    
    // valor final disnorm (0, 5.9, 2.95) = 0.022750132

    // valores fixos

    const weightOfDisability = 0.361;
    const agwt = 1;
    const constant = 0.1658;
    const discountRate = 0.03;
    const yearStarOfDisability = 0;
    const beta = 0.04;
    const bplusr = -0.07;
    const durationOfDisability = 72;
  
    // 0, 2, 4, 6, 8....36
    const disnorm0 = normDist(0, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm2 = normDist(2, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm4 = normDist(4, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm6 = normDist(6, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm8 = normDist(8, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm10 = normDist(10, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm12 = normDist(12, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm14 = normDist(14, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm16 = normDist(16, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm18 = normDist(18, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm20 = normDist(20, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm22 = normDist(22, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm24 = normDist(24, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm26 = normDist(26, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm28 = normDist(28, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm30 = normDist(30, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm32 = normDist(32, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm34 = normDist(34, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm36 = normDist(36, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm38 = normDist(38, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
    const disnorm40 = normDist(40, concentrationMediaMercuryHair, deflectionPatternAverageMercury, 1);
  
  
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

    const txIncidence = distNorm0ate2 + distNorm2ate4 + distNorm4ate6 + distNorm6ate8 + distNorm8ate10 + distNorm10ate12 + distNorm12ate14 +
  distNorm14ate16 + distNorm16ate18 + distNorm18ate20 + distNorm20ate22 + distNorm22ate24 + distNorm24ate26 + distNorm26ate28 +
  distNorm28ate30 + distNorm30ate32 + distNorm32ate34 + distNorm34ate36 + distNorm36ate38 + distNorm38ate40
  //console.log('Taxa de incidência', txIncidence)
  
  
    const incidence = txIncidence * (popNascVivos / 1000)
    const incidenceManWoman = incidence * 2
    //console.log('incidenceManWoman', incidenceManWoman)

    const weightOfDisabilityPorincidence = incidenceManWoman*weightOfDisability;
    const calculo1 = (constant*Math.exp(discountRate*yearStarOfDisability))/(Math.pow(bplusr,2))
    const calculo2 = bplusr*(durationOfDisability+yearStarOfDisability);
    const calculo3 = bplusr*(durationOfDisability+yearStarOfDisability)-1;
    const calculo4 = Math.exp(bplusr*yearStarOfDisability)*(bplusr*yearStarOfDisability-1);
    const calculo5 = (1-agwt)/discountRate;
    const calculo6 = (1-Math.exp(-discountRate*durationOfDisability));
    const daly = weightOfDisabilityPorincidence*(agwt*calculo1*((Math.exp(calculo2)*calculo3)-calculo4)+calculo5*calculo6);
    const aDALYBRL = 103599;
    const toLossQIFetuses = daly*aDALYBRL;
    
    return toLossQIFetuses



}

export default lossQI