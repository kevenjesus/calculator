import { ALLUVIUM, FERRY, PIT } from "../consts";

const CONSERVATIVE = 0.29;

const heartAttack = (gold, ruralPopMunicipality, urbanPopMunicipality, txPrevalence, densityPop2060, isRegion, likeMining, panningTime) => {

    const HgAuRatio = 2.6;
    
    let HgGrassReleasedInWater
    if (likeMining === PIT && panningTime) { //Input Anos de Garimpo
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? 0.132 : 0.21;
        const quantityOgGramsgoldYearWell = 23700;
        const amountOfTotalGoldWell = quantityOgGramsgoldYearWell * panningTime;
        HgGrassReleasedInWater = lossPercentHgInWater * HgAuRatio * amountOfTotalGoldWell

    }else if (likeMining === PIT && gold) { //input Ouro/Hectare
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? 0.132 : 0.21;
        HgGrassReleasedInWater = lossPercentHgInWater * HgAuRatio * gold;

    }else if (likeMining === FERRY && panningTime) { //input Meses de garimpo de balsa
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? 0.22 : 0.35;
        const goldProductionMonthFerry = 302;
        const toGoldFerryProduction = panningTime * goldProductionMonthFerry;
        HgGrassReleasedInWater = lossPercentHgInWater * HgAuRatio * toGoldFerryProduction;

    }else if (likeMining === FERRY && gold) { //input Ouro/Hectare
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? 0.22 : 0.35;
        HgGrassReleasedInWater = lossPercentHgInWater * HgAuRatio * gold;

    }else if (likeMining === ALLUVIUM && gold) { //input Ouro/Hectare
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? 0.132 : 0.21;
        HgGrassReleasedInWater = lossPercentHgInWater * HgAuRatio * gold;
    }
    
    const methyladPercent = txPrevalence === CONSERVATIVE ? 0.11 : 0.22;
    const toMethylatedWater = methyladPercent * HgGrassReleasedInWater;
    
    const years = 50;
    const ruralIndividualWeight = 59.1;
    const urbanindividualWeight = 70;
    const levelMediumContaminationFish = 0.5;
    const AverageFishConsumptionPerDayInRuralGrams = 144.5;
    const consumptionMediumFishByDayInGramsUrban = 57;
    const densityPopulationalRegionNorth2060 = 6.00696;
    const proMenOver40ByPopTotal = 0.12;
    const durationDisabilityInfarction = 27;
    const weightOfDisabilityDisease = 0.439;
    const agwt = 1;
    const constant = 0.1658;
    const discountRate = 0.03;
    const yearStartOfDisabilityInfarction = 40;
    const bplusr = -0.07;
    const DALY1HeartAttackCost = 103599;
    const accumulatedRiskMercuryInfarction = 0.0161;

    const individualAverageWeight = (ruralPopMunicipality*ruralIndividualWeight) + (urbanPopMunicipality*urbanindividualWeight);
    const daysIn50years = (365*years);
    
    const ingestionMediaDailyMicrogramMercuryUrban = (consumptionMediumFishByDayInGramsUrban * levelMediumContaminationFish) / urbanindividualWeight;
    const ingestionMediaDailyMicrogramMercuryRural = (AverageFishConsumptionPerDayInRuralGrams * levelMediumContaminationFish) / ruralIndividualWeight;
    const ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG = (ruralPopMunicipality * ingestionMediaDailyMicrogramMercuryRural) + (urbanPopMunicipality * ingestionMediaDailyMicrogramMercuryUrban);
    const ingestionMediaMercuryDaily1IndividualInGramsPerKGDay = ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG/1000000;
    const ingestionMediaDaily1IndividualInGrams = ingestionMediaMercuryDaily1IndividualInGramsPerKGDay*individualAverageWeight;
    const ingestionMediaMercuryEmyears = daysIn50years * ingestionMediaDaily1IndividualInGrams;
    
    const popSize100kmRadius = isRegion ? (densityPop2060 * Math.pow((Math.PI * 100), 2)) : (densityPopulationalRegionNorth2060 * Math.pow((Math.PI * 100), 2));

    const affectedPeople = (toMethylatedWater/ingestionMediaMercuryEmyears);
    const toPopulationAffectedMercuryHair = affectedPeople < popSize100kmRadius ? affectedPeople : popSize100kmRadius;
    const popMenOver40inTheRegion = toPopulationAffectedMercuryHair * proMenOver40ByPopTotal;
    const menOver40InTheRegionIn27Years = accumulatedRiskMercuryInfarction * popMenOver40inTheRegion;
    const infarctionIncidenceRate = (menOver40InTheRegionIn27Years * 1000)/  toPopulationAffectedMercuryHair;

    const infarctionIncidence = (infarctionIncidenceRate * toPopulationAffectedMercuryHair) / 1000;

    const calculation0 = infarctionIncidence * weightOfDisabilityDisease;
    const calculation1 = (constant*Math.exp(discountRate*yearStartOfDisabilityInfarction))/(Math.pow(bplusr,2))
    const calculation2 = bplusr*(durationDisabilityInfarction + yearStartOfDisabilityInfarction);
    const calculation3 = bplusr*(durationDisabilityInfarction + yearStartOfDisabilityInfarction)-1;
    const calculation4 = Math.exp(bplusr*yearStartOfDisabilityInfarction)*(bplusr*yearStartOfDisabilityInfarction-1);
    const calculation5 = (1-agwt)/discountRate;
    const calculation6 = (1-Math.exp(-discountRate*durationDisabilityInfarction));

    const dalyInfarInfarto = calculation0 * (agwt*calculation1*((Math.exp(calculation2)*calculation3)-calculation4)+calculation5*calculation6);
    
    const DALYInfarction =  dalyInfarInfarto * DALY1HeartAttackCost;

    const annualInfarctTreatmentCost = 2300;
    const infarctionIncidenceTreatment = (infarctionIncidenceRate * toPopulationAffectedMercuryHair) /1000;
    const toCostOfInfarctionTreatmentYears = infarctionIncidenceTreatment * durationDisabilityInfarction * annualInfarctTreatmentCost;
    const toDALYCostAndInfarctionTreatment = toCostOfInfarctionTreatmentYears + DALYInfarction;

    return toDALYCostAndInfarctionTreatment
}

export default heartAttack