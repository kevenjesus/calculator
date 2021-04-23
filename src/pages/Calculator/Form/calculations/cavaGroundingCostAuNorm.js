import { ALLUVIUM, AMOUNT_GOLD, FERRY, PIT, YEARS_OF_MINING } from "../consts";

const cavaGroundingCostAuNorm = (likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, hectare) => {

    const averageDepthOfFertileEarth = 0.4;
    const normalCavaGroundingCost = 1;
    const quantitOfM3ExcavatorPerHour = 160;
    const ExcavatorCostPerKm = 3.8;
    const excavatorHoursDays = 10;
    const kmRotatedPerLiter = 2.5;
    const avarageDriverSalaryFreightPerKm = 2.22;
    const dieselLiterPrice = 3.24;
    const daysInTheYear = 365;
    const sterileOre = 7;
    const excavationGoldLoss = 2;
    const goldDensity = 2.76;
    const depthMediumHollow = 10;
    const qtOfGoldGramsPerYearWell = 23700;
    const hollowMediumDepth = 0.4;

    if (likeMining === ALLUVIUM) { // Input por Ouro/Hectare
        const normalGroundDepth = pitDepth - averageDepthOfFertileEarth;
        const affectedAreaM2 = hectare * 10000
        const normalGroundVolume = normalGroundDepth * affectedAreaM2;

        const toCostNormalGroundingWithoutShipping = normalGroundVolume * normalCavaGroundingCost;
        const excavatorQuantityM3PerYear = daysInTheYear * excavatorHoursDays * quantitOfM3ExcavatorPerHour;
        const normalExcavatorsQuantity =(normalGroundVolume / excavatorQuantityM3PerYear) < 1 ? 1 : Math.ceil(normalGroundVolume / excavatorQuantityM3PerYear);
        const transportCostTotalFreightNormalExcavator = distanceFromUrbanCenterToFreight * ExcavatorCostPerKm;
        const AmountOfLitersDieselConsumed = distanceFromUrbanCenterToFreight / kmRotatedPerLiter;
        const freightCostWithNormalDriver = avarageDriverSalaryFreightPerKm * distanceFromUrbanCenterToFreight;
        const fuelCostNormalFreight = dieselLiterPrice * AmountOfLitersDieselConsumed;
        const toCostNormalShippingOneWay = freightCostWithNormalDriver + fuelCostNormalFreight + transportCostTotalFreightNormalExcavator;
        const toCostFreightNroamlGroundingRoundTrip = toCostNormalShippingOneWay * 2;
        const toCostFreightFinalNormalGrounding = toCostFreightNroamlGroundingRoundTrip * normalExcavatorsQuantity;
        const toCostNormalGroundingWithFreight = toCostFreightFinalNormalGrounding + toCostNormalGroundingWithoutShipping;
        return toCostNormalGroundingWithFreight
        
    }else if (likeMining === PIT && typeValueLikeMining === AMOUNT_GOLD) { // Input por Ouro
        const normalGroundDepth = depthMediumHollow - averageDepthOfFertileEarth;
        const revolvedSoloTon = valueLikeMining / hollowMediumDepth;
        const revolvedSterileTon = revolvedSoloTon * sterileOre;
        const totalSoloRevolved = revolvedSoloTon + revolvedSterileTon;
        const losslessVolume = totalSoloRevolved / goldDensity;
        const lossyVolume = losslessVolume * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / depthMediumHollow;
        const normalGroundVolume = normalGroundDepth * affectedAreaM2;
        const toCostNormalGroundingWithoutShipping = normalGroundVolume * normalCavaGroundingCost;
        const excavatorQuantityM3PerYear = daysInTheYear * excavatorHoursDays * quantitOfM3ExcavatorPerHour;
        const normalExcavatorsQuantity = (normalGroundVolume / excavatorQuantityM3PerYear) < 1 ? 1 : Math.ceil(normalGroundVolume / excavatorQuantityM3PerYear);
        const transportCostTotalFreightNormalExcavator = distanceFromUrbanCenterToFreight * ExcavatorCostPerKm;
        const AmountOfLitersDieselConsumed = distanceFromUrbanCenterToFreight / kmRotatedPerLiter;
        const freightCostWithNormalDriver = avarageDriverSalaryFreightPerKm * distanceFromUrbanCenterToFreight;
        const fuelCostNormalFreight = dieselLiterPrice * AmountOfLitersDieselConsumed;
        const toCostNormalShippingOneWay = freightCostWithNormalDriver + fuelCostNormalFreight + transportCostTotalFreightNormalExcavator;
        const toCostFreightNroamlGroundingRoundTrip = toCostNormalShippingOneWay * 2;
        const toCostFreightFinalNormalGrounding = toCostFreightNroamlGroundingRoundTrip * normalExcavatorsQuantity;
        const toCostNormalGroundingWithFreight = toCostFreightFinalNormalGrounding + toCostNormalGroundingWithoutShipping;
        return toCostNormalGroundingWithFreight

    }else if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING)  { //Input Anos de Garimpo

    
        const quantityOfGramsGoldTotalWell = qtOfGoldGramsPerYearWell * valueLikeMining;
        const revolvedSoloTon = quantityOfGramsGoldTotalWell / 0.4;
        const revolvedSterileTon = revolvedSoloTon * sterileOre;
        const totalSoloRevolved = revolvedSterileTon + revolvedSoloTon;
        const losslessVolume = totalSoloRevolved / goldDensity;
        const lossyVolume = losslessVolume * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / depthMediumHollow;
        const normalGroundDepth = depthMediumHollow - averageDepthOfFertileEarth;
        const normalGroundVolume = normalGroundDepth * affectedAreaM2
        const toCostNormalGroundingWithoutShipping = normalCavaGroundingCost * normalGroundDepth * affectedAreaM2;
        const excavatorQuantityM3PerYear = daysInTheYear * excavatorHoursDays * quantitOfM3ExcavatorPerHour;
        const normalExcavatorsQuantity = (normalGroundVolume / excavatorQuantityM3PerYear) < 1 ? 1 : Math.ceil(normalGroundVolume / excavatorQuantityM3PerYear);
        const transportCostTotalFreightNormalExcavator = distanceFromUrbanCenterToFreight * ExcavatorCostPerKm;
        const AmountOfLitersDieselConsumed = distanceFromUrbanCenterToFreight / kmRotatedPerLiter;
        const freightCostWithNormalDriver = avarageDriverSalaryFreightPerKm * distanceFromUrbanCenterToFreight;
        const fuelCostNormalFreight = dieselLiterPrice * AmountOfLitersDieselConsumed;
        const toCostNormalShippingOneWay = freightCostWithNormalDriver + fuelCostNormalFreight + transportCostTotalFreightNormalExcavator;
        const toCostFreightNroamlGroundingRoundTrip = toCostNormalShippingOneWay * 2;
        const toCostFreightFinalNormalGrounding = toCostFreightNroamlGroundingRoundTrip * normalExcavatorsQuantity;
        const toCostNormalGroundingWithFreight = toCostFreightFinalNormalGrounding + toCostNormalGroundingWithoutShipping;
        return toCostNormalGroundingWithFreight

    }else if (likeMining === FERRY) { //input por Ouro/Hectare e meses de garimpo
        const toCostNormalGroundingWithFreight = 0;
        return toCostNormalGroundingWithFreight

    }

    return cavaGroundingCostAuNorm
    

}

export default cavaGroundingCostAuNorm
 