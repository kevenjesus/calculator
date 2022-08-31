import fixedCalcultions from "hooks/fixedCalculations";
import { ALLUVIUM, AMOUNT_GOLD, FERRY, MONTHS_OF_MINING, PIT, YEARS_OF_MINING } from "../consts";

const CONSERVATIVE = 0.29;

const heartAttack = (country_region, likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)=> {
    const { general, heartAttack } = fixedCalcultions(country_region)
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
        goldProductionMonthFerry,
        aDALYUSD,
        HgAuRatio
    } = general
    const { proMenOver40ByPopTotal, accumulatedRiskMercuryInfarction, annualInfarctTreatmentCostUSD } = heartAttack
        
    let HgGrassReleasedInWater
    if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) { //Input Anos de Garimpo
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? percentLossHgInWater_convervative : percentLossHgInWater;
        const quantityOgGramsgoldYearWell = 23700;
        const amountOfTotalGoldWell = quantityOgGramsgoldYearWell * valueLikeMining;
        HgGrassReleasedInWater = lossPercentHgInWater * HgAuRatio * amountOfTotalGoldWell

    }else if (likeMining === PIT && typeValueLikeMining === AMOUNT_GOLD) { //input Ouro
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? percentLossHgInWater_convervative : percentLossHgInWater;
        HgGrassReleasedInWater = lossPercentHgInWater * HgAuRatio * valueLikeMining;

    }else if (likeMining === FERRY && typeValueLikeMining === MONTHS_OF_MINING) { //input Meses de garimpo
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? percentLossHgInWater_ferry__convervative : percentLossHgInWater_ferry;
        const toGoldFerryProduction = valueLikeMining * goldProductionMonthFerry;
        HgGrassReleasedInWater = lossPercentHgInWater * HgAuRatio * toGoldFerryProduction;

    }else if (likeMining === FERRY && typeValueLikeMining === AMOUNT_GOLD) { //input Ouro
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? percentLossHgInWater_ferry__convervative : percentLossHgInWater_ferry;
        HgGrassReleasedInWater = lossPercentHgInWater * HgAuRatio * valueLikeMining;

    }else if (likeMining === ALLUVIUM) { //input Ouro/Hectare
        const lossPercentHgInWater = txPrevalence === CONSERVATIVE ? percentLossHgInWater_convervative : percentLossHgInWater;
        HgGrassReleasedInWater = lossPercentHgInWater * HgAuRatio * gold;
       
    }
    
    const methyladPercentValue = txPrevalence === CONSERVATIVE ? methyladPercent_conservative : methyladPercent;
    const toMethylatedWater = methyladPercentValue * HgGrassReleasedInWater;
    
    const years = 50;
    //const ruralIndividualWeight = 59.1;
    //const urbanindividualWeight = 70;
    //const levelMediumContaminationFish = 0.5;
    //const AverageFishConsumptionPerDayInRuralGrams = 144.5;
    //const consumptionMediumFishByDayInGramsUrban = 57;
    //const densityPopulationalRegionNorth2060 = 6.00696;
    //const proMenOver40ByPopTotal = 0.12;

    /*
        const DALY1HeartAttackCost = 103599;
        nome original = DALY1HeartAttackCost
        substituição  = aDALYUSD
    */

    const durationDisabilityInfarction = 27;
    const weightOfDisabilityDisease = 0.439;
    const agwt = 1;
    const constant = 0.1658;
    const discountRate = 0.03;
    const yearStartOfDisabilityInfarction = 40;
    const bplusr = -0.07;

    

    //const accumulatedRiskMercuryInfarction = 0.0161;

    const individualAverageWeight = (ruralPopMunicipality*ruralIndividualWeight) + (urbanPopMunicipality*urbanindividualWeight);
    const daysIn50years = (365*years);
    
    const ingestionMediaDailyMicrogramMercuryUrban = (consumptionMediumFishByDayInGramsUrban * levelMediumContaminationFish) / urbanindividualWeight;
    const ingestionMediaDailyMicrogramMercuryRural = (AverageFishConsumptionPerDayInRuralGrams * levelMediumContaminationFish) / ruralIndividualWeight;
    const ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG = (ruralPopMunicipality * ingestionMediaDailyMicrogramMercuryRural) + (urbanPopMunicipality * ingestionMediaDailyMicrogramMercuryUrban);
    const ingestionMediaMercuryDaily1IndividualInGramsPerKGDay = ingestionMediaMercuryDaily1IndividualInMicrogramsPerKG/1000000;
    const ingestionMediaDaily1IndividualInGrams = ingestionMediaMercuryDaily1IndividualInGramsPerKGDay*individualAverageWeight;
    const ingestionMediaMercuryEmyears = daysIn50years * ingestionMediaDaily1IndividualInGrams;

    const rAoQuadrado = Math.pow(100, 2)
    const popSize100kmRadius = isRegion ? (popDensity2060 * (Math.PI * rAoQuadrado)) : (densityPopulationalRegionNorth2060 * (Math.PI * rAoQuadrado));
    
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
    
    const DALYInfarction =  dalyInfarInfarto * aDALYUSD;

    //const annualInfarctTreatmentCostUSD = 2300;
    const infarctionIncidenceTreatment = (infarctionIncidenceRate * toPopulationAffectedMercuryHair) /1000;
    const toCostOfInfarctionTreatmentYears = infarctionIncidenceTreatment * durationDisabilityInfarction * annualInfarctTreatmentCostUSD;
    const toDALYCostAndInfarctionTreatment = toCostOfInfarctionTreatmentYears + DALYInfarction;

    return toDALYCostAndInfarctionTreatment
}

export default heartAttack