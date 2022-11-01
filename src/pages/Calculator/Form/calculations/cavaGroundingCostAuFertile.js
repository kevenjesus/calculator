
import fixedCalcultions from "hooks/fixedCalculations";
import { AMOUNT_GOLD, FERRY, PIT, YEARS_OF_MINING } from "../consts";

const cavaGroundingCostAuFertile = (country_region,likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, gold) => {
        const { cavaGroundingCostAuFertile, general } = fixedCalcultions(country_region)
        const { 
            quantitOfM3ExcavatorPerHour, 
            averageDepthOfFertileEarth,
            excavatorHoursDays,
            excavatorCostPerKMUSD,
            kmRotatedPerLiter,
            averageDriverSalaryFreightPerKmUSD,
            priceLiterDieselUSD,
            densityGold,
            excavationGoldLoss,
            quantityOfGoldGramsPerYearWell,
            cavaAverageProductivity,
            hollowMediumDepth
        } = general
        const { groundingCostFertilePitUSD } = cavaGroundingCostAuFertile

        /*
        const groundingCostFertilePit = 12.7;
        nome original = groundingCostFertilePit
        substituição  = groundingCostFertilePitUSD

        const qtExtractedInM3PerExcavatorHour = 160;
        nome original = qtExtractedInM3PerExcavatorHour
        substituição  = quantitOfM3ExcavatorPerHour

        const fertileEarthMediumDepth = 0.4;
        nome original = fertileEarthMediumDepth
        substituição  = averageDepthOfFertileEarth

        const excavatorHoursPerDay = 10;
        nome original = excavatorHoursPerDay
        substituição  = excavatorHoursDays

        const excavatorCostPerKM = 3.8
        nome original = excavatorCostPerKM
        substituição  = excavatorCostPerKMUSD

        const avaregeWageDriverFreightPerKm = 2.22;
        nome original = avaregeWageDriverFreightPerKm
        substituição  = averageDriverSalaryFreightPerKmUSD

        const dieselLiterPrice = 3.24;
        nome original = dieselLiterPrice
        substituição  = priceLiterDieselUSD

        const goldDensity = 2.76;
        nome original = goldDensity
        substituição  = densityGold

        const amountOfGoldGramsPerYearWell = 23700;
        nome original = amountOfGoldGramsPerYearWell
        substituição  = quantityOfGoldGramsPerYearWell

        const productivityGoldMiningTon = 0.4;
        nome original = productivityGoldMiningTon
        substituição  = cavaAverageProductivity
        */
       
        //const kmRotatedPerLiter = 2.5;
        //const excavationGoldLoss = 2;
        //const hollowMediumDepth = 10;
        
        const daysInTheYear = 365;
        const sterileOreEnhancement = 7;
        const pitProductivity = 0.4;
    
        

    if (likeMining === FERRY) {
        const toCostOfFertileGroundingWithFreight = 0
        return toCostOfFertileGroundingWithFreight
        
    }else if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING) {
        
        const toGoldGramQuantityWell = quantityOfGoldGramsPerYearWell * valueLikeMining;
        const revolvedSoloTon = toGoldGramQuantityWell / cavaAverageProductivity;

        const upturnedSterileTon = revolvedSoloTon * sterileOreEnhancement;
        const toUpturnedSoil = upturnedSterileTon + revolvedSoloTon;
        const losslessVolume = toUpturnedSoil / densityGold;
        const lossyVolume = losslessVolume * excavationGoldLoss;
        console.log('volume com perda', lossyVolume)
        const affectedAreaM2 = lossyVolume / hollowMediumDepth;
        const fertileLandVolume = averageDepthOfFertileEarth * affectedAreaM2
        const toCostGroundingFertileLandWithoutFreight = fertileLandVolume * groundingCostFertilePitUSD; 
        const excavatorQuantityM3PerYearFertileLand = daysInTheYear * excavatorHoursDays * quantitOfM3ExcavatorPerHour;
        const excavatornsQuantityFertil = (fertileLandVolume / excavatorQuantityM3PerYearFertileLand) < 1 ? 1 : Math.ceil(fertileLandVolume / excavatorQuantityM3PerYearFertileLand); //ok
        const transportCostTotalFreightFertileExcavator = distanceFromUrbanCenterToFreight * excavatorCostPerKMUSD;
        const qtLitersDieselConsumedFertil = distanceFromUrbanCenterToFreight / kmRotatedPerLiter;
        const fuelCostFertileFreight =	priceLiterDieselUSD * qtLitersDieselConsumedFertil;
        const freightCostWithFertilDriver = averageDriverSalaryFreightPerKmUSD * distanceFromUrbanCenterToFreight;
        const totalCostShippingFertileOneWay = freightCostWithFertilDriver + fuelCostFertileFreight + transportCostTotalFreightFertileExcavator;
        const toCostShippingGroundFertilityRoundtrip = totalCostShippingFertileOneWay * 2;
        const toCostFreightFinalFertileGrounding = toCostShippingGroundFertilityRoundtrip * excavatornsQuantityFertil;
        const toCostOfFertileGroundingWithFreight = toCostFreightFinalFertileGrounding + toCostGroundingFertileLandWithoutFreight;
        return {
            lossyVolume,
            value: toCostOfFertileGroundingWithFreight
        }
        
    }else if (likeMining === PIT && typeValueLikeMining === AMOUNT_GOLD){

        const revolvedSoloTon = valueLikeMining / pitProductivity;
        const upturnedSterileTon = revolvedSoloTon * sterileOreEnhancement;
        const toUpturnedSoil = revolvedSoloTon + upturnedSterileTon;
        const losslessVolume = toUpturnedSoil / densityGold;
        const lossyVolume = losslessVolume * excavationGoldLoss;
        console.log('volume com perda', lossyVolume)
        const affectedAreaM2 = lossyVolume / hollowMediumDepth;

        const fertileLandVolume = averageDepthOfFertileEarth * affectedAreaM2;
        const toCostGroundingFertileLandWithoutFreight = fertileLandVolume * groundingCostFertilePitUSD;
        const excavatorQuantityM3PerYearFertileLand = daysInTheYear * excavatorHoursDays * quantitOfM3ExcavatorPerHour;
        const excavatornsQuantityFertil = (fertileLandVolume / excavatorQuantityM3PerYearFertileLand) < 1 ? 1 : Math.ceil(fertileLandVolume / excavatorQuantityM3PerYearFertileLand); //ok
        const transportCostTotalFreightFertileExcavator = distanceFromUrbanCenterToFreight * excavatorCostPerKMUSD;
        const qtLitersDieselConsumedFertil = distanceFromUrbanCenterToFreight / kmRotatedPerLiter;
        const fuelCostFertileFreight =	priceLiterDieselUSD * qtLitersDieselConsumedFertil;
        const freightCostWithFertilDriver = averageDriverSalaryFreightPerKmUSD * distanceFromUrbanCenterToFreight;
        const totalCostShippingFertileOneWay = freightCostWithFertilDriver + fuelCostFertileFreight + transportCostTotalFreightFertileExcavator;
        const toCostShippingGroundFertilityRoundtrip = totalCostShippingFertileOneWay * 2;
        const toCostFreightFinalFertileGrounding = toCostShippingGroundFertilityRoundtrip * excavatornsQuantityFertil;
        const toCostOfFertileGroundingWithFreight = toCostFreightFinalFertileGrounding + toCostGroundingFertileLandWithoutFreight;
        return {
            lossyVolume,
            value: toCostOfFertileGroundingWithFreight
        }

    }else { 
        
        const revolvedSoloTon = gold / pitProductivity;
        const upturnedSterileTon = revolvedSoloTon * sterileOreEnhancement;
        const toUpturnedSoil = revolvedSoloTon + upturnedSterileTon;
        const losslessVolume = toUpturnedSoil / densityGold;
        const lossyVolume = losslessVolume * excavationGoldLoss;
        console.log('volume com perda', lossyVolume)
        const affectedAreaM2 = lossyVolume / pitDepth;
        
        const fertileLandVolume = averageDepthOfFertileEarth * affectedAreaM2;
        const toCostGroundingFertileLandWithoutFreight = fertileLandVolume * groundingCostFertilePitUSD;
        const excavatorQuantityM3PerYearFertileLand = daysInTheYear * excavatorHoursDays * quantitOfM3ExcavatorPerHour;
        const excavatornsQuantityFertil = (fertileLandVolume / excavatorQuantityM3PerYearFertileLand) < 1 ? 1 : Math.ceil(fertileLandVolume / excavatorQuantityM3PerYearFertileLand); //ok
        const transportCostTotalFreightFertileExcavator = distanceFromUrbanCenterToFreight * excavatorCostPerKMUSD;
        const qtLitersDieselConsumedFertil = distanceFromUrbanCenterToFreight / kmRotatedPerLiter;
        const fuelCostFertileFreight =	priceLiterDieselUSD * qtLitersDieselConsumedFertil;
        const freightCostWithFertilDriver = averageDriverSalaryFreightPerKmUSD * distanceFromUrbanCenterToFreight;
        const totalCostShippingFertileOneWay = freightCostWithFertilDriver + fuelCostFertileFreight + transportCostTotalFreightFertileExcavator;
        const toCostShippingGroundFertilityRoundtrip = totalCostShippingFertileOneWay * 2;
        const toCostFreightFinalFertileGrounding = toCostShippingGroundFertilityRoundtrip * excavatornsQuantityFertil;
        const toCostOfFertileGroundingWithFreight = toCostFreightFinalFertileGrounding + toCostGroundingFertileLandWithoutFreight;
        return {
            lossyVolume,
            value: toCostOfFertileGroundingWithFreight
        }
    }
}


export default cavaGroundingCostAuFertile