import fixedCalcultions from "hooks/fixedCalculations";
import { ALLUVIUM, AMOUNT_GOLD, FERRY, PIT, YEARS_OF_MINING } from "../consts";

const cavaGroundingCostAuNorm = (country_region, likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, hectare) => {

    const { cavaGroundingCostAuNorm, general } = fixedCalcultions(country_region)
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
        hollowMediumDepth
    } = general
    const { normalCavaGroundingCostUSD } = cavaGroundingCostAuNorm

    console.log('cavaGroundingCostAuNorm', 
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
    hollowMediumDepth,
    normalCavaGroundingCostUSD)

    //const averageDepthOfFertileEarth = 0.4;
    //const quantitOfM3ExcavatorPerHour = 160;
    //const excavatorHoursDays = 10;
    //const kmRotatedPerLiter = 2.5;
    //const excavationGoldLoss = 2;
    //const hollowMediumDepth = 0.4;

    /*
        const excavatorCostPerKM = 3.8
        nome original = excavatorCostPerKM
        substituição  = excavatorCostPerKMUSD

        const avarageDriverSalaryFreightPerKm = 2.22;
        nome original = avarageDriverSalaryFreightPerKm
        substituição  = averageDriverSalaryFreightPerKmUSD

        const dieselLiterPrice = 3.24;
        nome original = dieselLiterPrice
        substituição  = priceLiterDieselUSD

        const goldDensity = 2.76;
        nome original = goldDensity
        substituição  = densityGold

        const depthMediumHollow = 2.76;
        nome original = depthMediumHollow
        substituição  = hollowMediumDepth

        const amountOfGoldGramsPerYearWell = 23700;
        nome original = amountOfGoldGramsPerYearWell
        substituição  = quantityOfGoldGramsPerYearWell

        const normalCavaGroundingCost = 23700;
        nome original = normalCavaGroundingCost
        substituição  = normalCavaGroundingCostUSD
    */
    
    const daysInTheYear = 365;
    const sterileOre = 7;
        

    if (likeMining === ALLUVIUM) { // Input por Ouro/Hectare
        const normalGroundDepth = pitDepth - averageDepthOfFertileEarth;
        const affectedAreaM2 = hectare * 10000
        const normalGroundVolume = normalGroundDepth * affectedAreaM2;

        const toCostNormalGroundingWithoutShipping = normalGroundVolume * normalCavaGroundingCostUSD;
        const excavatorQuantityM3PerYear = daysInTheYear * excavatorHoursDays * quantitOfM3ExcavatorPerHour;
        const normalExcavatorsQuantity =(normalGroundVolume / excavatorQuantityM3PerYear) < 1 ? 1 : Math.ceil(normalGroundVolume / excavatorQuantityM3PerYear);
        const transportCostTotalFreightNormalExcavator = distanceFromUrbanCenterToFreight * excavatorCostPerKMUSD;
        const AmountOfLitersDieselConsumed = distanceFromUrbanCenterToFreight / kmRotatedPerLiter;
        const freightCostWithNormalDriver = averageDriverSalaryFreightPerKmUSD * distanceFromUrbanCenterToFreight;
        const fuelCostNormalFreight = priceLiterDieselUSD * AmountOfLitersDieselConsumed;
        const toCostNormalShippingOneWay = freightCostWithNormalDriver + fuelCostNormalFreight + transportCostTotalFreightNormalExcavator;
        const toCostFreightNroamlGroundingRoundTrip = toCostNormalShippingOneWay * 2;
        const toCostFreightFinalNormalGrounding = toCostFreightNroamlGroundingRoundTrip * normalExcavatorsQuantity;
        const toCostNormalGroundingWithFreight = toCostFreightFinalNormalGrounding + toCostNormalGroundingWithoutShipping;
        return toCostNormalGroundingWithFreight
        
    }else if (likeMining === PIT && typeValueLikeMining === AMOUNT_GOLD) { // Input por Ouro
        const normalGroundDepth = hollowMediumDepth - averageDepthOfFertileEarth;
        const revolvedSoloTon = valueLikeMining / hollowMediumDepth;
        const revolvedSterileTon = revolvedSoloTon * sterileOre;
        const totalSoloRevolved = revolvedSoloTon + revolvedSterileTon;
        const losslessVolume = totalSoloRevolved / densityGold;
        const lossyVolume = losslessVolume * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / hollowMediumDepth;
        const normalGroundVolume = normalGroundDepth * affectedAreaM2;
        const toCostNormalGroundingWithoutShipping = normalGroundVolume * normalCavaGroundingCostUSD;
        const excavatorQuantityM3PerYear = daysInTheYear * excavatorHoursDays * quantitOfM3ExcavatorPerHour;
        const normalExcavatorsQuantity = (normalGroundVolume / excavatorQuantityM3PerYear) < 1 ? 1 : Math.ceil(normalGroundVolume / excavatorQuantityM3PerYear);
        const transportCostTotalFreightNormalExcavator = distanceFromUrbanCenterToFreight * excavatorCostPerKMUSD;
        const AmountOfLitersDieselConsumed = distanceFromUrbanCenterToFreight / kmRotatedPerLiter;
        const freightCostWithNormalDriver = averageDriverSalaryFreightPerKmUSD * distanceFromUrbanCenterToFreight;
        const fuelCostNormalFreight = priceLiterDieselUSD * AmountOfLitersDieselConsumed;
        const toCostNormalShippingOneWay = freightCostWithNormalDriver + fuelCostNormalFreight + transportCostTotalFreightNormalExcavator;
        const toCostFreightNroamlGroundingRoundTrip = toCostNormalShippingOneWay * 2;
        const toCostFreightFinalNormalGrounding = toCostFreightNroamlGroundingRoundTrip * normalExcavatorsQuantity;
        const toCostNormalGroundingWithFreight = toCostFreightFinalNormalGrounding + toCostNormalGroundingWithoutShipping;
        return toCostNormalGroundingWithFreight

    }else if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING)  { //Input Anos de Garimpo

    
        const quantityOfGramsGoldTotalWell = quantityOfGoldGramsPerYearWell * valueLikeMining;
        const revolvedSoloTon = quantityOfGramsGoldTotalWell / 0.4;
        const revolvedSterileTon = revolvedSoloTon * sterileOre;
        const totalSoloRevolved = revolvedSterileTon + revolvedSoloTon;
        const losslessVolume = totalSoloRevolved / densityGold;
        const lossyVolume = losslessVolume * excavationGoldLoss;
        const affectedAreaM2 = lossyVolume / hollowMediumDepth;
        const normalGroundDepth = hollowMediumDepth - averageDepthOfFertileEarth;
        const normalGroundVolume = normalGroundDepth * affectedAreaM2
        const toCostNormalGroundingWithoutShipping = normalCavaGroundingCostUSD * normalGroundDepth * affectedAreaM2;
        const excavatorQuantityM3PerYear = daysInTheYear * excavatorHoursDays * quantitOfM3ExcavatorPerHour;
        const normalExcavatorsQuantity = (normalGroundVolume / excavatorQuantityM3PerYear) < 1 ? 1 : Math.ceil(normalGroundVolume / excavatorQuantityM3PerYear);
        const transportCostTotalFreightNormalExcavator = distanceFromUrbanCenterToFreight * excavatorCostPerKMUSD;
        const AmountOfLitersDieselConsumed = distanceFromUrbanCenterToFreight / kmRotatedPerLiter;
        const freightCostWithNormalDriver = averageDriverSalaryFreightPerKmUSD * distanceFromUrbanCenterToFreight;
        const fuelCostNormalFreight = priceLiterDieselUSD * AmountOfLitersDieselConsumed;
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
 