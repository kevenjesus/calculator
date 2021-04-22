
import { FERRY, PIT } from "../consts";

const cavaGroundingCostAuFertile = (hectare, gold, pitDepth, DistanciaGarimpoCentroUrbanoFrete, tipoGarimpo, tempoGarimpo) => {

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

    if (tipoGarimpo === FERRY) {
        const toCostOfFertileGroundingWithFreight = 0
        return toCostOfFertileGroundingWithFreight
        
    }else if (tipoGarimpo === PIT && tempoGarimpo) {
        
        const toGoldGramQuantityWell = amountOfGoldGramsPerYearWell * tempoGarimpo;
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
        const transportCostTotalFreightFertileExcavator = DistanciaGarimpoCentroUrbanoFrete * excavatorCostPerKM;
        const qtLitersDieselConsumedFertil = DistanciaGarimpoCentroUrbanoFrete / kmRotatedPerLiter;
        const fuelCostFertileFreight =	dieselLiterPrice * qtLitersDieselConsumedFertil;
        const freightCostWithFertilDriver = avaregeWageDriverFreightPerKm * DistanciaGarimpoCentroUrbanoFrete;
        const totalCostShippingFertileOneWay = freightCostWithFertilDriver + fuelCostFertileFreight + transportCostTotalFreightFertileExcavator;
        const toCostShippingGroundFertilityRoundtrip = totalCostShippingFertileOneWay * 2;
        const toCostFreightFinalFertileGrounding = toCostShippingGroundFertilityRoundtrip * excavatornsQuantityFertil;
        const toCostOfFertileGroundingWithFreight = toCostFreightFinalFertileGrounding + toCostGroundingFertileLandWithoutFreight;

        return Math.round(toCostOfFertileGroundingWithFreight * 100) / 100

    }else if (tipoGarimpo === PIT && hectare){

        const revolvedSoloTon = gold / pitProductivity;
        const upturnedSterileTon = revolvedSoloTon * sterileOreEnhancement;
        const toUpturnedSoil = revolvedSoloTon + upturnedSterileTon;
        const losslessVolume = toUpturnedSoil / goldDensity;
        const lossyVolume = losslessVolume * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / hollowMediumDepth;
        
        const fertileLandVolume = fertileEarthMediumDepth * affectedAreaM2;
        const toCostGroundingFertileLandWithoutFreight = fertileLandVolume * groundingCostFertilePit;
        const excavatorQuantityM3PerYearFertileLand = daysInTheYear * excavatorHoursPerDay * qtExtractedInM3PerExcavatorHour;
        const excavatornsQuantityFertil = (fertileLandVolume / excavatorQuantityM3PerYearFertileLand) < 1 ? 1 : Math.ceil(fertileLandVolume / excavatorQuantityM3PerYearFertileLand); //ok
        const transportCostTotalFreightFertileExcavator = DistanciaGarimpoCentroUrbanoFrete * excavatorCostPerKM;
        const qtLitersDieselConsumedFertil = DistanciaGarimpoCentroUrbanoFrete / kmRotatedPerLiter;
        const fuelCostFertileFreight =	dieselLiterPrice * qtLitersDieselConsumedFertil;
        const freightCostWithFertilDriver = avaregeWageDriverFreightPerKm * DistanciaGarimpoCentroUrbanoFrete;
        const totalCostShippingFertileOneWay = freightCostWithFertilDriver + fuelCostFertileFreight + transportCostTotalFreightFertileExcavator;
        const toCostShippingGroundFertilityRoundtrip = totalCostShippingFertileOneWay * 2;
        const toCostFreightFinalFertileGrounding = toCostShippingGroundFertilityRoundtrip * excavatornsQuantityFertil;
        const toCostOfFertileGroundingWithFreight = toCostFreightFinalFertileGrounding + toCostGroundingFertileLandWithoutFreight;

        return Math.round(toCostOfFertileGroundingWithFreight * 100) / 100

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
        const transportCostTotalFreightFertileExcavator = DistanciaGarimpoCentroUrbanoFrete * excavatorCostPerKM;
        const qtLitersDieselConsumedFertil = DistanciaGarimpoCentroUrbanoFrete / kmRotatedPerLiter;
        const fuelCostFertileFreight =	dieselLiterPrice * qtLitersDieselConsumedFertil;
        const freightCostWithFertilDriver = avaregeWageDriverFreightPerKm * DistanciaGarimpoCentroUrbanoFrete;
        const totalCostShippingFertileOneWay = freightCostWithFertilDriver + fuelCostFertileFreight + transportCostTotalFreightFertileExcavator;
        const toCostShippingGroundFertilityRoundtrip = totalCostShippingFertileOneWay * 2;
        const toCostFreightFinalFertileGrounding = toCostShippingGroundFertilityRoundtrip * excavatornsQuantityFertil;
        const toCostOfFertileGroundingWithFreight = toCostFreightFinalFertileGrounding + toCostGroundingFertileLandWithoutFreight;
        return toCostOfFertileGroundingWithFreight

    }
}

export default cavaGroundingCostAuFertile