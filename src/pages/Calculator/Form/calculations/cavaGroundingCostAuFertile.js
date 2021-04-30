
import { AMOUNT_GOLD, FERRY, PIT, YEARS_OF_MINING } from "../consts";

const cavaGroundingCostAuFertile = (likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, gold) => {
     
        const fertileEarthMediumDepth = 0.4;
        const groundingCostFertilePit = 12.7;
        const qtExtractedInM3PerExcavatorHour = 160;
        const excavatorCostPerKM = 3.8
        const excavatorHoursPerDay = 10;
        const kmRotatedPerLiter = 2.5;
        const avaregeWageDriverFreightPerKm = 2.22;
        const dieselLiterPrice = 3.24;
        const daysInTheYear = 365;
        const sterileOreEnhancement = 7;
        const goldDensity = 2.76;
        const excavationGoldLoss = 2;
        const pitProductivity = 0.4;
        const productivityGoldMiningTon = 0.4;
        const amountOfGoldGramsPerYearWell = 23700;
        const hollowMediumDepth = 10;

    if (likeMining === FERRY) {
        const toCostOfFertileGroundingWithFreight = 0
        return toCostOfFertileGroundingWithFreight
        
    }else if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) {
        
        const toGoldGramQuantityWell = amountOfGoldGramsPerYearWell * valueLikeMining;
        const revolvedSoloTon = toGoldGramQuantityWell / productivityGoldMiningTon;

        const upturnedSterileTon = revolvedSoloTon * sterileOreEnhancement;
        const toUpturnedSoil = upturnedSterileTon + revolvedSoloTon;
        const losslessVolume = toUpturnedSoil / goldDensity;
        const lossyVolume = losslessVolume * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / hollowMediumDepth;
        const fertileLandVolume = fertileEarthMediumDepth * affectedAreaM2

        const toCostGroundingFertileLandWithoutFreight = fertileLandVolume * groundingCostFertilePit; 
        const excavatorQuantityM3PerYearFertileLand = daysInTheYear * excavatorHoursPerDay * qtExtractedInM3PerExcavatorHour;
        const excavatornsQuantityFertil = (fertileLandVolume / excavatorQuantityM3PerYearFertileLand) < 1 ? 1 : Math.ceil(fertileLandVolume / excavatorQuantityM3PerYearFertileLand); //ok
        const transportCostTotalFreightFertileExcavator = distanceFromUrbanCenterToFreight * excavatorCostPerKM;
        const qtLitersDieselConsumedFertil = distanceFromUrbanCenterToFreight / kmRotatedPerLiter;
        const fuelCostFertileFreight =	dieselLiterPrice * qtLitersDieselConsumedFertil;
        const freightCostWithFertilDriver = avaregeWageDriverFreightPerKm * distanceFromUrbanCenterToFreight;
        const totalCostShippingFertileOneWay = freightCostWithFertilDriver + fuelCostFertileFreight + transportCostTotalFreightFertileExcavator;
        const toCostShippingGroundFertilityRoundtrip = totalCostShippingFertileOneWay * 2;
        const toCostFreightFinalFertileGrounding = toCostShippingGroundFertilityRoundtrip * excavatornsQuantityFertil;
        const toCostOfFertileGroundingWithFreight = toCostFreightFinalFertileGrounding + toCostGroundingFertileLandWithoutFreight;
        return toCostOfFertileGroundingWithFreight
        
    }else if (likeMining === PIT && typeValueLikeMining === AMOUNT_GOLD){

        const revolvedSoloTon = valueLikeMining / pitProductivity;
        const upturnedSterileTon = revolvedSoloTon * sterileOreEnhancement;
        const toUpturnedSoil = revolvedSoloTon + upturnedSterileTon;
        const losslessVolume = toUpturnedSoil / goldDensity;
        const lossyVolume = losslessVolume * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / hollowMediumDepth;
        
        const fertileLandVolume = fertileEarthMediumDepth * affectedAreaM2;
        const toCostGroundingFertileLandWithoutFreight = fertileLandVolume * groundingCostFertilePit;
        const excavatorQuantityM3PerYearFertileLand = daysInTheYear * excavatorHoursPerDay * qtExtractedInM3PerExcavatorHour;
        const excavatornsQuantityFertil = (fertileLandVolume / excavatorQuantityM3PerYearFertileLand) < 1 ? 1 : Math.ceil(fertileLandVolume / excavatorQuantityM3PerYearFertileLand); //ok
        const transportCostTotalFreightFertileExcavator = distanceFromUrbanCenterToFreight * excavatorCostPerKM;
        const qtLitersDieselConsumedFertil = distanceFromUrbanCenterToFreight / kmRotatedPerLiter;
        const fuelCostFertileFreight =	dieselLiterPrice * qtLitersDieselConsumedFertil;
        const freightCostWithFertilDriver = avaregeWageDriverFreightPerKm * distanceFromUrbanCenterToFreight;
        const totalCostShippingFertileOneWay = freightCostWithFertilDriver + fuelCostFertileFreight + transportCostTotalFreightFertileExcavator;
        const toCostShippingGroundFertilityRoundtrip = totalCostShippingFertileOneWay * 2;
        const toCostFreightFinalFertileGrounding = toCostShippingGroundFertilityRoundtrip * excavatornsQuantityFertil;
        const toCostOfFertileGroundingWithFreight = toCostFreightFinalFertileGrounding + toCostGroundingFertileLandWithoutFreight;
        return toCostOfFertileGroundingWithFreight

    }else { 
        
        const revolvedSoloTon = gold / pitProductivity;
        const upturnedSterileTon = revolvedSoloTon * sterileOreEnhancement;
        const toUpturnedSoil = revolvedSoloTon + upturnedSterileTon;
        const losslessVolume = toUpturnedSoil / goldDensity;
        const lossyVolume = losslessVolume * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / pitDepth;
        
        const fertileLandVolume = fertileEarthMediumDepth * affectedAreaM2;
        const toCostGroundingFertileLandWithoutFreight = fertileLandVolume * groundingCostFertilePit;
        const excavatorQuantityM3PerYearFertileLand = daysInTheYear * excavatorHoursPerDay * qtExtractedInM3PerExcavatorHour;
        const excavatornsQuantityFertil = (fertileLandVolume / excavatorQuantityM3PerYearFertileLand) < 1 ? 1 : Math.ceil(fertileLandVolume / excavatorQuantityM3PerYearFertileLand); //ok
        const transportCostTotalFreightFertileExcavator = distanceFromUrbanCenterToFreight * excavatorCostPerKM;
        const qtLitersDieselConsumedFertil = distanceFromUrbanCenterToFreight / kmRotatedPerLiter;
        const fuelCostFertileFreight =	dieselLiterPrice * qtLitersDieselConsumedFertil;
        const freightCostWithFertilDriver = avaregeWageDriverFreightPerKm * distanceFromUrbanCenterToFreight;
        const totalCostShippingFertileOneWay = freightCostWithFertilDriver + fuelCostFertileFreight + transportCostTotalFreightFertileExcavator;
        const toCostShippingGroundFertilityRoundtrip = totalCostShippingFertileOneWay * 2;
        const toCostFreightFinalFertileGrounding = toCostShippingGroundFertilityRoundtrip * excavatornsQuantityFertil;
        const toCostOfFertileGroundingWithFreight = toCostFreightFinalFertileGrounding + toCostGroundingFertileLandWithoutFreight;
        return toCostOfFertileGroundingWithFreight
        

    }
}


export default cavaGroundingCostAuFertile