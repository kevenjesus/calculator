import { ALLUVIUM, FERRY, PIT } from "../consts";

const dredgingAndRiverSediments = (hectare, pitDepth, distancePanningCenterUrbanFreight, gold, likeMining, panningTime) => {
    
    const productionSedimentTurnsFeatherTonnesPerMonthGold = 6.262;
    const equivalentErosionTonPerHaPerYear = 12.54;
    const erosionControlBRL = 66.42;
    const averageMotorPower = 54.4;
    const productionSedimentTurnsFeatherTonnesPerMonth = 37.82;
    const siltingPercentage = 0.15;
    const dredgingCostPerM3 = 28.13;
    const theAmountOfSedimentPer1DredgeM3PerHour = 300;
    const hoursWorkedByDredgePerDay = 24;
    const daysInTheYear = 365;
    const transportCost1DredgeBRL = 3.8;
    const kmRotatedPerLiter = 2.5;
    const priceLiterDiesel = 3.24;
    const averageDriverSalaryFreightPerKm = 2.22;
    const cavaAverageProductivity = 0.4;
    const excavationGoldLoss = 2;
    const densityGold = 2.76;
    const relationshipWithSterileOre = 7;
    const quantityOfGoldGramsPerYearWell = 23700;

    if(likeMining === FERRY && gold) {//input ouro
    const productionSedimentturnsTonFeather =	productionSedimentTurnsFeatherTonnesPerMonthGold * gold;
    const equivalenceHaImpacted = productionSedimentturnsTonFeather / equivalentErosionTonPerHaPerYear;
    const ferryDredgingDamageValue = equivalenceHaImpacted * erosionControlBRL;
    return ferryDredgingDamageValue

    }else if(likeMining === FERRY && panningTime) {//input meses de garimpo
    const productionSedimentturnsTonFeather = productionSedimentTurnsFeatherTonnesPerMonth * averageMotorPower * panningTime;
    const equivalenceHaImpacted = productionSedimentturnsTonFeather / equivalentErosionTonPerHaPerYear;
    const ferryDredgingDamageValue = equivalenceHaImpacted * erosionControlBRL
    return ferryDredgingDamageValue

    }else if (likeMining === PIT && gold) { //input ouro
    const upturnedGroundTon = gold / cavaAverageProductivity;
    const revolvedSterileTon = upturnedGroundTon * relationshipWithSterileOre;
    const toSoloRevolved = upturnedGroundTon + revolvedSterileTon;
    const losslesVolume = toSoloRevolved / densityGold;
    const volumeWithLoss = losslesVolume * excavationGoldLoss;
    const volumeLandSiltingRiver = volumeWithLoss * siltingPercentage;
    const dredgingCostWithoutFreight = dredgingCostPerM3 * volumeLandSiltingRiver;
    const amountOfSedimentPer1M3DredgePerYear = daysInTheYear * hoursWorkedByDredgePerDay * theAmountOfSedimentPer1DredgeM3PerHour;
    const dredgerQuantity1Year = (volumeLandSiltingRiver/amountOfSedimentPer1M3DredgePerYear) < 1 ? 1 : Math.round(volumeLandSiltingRiver/amountOfSedimentPer1M3DredgePerYear);
    const shippingCostDredgeBRL = distancePanningCenterUrbanFreight * transportCost1DredgeBRL;
    const quantityOfLitersConsumedDiesel = distancePanningCenterUrbanFreight / kmRotatedPerLiter;
    const fuelCostFreightDredging = priceLiterDiesel * quantityOfLitersConsumedDiesel;
    const shippingCostWithDredgingDriver = averageDriverSalaryFreightPerKm * distancePanningCenterUrbanFreight;
    const toCostShippingDredgingOneWay = shippingCostWithDredgingDriver + fuelCostFreightDredging + shippingCostDredgeBRL;
    const toCostShippingDredgingOneWayAndReturn = toCostShippingDredgingOneWay * 2;
    const toCostShippingFinalDredging = toCostShippingDredgingOneWayAndReturn * dredgerQuantity1Year;
    const toDredgingCostWithFreight = toCostShippingFinalDredging + dredgingCostWithoutFreight;
    return toDredgingCostWithFreight

    }else if (likeMining === ALLUVIUM && gold){ // input ouro/hectare
    const affectedAreaM2 = hectare * 10000
    const volumeWithLoss = pitDepth * affectedAreaM2
    const volumeLandSiltingRiver = siltingPercentage * volumeWithLoss;
    const dredgingCostWithoutFreight = dredgingCostPerM3 * volumeLandSiltingRiver;
    const amountOfSedimentPer1M3DredgePerYear = daysInTheYear * hoursWorkedByDredgePerDay * theAmountOfSedimentPer1DredgeM3PerHour;
    const dredgerQuantity1Year = (volumeLandSiltingRiver/amountOfSedimentPer1M3DredgePerYear) < 1 ? 1 : Math.round(volumeLandSiltingRiver/amountOfSedimentPer1M3DredgePerYear);
    const shippingCostDredgeBRL = distancePanningCenterUrbanFreight * transportCost1DredgeBRL;
    const quantityOfLitersConsumedDiesel = distancePanningCenterUrbanFreight / kmRotatedPerLiter;
    const fuelCostFreightDredging = priceLiterDiesel * quantityOfLitersConsumedDiesel;
    const shippingCostWithDredgingDriver = averageDriverSalaryFreightPerKm * distancePanningCenterUrbanFreight;
    const toCostShippingDredgingOneWay = shippingCostWithDredgingDriver + fuelCostFreightDredging + shippingCostDredgeBRL;
    const toCostShippingDredgingOneWayAndReturn = toCostShippingDredgingOneWay * 2;
    const toCostShippingFinalDredging = toCostShippingDredgingOneWayAndReturn * dredgerQuantity1Year;
    const toDredgingCostWithFreight = toCostShippingFinalDredging + dredgingCostWithoutFreight;
    return toDredgingCostWithFreight

    }else if (likeMining === PIT && panningTime){ //anos de garimpo no poço

    const quantityOfGramsGoldTotalWell = quantityOfGoldGramsPerYearWell * panningTime;
    const upturnedGroundTon = quantityOfGramsGoldTotalWell /  cavaAverageProductivity;
    const revolvedSterileTon = upturnedGroundTon * relationshipWithSterileOre;
    const toSoloRevolved = revolvedSterileTon + upturnedGroundTon;
    const losslesVolume = toSoloRevolved / densityGold;
    const volumeWithLoss = losslesVolume * excavationGoldLoss;
    const volumeLandSiltingRiver = siltingPercentage * volumeWithLoss;
    const dredgingCostWithoutFreight = dredgingCostPerM3 * volumeLandSiltingRiver;
    const amountOfSedimentPer1M3DredgePerYear = daysInTheYear * hoursWorkedByDredgePerDay * theAmountOfSedimentPer1DredgeM3PerHour;
    const dredgerQuantity1Year = (volumeLandSiltingRiver/amountOfSedimentPer1M3DredgePerYear) < 1 ? 1 : Math.round(volumeLandSiltingRiver/amountOfSedimentPer1M3DredgePerYear);
    const shippingCostDredgeBRL = distancePanningCenterUrbanFreight * transportCost1DredgeBRL;
    const quantityOfLitersConsumedDiesel = distancePanningCenterUrbanFreight / kmRotatedPerLiter;
    const fuelCostFreightDredging = priceLiterDiesel * quantityOfLitersConsumedDiesel;
    const shippingCostWithDredgingDriver = averageDriverSalaryFreightPerKm * distancePanningCenterUrbanFreight;
    const toCostShippingDredgingOneWay = shippingCostWithDredgingDriver + fuelCostFreightDredging + shippingCostDredgeBRL;
    const toCostShippingDredgingOneWayAndReturn = toCostShippingDredgingOneWay * 2;
    const toCostShippingFinalDredging = toCostShippingDredgingOneWayAndReturn * dredgerQuantity1Year;
    const toDredgingCostWithFreight = toCostShippingFinalDredging + dredgingCostWithoutFreight;
    return toDredgingCostWithFreight

    }
    return dredgingAndRiverSediments
}

export default dredgingAndRiverSediments