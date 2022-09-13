import fixedCalcultions from "hooks/fixedCalculations";
import { ALLUVIUM, AMOUNT_GOLD, FERRY, MONTHS_OF_MINING, PIT, YEARS_OF_MINING } from "../consts";

const CONSERVATIVE = 0.29


const hypertension = (country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion) => {
    
    const { general, hypertension } = fixedCalcultions(country_region)
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
        aDALYUSD,
        HgAuRatio
    } = general
    const { propOfPeopleOver20YearsOfAgeByTotalPop, AnnualHypertensionCostTreatamentUSD, accumulatedRiskMercuryHypertension } = hypertension

        
    let gramsHgReleasedInWater
    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) { //Input Anos de Garimpo
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? percentLossHgInWater_convervative : percentLossHgInWater;
        const quantityOfGramsGoldYearWell = 23700;
        const amountOfTotalGoldWell = quantityOfGramsGoldYearWell * valueLikeMining;
        gramsHgReleasedInWater = lossPercentHgInWater * HgAuRatio * amountOfTotalGoldWell

    }else if (likeMining === PIT && typeValueLikeMining === AMOUNT_GOLD) { //input Ouro
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? percentLossHgInWater_convervative : percentLossHgInWater;
        gramsHgReleasedInWater = lossPercentHgInWater * HgAuRatio * valueLikeMining;

    }else if (likeMining === FERRY && typeValueLikeMining === MONTHS_OF_MINING) { //input Meses de garimpo de balsa
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? percentLossHgInWater_ferry__convervative : percentLossHgInWater_ferry;
        const toFerryGoldProductivity = valueLikeMining * prodGoldMonthFerry;
        gramsHgReleasedInWater = lossPercentHgInWater * HgAuRatio * toFerryGoldProductivity;

    }else if (likeMining === FERRY && typeValueLikeMining === AMOUNT_GOLD) { //input Ouro
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? percentLossHgInWater_ferry__convervative : percentLossHgInWater_ferry;
        gramsHgReleasedInWater = lossPercentHgInWater * HgAuRatio * valueLikeMining;

    }else if (likeMining === ALLUVIUM) { //input Ouro/Hectare
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? percentLossHgInWater_convervative : percentLossHgInWater;
        gramsHgReleasedInWater = lossPercentHgInWater * HgAuRatio * gold;
    }

    const methyladPercentValue = txPrevalence === CONSERVATIVE ? methyladPercent_conservative : methyladPercent;
    const toMethylatedWater = methyladPercentValue * gramsHgReleasedInWater;

    
    const years = 50;
    //const ruralIndividualWeight = 59.1;
    //const urbanindividualWeight = 70;
    //const levelMediumContaminationFish = 0.5;
    //const AverageFishConsumptionPerDayInRuralGrams = 144.5;
    //const consumptionMediumFishByDayInGramsUrban = 57;
    //const densityPopulationalRegionNorth2060 = 6.00696;
    //const propOfPeopleOver20YearsOfAgeByTotalPop = 0.58;
    //const accumulatedRiskMercuryHypertension = 0.0121;


    /*
        const DALY1HeartAttackCost = 103599;
        nome original = DALY1HeartAttackCost
        substituição  = aDALYUSD
    */

    const durationOfDisabilityHypertension = 52;
    const weightOgDisabilityHypertension = 0.246;
    const agwt = 1;
    const discountRate = 0.03;
    const bplusr = -0.07;
    const yearBeginningOfDisabilityHyertension = 20;
    const constant = 0.1658;
    
    const individualAverageWeight = (ruralPopMunicipality*ruralIndividualWeight) + (urbanPopMunicipality*urbanindividualWeight);
    const daysIn50years = (365*years);
    
    const ingestionMediaDailyMicrogramMercuryUrban = (consumptionMediumFishByDayInGramsUrban * levelMediumContaminationFish) / urbanindividualWeight;
    const ingestionMediaDailyMicrogramMercuryRural = (AverageFishConsumptionPerDayInRuralGrams * levelMediumContaminationFish) / ruralIndividualWeight;
    const ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG = (ruralPopMunicipality * ingestionMediaDailyMicrogramMercuryRural) + (urbanPopMunicipality * ingestionMediaDailyMicrogramMercuryUrban);
    const ingestionMediaMercuryDaily1IndividualInGramsPerKG = ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG/1000000;
    const ingestionMediaDailyIndividualInGramsPerDaily = ingestionMediaMercuryDaily1IndividualInGramsPerKG*individualAverageWeight;
    const ingestionMediaMercuryEmyears = daysIn50years * ingestionMediaDailyIndividualInGramsPerDaily;

    const rAoQuadrado = Math.pow(100, 2)
    const popSize100kmRadius = isRegion ? (popDensity2060 * (Math.PI * rAoQuadrado)) : (densityPopulationalRegionNorth2060 * (Math.PI * rAoQuadrado));
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
    const DALY1HypertensionCost = dalyHypertension * aDALYUSD;

    //const AnnualHypertensionCostTreatamentUSD = 292;
    const incidenceHypertensionTreatament = (hypertensionIncidence * toPopulationAffectedMercuryHair) /1000;
    const toCostHypertensionTreatamentInYears = incidenceHypertensionTreatament * durationOfDisabilityHypertension * AnnualHypertensionCostTreatamentUSD;
    const toDALYCostAndHypertensionTreatment = toCostHypertensionTreatamentInYears + DALY1HypertensionCost;

    return toDALYCostAndHypertensionTreatment


}

export default hypertension