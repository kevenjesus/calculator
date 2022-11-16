import fixedCalcultions from 'hooks/fixedCalculations';
import normDist from 'utils/normDist'
import { ALLUVIUM, AMOUNT_GOLD, FERRY, MONTHS_OF_MINING, PIT, YEARS_OF_MINING } from '../consts';

const CONSERVATIVE = 0.29

// impacto 6: Perda de QI (mercury na saude humana)
    ////// Parte 01: grama de mercúrio que é metilado

const lossQI =  (country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion) => {
 
  const { general, lossQI } = fixedCalcultions(country_region)
  const {
      methyladPercent_conservative,
      methyladPercent,
      ruralIndividualWeight,
      urbanindividualWeight,
      percentLossHgInWater_convervative,
      percentLossHgInWater,
      percentLossHgInWater_ferry__convervative,
      percentLossHgInWater_ferry,
      densityPopulationalRegionNorth2060,
      consumptionMediumFishByDayInGramsUrban,
      AverageFishConsumptionPerDayInRuralGrams,
      levelMediumContaminationFish,
      prodGoldMonthFerry,
      quantityOfGoldGramsPerYearWell,
      aDALYUSD,
      HgAuRatio
  } = general
  const { birthRate } = lossQI

  // console.log('lossQI', 
  // methyladPercent_conservative,
  // methyladPercent,
  // ruralIndividualWeight,
  // urbanindividualWeight,
  // percentLossHgInWater_convervative,
  // percentLossHgInWater,
  // percentLossHgInWater_ferry__convervative,
  // percentLossHgInWater_ferry,
  // densityPopulationalRegionNorth2060,
  // consumptionMediumFishByDayInGramsUrban,
  // AverageFishConsumptionPerDayInRuralGrams,
  // levelMediumContaminationFish,
  // prodGoldMonthFerry,
  // quantityOfGoldGramsPerYearWell,
  // aDALYUSD,
  // HgAuRatio,
  // birthRate)

  const methyladPercentValue = txPrevalence === CONSERVATIVE ? methyladPercent_conservative : methyladPercent;
  let gramsHgReleasedinWater;

  if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) { //input anos de garimpo
    const percentLossHgInWaterValue = txPrevalence === CONSERVATIVE ? percentLossHgInWater_convervative : percentLossHgInWater;
    const amountOfTotalGoldWellValue = quantityOfGoldGramsPerYearWell * valueLikeMining
    gramsHgReleasedinWater = percentLossHgInWaterValue * HgAuRatio * amountOfTotalGoldWellValue;
    
  }else if(likeMining === PIT && typeValueLikeMining === AMOUNT_GOLD) { //input gramas de ouro
    const percentLossHgInWaterValue = txPrevalence === CONSERVATIVE ? percentLossHgInWater_convervative : percentLossHgInWater;
    gramsHgReleasedinWater = percentLossHgInWaterValue * HgAuRatio * valueLikeMining;

  }else if(likeMining === FERRY && typeValueLikeMining === MONTHS_OF_MINING) { //input Meses de garimpo
    const percentLossHgInWaterValue = txPrevalence === CONSERVATIVE ? percentLossHgInWater_ferry__convervative : percentLossHgInWater_ferry;
    const toFerryGoldProductivy = valueLikeMining * prodGoldMonthFerry;
    gramsHgReleasedinWater = percentLossHgInWaterValue * HgAuRatio * toFerryGoldProductivy;
    
  }else if(likeMining === FERRY && typeValueLikeMining === AMOUNT_GOLD) { //input gramas de ouro
    const percentLossHgInWaterValue = txPrevalence === CONSERVATIVE ? percentLossHgInWater_ferry__convervative : percentLossHgInWater_ferry;
    gramsHgReleasedinWater = percentLossHgInWaterValue * HgAuRatio * valueLikeMining;
    
  }else if(likeMining === ALLUVIUM) { //input gramas de ouro/hectare
    const percentLossHgInWaterValue = txPrevalence === CONSERVATIVE ? percentLossHgInWater_convervative : percentLossHgInWater;
    gramsHgReleasedinWater = percentLossHgInWaterValue * HgAuRatio * gold;
    
  }
  
  const toMethylatedWater = methyladPercentValue * gramsHgReleasedinWater;

  const years = 50;
  //const birthRate = 18.8;
  //const ruralIndividualWeight = 59.1;
  //const urbanindividualWeight = 70;
  //const levelMediumContaminationFish = 0.5;
  //const AverageFishConsumptionPerDayInRuralGrams = 144.5;
  //const consumptionMediumFishByDayInGramsUrban = 57;
  //const densityPopulationalRegionNorth2060 = 6.00696;

  const individualAverageWeight = (ruralPopMunicipality*ruralIndividualWeight)+(urbanPopMunicipality*urbanindividualWeight);
  const ingestionMediaDailyMicrogramMercuryUrban = (consumptionMediumFishByDayInGramsUrban * levelMediumContaminationFish) / urbanindividualWeight;
  const ingestionMediaDailyMicrogramMercuryRural = (AverageFishConsumptionPerDayInRuralGrams * levelMediumContaminationFish) / ruralIndividualWeight;
  const ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG = (ruralPopMunicipality * ingestionMediaDailyMicrogramMercuryRural) + (urbanPopMunicipality * ingestionMediaDailyMicrogramMercuryUrban);
  const ingestionMediaMercuryDaily1IndividualInGramsPerKGperDay = ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG/1000000;
  const ingestionMediaDailyIndividualInGramsPerDaily = ingestionMediaMercuryDaily1IndividualInGramsPerKGperDay * individualAverageWeight;
  const ingestionMediaMercuryIn50years = (365*years)* ingestionMediaDailyIndividualInGramsPerDaily;
  
  const concentrationMediaMercuryHair = ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG/0.1;
  //console.log('concentração médio de mercurio no cabelo', concentrationMediaMercuryHair)
  const deflectionPatternAverageMercury = concentrationMediaMercuryHair/2;
  const rAoQuadrado = Math.pow(100, 2)
  const popSize100kmRadius = isRegion ? (popDensity2060 * (Math.PI * rAoQuadrado)) : (densityPopulationalRegionNorth2060 * (Math.PI * rAoQuadrado));
  
  const affectedPeople = (toMethylatedWater/ingestionMediaMercuryIn50years);

  const toPopulationAffectedMercuryHair = affectedPeople < popSize100kmRadius ? affectedPeople : popSize100kmRadius;
  
  const affectedLiveBirths = toPopulationAffectedMercuryHair * birthRate;
  const liveBornPop = affectedLiveBirths/1000;
  
  const weightOfDisability = 0.361;
  const agwt = 1;
  const constant = 0.1658;
  const discountRate = 0.03;
  const yearStarOfDisability = 0;
  const bplusr = -0.07;
  const durationOfDisability = 72;

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
 

  const porcentNascidosVivosPerdaQIAcimaDe2Pts = 1 - disnorm10
  //console.log('porcentNascidosVivosPerdaQIAcimaDe2Pts', porcentNascidosVivosPerdaQIAcimaDe2Pts)

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

  const incidenceRate = distNorm0ate2 + distNorm2ate4 + distNorm4ate6 + distNorm6ate8 + distNorm8ate10 + distNorm10ate12 + distNorm12ate14 +
