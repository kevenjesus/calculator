import fixedCalcultions from "hooks/fixedCalculations";
import { ALLUVIUM, AMOUNT_GOLD, FERRY, MONTHS_OF_MINING, PIT, YEARS_OF_MINING } from "../consts";

const dredgingAndRiverSediments = (country_region, likeMining, typeValueLikeMining, valueLikeMining, distanceanningCenter, pitDepth, hectare, motorPower) => {
    const { dredgingAndRiverSediments, general } = fixedCalcultions(country_region, motorPower)
    const { 
        kmRotatedPerLiter,
        averageDriverSalaryFreightPerKmUSD,
        priceLiterDieselUSD,
        cavaAverageProductivity,
        densityGold,
        excavationGoldLoss,
        quantityOfGoldGramsPerYearWell,
    } = general
    const { 
        averageMotorPower,
        dredgingCostPerM3, 
        productionSedimentTurnsFeatherTonnesPerMonth,
        equivalentErosionTonPerHaPerYear,
        erosionControlUSD,
        productionSedimentTurnsFeatherTonnesPerMonthGold,
        siltingPercentage,
        theAmountOfSedimentPer1DredgeM3PerHour,
        transportCost1DredgeUSD
      } = dredgingAndRiverSediments

    // console.log('dredgingAndRiverSediments', 
    // kmRotatedPerLiter,
    // averageDriverSalaryFreightPerKmUSD,
    // priceLiterDieselUSD,
    // cavaAverageProductivity,
    // densityGold,
    // excavationGoldLoss,
    // quantityOfGoldGramsPerYearWell, averageMotorPower,
    // dredgingCostPerM3, 
    // productionSedimentTurnsFeatherTonnesPerMonth,
    // equivalentErosionTonPerHaPerYear,
    // erosionControlUSD,
    // productionSedimentTurnsFeatherTonnesPerMonthGold,
    // siltingPercentage,
    // theAmountOfSedimentPer1DredgeM3PerHour,
    // transportCost1DredgeUSD)

    //const productionSedimentTurnsFeatherTonnesPerMonthGold = 6.262;
    //const equivalentErosionTonPerHaPerYear = 12.54;
    //const erosionControlUSD = 66.42;
    //const averageMotorPower = 54.4;
    //const productionSedimentTurnsFeatherTonnesPerMonth = 37.82;
    //const siltingPercentage = 0.15;
    //const dredgingCostPerM3 = 28.13;
    //const theAmountOfSedimentPer1DredgeM3PerHour = 300;
    //const transportCost1DredgeUSD = 3.8;
    //const kmRotatedPerLiter = 2.5;
    //const cavaAverageProductivity = 0.4;
    //const excavationGoldLoss = 2;
    //const densityGold = 2.76;
    //const quantityOfGoldGramsPerYearWell = 23700;
    
    /*
      const avaregeWageDriverFreightPerKm = 2.22;
      nome original = avaregeWageDriverFreightPerKm
      substituição  = averageDriverSalaryFreightPerKmUSD

      const dieselLiterPrice = 3.24;
      nome original = dieselLiterPrice
      substituição  = priceLiterDieselUSD
    */


    const hoursWorkedByDredgePerDay = 24;
    const daysInTheYear = 365;
    const relationshipWithSterileOre = 7;

    if(likeMining === FERRY && typeValueLikeMining === AMOUNT_GOLD) {//input ouro
    const productionSedimentturnsTonFeather =	productionSedimentTurnsFeatherTonnesPerMonthGold * valueLikeMining;
    const equivalenceHaImpacted = productionSedimentturnsTonFeather / equivalentErosionTonPerHaPerYear;
    const ferryDredgingDamageValue = equivalenceHaImpacted * erosionControlUSD;
  
    return ferryDredgingDamageValue

    }else if(likeMining === FERRY && typeValueLikeMining === MONTHS_OF_MINING) {//input meses de garimpo
    //const productionGoldBalsa = averageMotorPower * valueLikeMining * prodOuroKgporMes
    const productionSedimentturnsTonFeather = averageMotorPower * productionSedimentTurnsFeatherTonnesPerMonth * valueLikeMining;
    const equivalenceHaImpacted = productionSedimentturnsTonFeather / equivalentErosionTonPerHaPerYear;
    const ferryDredgingDamageValue = equivalenceHaImpacted * erosionControlUSD;
    return ferryDredgingDamageValue

    }else if (likeMining === PIT && typeValueLikeMining === AMOUNT_GOLD) { //input ouro
    const upturnedGroundTon = valueLikeMining / cavaAverageProductivity;
    const revolvedSterileTon = upturnedGroundTon * relationshipWithSterileOre;
    const toSoloRevolved = upturnedGroundTon + revolvedSterileTon;
    const losslesVolume = toSoloRevolved / densityGold;
    const volumeWithLoss = losslesVolume * excavationGoldLoss;
    const volumeLandSiltingRiver = volumeWithLoss * siltingPercentage;
    const dredgingCostWithoutFreight = dredgingCostPerM3 * volumeLandSiltingRiver;
    const amountOfSedimentPer1M3DredgePerYear = daysInTheYear * hoursWorkedByDredgePerDay * theAmountOfSedimentPer1DredgeM3PerHour;
    const dredgerQuantity1Year = (volumeLandSiltingRiver/amountOfSedimentPer1M3DredgePerYear) < 1 ? 1 : Math.round(volumeLandSiltingRiver/amountOfSedimentPer1M3DredgePerYear);
    const shippingCostDredgeBRL = distanceanningCenter * transportCost1DredgeUSD;
    const quantityOfLitersConsumedDiesel = distanceanningCenter / kmRotatedPerLiter;
    const fuelCostFreightDredging = priceLiterDieselUSD * quantityOfLitersConsumedDiesel;
    const shippingCostWithDredgingDriver = averageDriverSalaryFreightPerKmUSD * distanceanningCenter;
    const toCostShippingDredgingOneWay = shippingCostWithDredgingDriver + fuelCostFreightDredging + shippingCostDredgeBRL;
    const toCostShippingDredgingOneWayAndReturn = toCostShippingDredgingOneWay * 2;
    const toCostShippingFinalDredging = toCostShippingDredgingOneWayAndReturn * dredgerQuantity1Year;
    const toDredgingCostWithFreight = toCostShippingFinalDredging + dredgingCostWithoutFreight;
    return toDredgingCostWithFreight

    }else if (likeMining === PIT && typeValueLikeMining === YEARS_OF_MINING){ //anos de garimpo no poço
    const quantityOfGramsGoldTotalWell = quantityOfGoldGramsPerYearWell * valueLikeMining;
    const upturnedGroundTon = quantityOfGramsGoldTotalWell /  cavaAverageProductivity;
    const revolvedSterileTon = upturnedGroundTon * relationshipWithSterileOre;
    const toSoloRevolved = revolvedSterileTon + upturnedGroundTon;
    const losslesVolume = toSoloRevolved / densityGold;
    const volumeWithLoss = losslesVolume * excavationGoldLoss;
    const volumeLandSiltingRiver = siltingPercentage * volumeWithLoss;
    const dredgingCostWithoutFreight = dredgingCostPerM3 * volumeLandSiltingRiver;
    const amountOfSedimentPer1M3DredgePerYear = daysInTheYear * hoursWorkedByDredgePerDay * theAmountOfSedimentPer1DredgeM3PerHour;
    const dredgerQuantity1Year = (volumeLandSiltingRiver/amountOfSedimentPer1M3DredgePerYear) < 1 ? 1 : Math.round(volumeLandSiltingRiver/amountOfSedimentPer1M3DredgePerYear);
    const shippingCostDredgeBRL = distanceanningCenter * transportCost1DredgeUSD;
    const quantityOfLitersConsumedDiesel = distanceanningCenter / kmRotatedPerLiter;
    const fuelCostFreightDredging = priceLiterDieselUSD * quantityOfLitersConsumedDiesel;
    const shippingCostWithDredgingDriver = averageDriverSalaryFreightPerKmUSD * distanceanningCenter;
    const toCostShippingDredgingOneWay = shippingCostWithDredgingDriver + fuelCostFreightDredging + shippingCostDredgeBRL;
    const toCostShippingDredgingOneWayAndReturn = toCostShippingDredgingOneWay * 2;
    const toCostShippingFinalDredging = toCostShippingDredgingOneWayAndReturn * dredgerQuantity1Year;
    const toDredgingCostWithFreight = toCostShippingFinalDredging + dredgingCostWithoutFreight;
    return toDredgingCostWithFreight

    }else if (likeMining === ALLUVIUM){ // input ouro/hectare
    const affectedAreaM2 = hectare * 10000
    const volumeWithLoss = pitDepth * affectedAreaM2
    const volumeLandSiltingRiver = siltingPercentage * volumeWithLoss;
    const dredgingCostWithoutFreight = dredgingCostPerM3 * volumeLandSiltingRiver;
    const amountOfSedimentPer1M3DredgePerYear = daysInTheYear * hoursWorkedByDredgePerDay * theAmountOfSedimentPer1DredgeM3PerHour;
    const dredgerQuantity1Year = (volumeLandSiltingRiver/amountOfSedimentPer1M3DredgePerYear) < 1 ? 1 : Math.round(volumeLandSiltingRiver/amountOfSedimentPer1M3DredgePerYear);
    const shippingCostDredgeBRL = distanceanningCenter * transportCost1DredgeUSD;
    const quantityOfLitersConsumedDiesel = distanceanningCenter / kmRotatedPerLiter;
    const fuelCostFreightDredging = priceLiterDieselUSD * quantityOfLitersConsumedDiesel;
    const shippingCostWithDredgingDriver = averageDriverSalaryFreightPerKmUSD * distanceanningCenter;
    const toCostShippingDredgingOneWay = shippingCostWithDredgingDriver + fuelCostFreightDredging + shippingCostDredgeBRL;
    const toCostShippingDredgingOneWayAndReturn = toCostShippingDredgingOneWay * 2;
    const toCostShippingFinalDredging = toCostShippingDredgingOneWayAndReturn * dredgerQuantity1Year;
    const toDredgingCostWithFreight = toCostShippingFinalDredging + dredgingCostWithoutFreight;
    return toDredgingCostWithFreight
    }
}

export default dredgingAndRiverSediments