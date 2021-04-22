import { ALLUVIUM, FERRY, PIT } from "../consts";

const CONSERVATIVE = 0.29


const hypertension = (gold, municipalRuralPop, municipalUrbanPop, txPrevalence, popDensity2060, isRegion, likeMining, panningTime) => {
    
    const HgAuRatio = 2.6;
    
    let gramsHgReleasedInWater
    if (likeMining === PIT && panningTime) { //Input Anos de Garimpo
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? 0.132 : 0.21;
        const quantityOfGramsGoldYearWell = 23700;
        const amountOfTotalGoldWell = quantityOfGramsGoldYearWell * panningTime;
        gramsHgReleasedInWater = lossPercentHgInWater * HgAuRatio * amountOfTotalGoldWell

    }else if (likeMining === PIT && gold) { //input Ouro/Hectare
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? 0.132 : 0.21;
        gramsHgReleasedInWater = lossPercentHgInWater * HgAuRatio * gold;

    }else if (likeMining === FERRY && panningTime) { //input Meses de garimpo de balsa
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? 0.22 : 0.35;
        const prodGoldMonthFerry = 302;
        const toFerryGoldProductivity = panningTime * prodGoldMonthFerry;
        gramsHgReleasedInWater = lossPercentHgInWater * HgAuRatio * toFerryGoldProductivity;

    }else if (likeMining === FERRY && gold) { //input Ouro/Hectare
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? 0.22 : 0.35;
        gramsHgReleasedInWater = lossPercentHgInWater * HgAuRatio * gold;

    }else if (likeMining === ALLUVIUM && gold) { //input Ouro/Hectare
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? 0.132 : 0.21;
        gramsHgReleasedInWater = lossPercentHgInWater * HgAuRatio * gold;
    }

    const methyladPercent = txPrevalence === CONSERVATIVE ? 0.11 : 0.22;
    const toMethylatedWater = methyladPercent * gramsHgReleasedInWater;
    
    const years = 50;
    const ruralIndividualWeight = 59.1;
    const urbanindividualWeight = 70;
    const levelMediumContaminationFish = 0.5;
    const AverageFishConsumptionPerDayInRuralGrams = 144.5;
    const consumptionMediumFishByDayInGramsUrban = 57;
    const densityPopulationalRegionNorth2060 = 6.00696;
    const propOfPeopleOver20YearsOfAgeByTotalPop = 0.58;
    const accumulatedRiskMercuryHypertension = 0.0121;
    const durationOfDisabilityHypertension = 52;
    const weightOgDisabilityHypertension = 0.246;
    const agwt = 1;
    const discountRate = 0.03;
    const bplusr = -0.07;
    const DALY1Hypertension = 103599;
    const yearBeginningOfDisabilityHyertension = 20;
    const constant = 0.1658;
    
    const individualAverageWeight = (municipalRuralPop*ruralIndividualWeight) + (municipalUrbanPop*urbanindividualWeight);
    const daysIn50years = (365*years);
    
    const ingestionMediaDailyMicrogramMercuryUrban = (consumptionMediumFishByDayInGramsUrban * levelMediumContaminationFish) / urbanindividualWeight;
    const ingestionMediaDailyMicrogramMercuryRural = (AverageFishConsumptionPerDayInRuralGrams * levelMediumContaminationFish) / ruralIndividualWeight;
    const ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG = (municipalRuralPop * ingestionMediaDailyMicrogramMercuryRural) + (municipalUrbanPop * ingestionMediaDailyMicrogramMercuryUrban);
    const ingestionMediaMercuryDaily1IndividualInGramsPerKG = ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG/1000000;
    const ingestionMediaDailyIndividualInGramsPerDaily = ingestionMediaMercuryDaily1IndividualInGramsPerKG*individualAverageWeight;
    const ingestionMediaMercuryEmyears = daysIn50years * ingestionMediaDailyIndividualInGramsPerDaily;

    const popSize100kmRadius = isRegion ? (popDensity2060 * Math.pow((Math.PI * 100), 2)) : (densityPopulationalRegionNorth2060 * Math.pow((Math.PI * 100), 2));
    
    const affectedPeople = (toMethylatedWater/ingestionMediaMercuryEmyears);
    const toPopulationAffectedMercuryHair = affectedPeople < popSize100kmRadius ? affectedPeople : popSize100kmRadius;
    const popPeopleAbove20YearsOldinTheRegion = toPopulationAffectedMercuryHair * propOfPeopleOver20YearsOfAgeByTotalPop;
    const peopleAbove20YearsoldInTheRegionIn52Years = accumulatedRiskMercuryHypertension * popPeopleAbove20YearsOldinTheRegion;
    const hypertensionIncidenceRate = (peopleAbove20YearsoldInTheRegionIn52Years * 1000)/  toPopulationAffectedMercuryHair;
    
    const hypertensionIncidence = (hypertensionIncidenceRate * toPopulationAffectedMercuryHair) / 1000;

    const calculation1 = (constant*Math.exp(discountRate*yearBeginningOfDisabilityHyertension))/(Math.pow(bplusr,2))
    const calculation2 = (bplusr*(durationOfDisabilityHypertension + yearBeginningOfDisabilityHyertension));
    const calculation3 = (bplusr*(durationOfDisabilityHypertension + yearBeginningOfDisabilityHyertension)-1);
    const calculation4 = (Math.exp(bplusr*yearBeginningOfDisabilityHyertension)*(bplusr*yearBeginningOfDisabilityHyertension-1));
    const calculation5 = ((1-agwt)/discountRate);
    const calculation6 = (1-Math.exp(-discountRate*durationOfDisabilityHypertension));
    const calculation7 = (agwt*calculation1*((Math.exp(calculation2)*calculation3)-calculation4)+calculation5*calculation6);
   
    const dalyHypertension = hypertensionIncidence * weightOgDisabilityHypertension * calculation7;
    const DALY1HypertensionCost = dalyHypertension * DALY1Hypertension;

    const AnnualHypertensionCostTreatament = 292;
    const incidenceHypertensionTreatament = (hypertensionIncidence * toPopulationAffectedMercuryHair) /1000;
    const toCostHypertensionTreatamentInYears = incidenceHypertensionTreatament * durationOfDisabilityHypertension * AnnualHypertensionCostTreatament;
    const toDALYCostAndHypertensionTreatment = toCostHypertensionTreatamentInYears + DALY1HypertensionCost;

    return toDALYCostAndHypertensionTreatment


}

export default hypertension