distNorm14ate16 + distNorm16ate18 + distNorm18ate20 + distNorm20ate22 + distNorm22ate24 + distNorm24ate26 + distNorm26ate28 +
distNorm28ate30 + distNorm30ate32 + distNorm32ate34 + distNorm34ate36 + distNorm36ate38 + distNorm38ate40;
  
  const incidence = incidenceRate * (liveBornPop / 1000);

  const weightOfDisabilityPorincidence = incidence*weightOfDisability;
  const calculation1 = (constant*Math.exp(discountRate*yearStarOfDisability))/(Math.pow(bplusr,2));
  const calculation2 = bplusr*(durationOfDisability+yearStarOfDisability);
  const calculation3 = bplusr*(durationOfDisability+yearStarOfDisability)-1;
  const calculation4 = Math.exp(bplusr*yearStarOfDisability)*(bplusr*yearStarOfDisability-1);
  const calculation5 = (1-agwt)/discountRate;
  const calculation6 = (1-Math.exp(-discountRate*durationOfDisability));
  const daly = weightOfDisabilityPorincidence*(agwt*calculation1*((Math.exp(calculation2)*calculation3)-calculation4)+calculation5*calculation6);
  //const aDALYUSD = 103599;
  const toLossQIFetuses = daly*aDALYUSD;
  
  return {
    concentrationMediaMercuryHair,
    porcentNascidosVivosPerdaQIAcimaDe2Pts,
    value: toLossQIFetuses
  } 

}

export default lossQI